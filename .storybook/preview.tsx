import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';

import ThemeProvider, { theme } from '../packages/theme/src';

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

addDecorator(story => (
  <ThemeProvider>
    <div style={{ fontFamily: theme.fontFamily()({}) }}>{story()}</div>
  </ThemeProvider>
));
