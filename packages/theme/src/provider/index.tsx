import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';

import GlobalStyles from '../styles';
import defaultTheme from '../theme';

interface Props {
  target?: HTMLElement;
  theme?: Record<string, unknown>;
}

const ThemeProvider: FC<PropsWithChildren<Props>> = ({
  children,
  target = document.head,
  theme = {}
}) => (
  <BaseThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <GlobalStyles target={target} />
    {children}
  </BaseThemeProvider>
);

export default ThemeProvider;
