import React from 'react';
import { StyleSheetManager } from 'styled-components';
import { iframeResizer } from 'iframe-resizer';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import { addDecorator, addParameters } from '@storybook/react';

import ThemeProvider from '../packages/theme/src';

addParameters({
  viewMode: 'docs',
  options: { showRoots: true },
  docs: {
    transformSource: src => {
      const match = /^\(\) => \(([\s\S]*(.*)[\s\S]*)\)$/.exec(src);
      return match ? match[1].replace(/^\s{2}/gm, '') : src;
    }
  }
});

addDecorator((story, { id }) => {
  const frameId = `story-iframe-${id}`;

  const injectScript = document => {
    const resizerScriptElement = document.createElement('script');
    resizerScriptElement.type = 'text/javascript';
    resizerScriptElement.src =
      './storybook-static/iframeResizer.contentWindow.min.js';
    document.head.appendChild(resizerScriptElement);
  };

  document.head
    .querySelectorAll('style[data-fonts]')
    .forEach(style => style.remove());

  return (
    <Frame
      id={frameId}
      style={{ height: '0', width: '1px', minWidth: '100%' }}
      frameBorder={0}
    >
      <FrameContextConsumer>
        {({ document }) => {
          injectScript(document);
          iframeResizer({ log: false, checkOrigin: false }, `#${frameId}`);

          return (
            <StyleSheetManager target={document.head}>
              <ThemeProvider target={document.head}>{story()}</ThemeProvider>
            </StyleSheetManager>
          );
        }}
      </FrameContextConsumer>
    </Frame>
  );
});
