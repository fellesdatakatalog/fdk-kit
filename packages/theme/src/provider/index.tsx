import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';

import GlobalStyles from '../styles';
import defaultTheme from '../theme';

interface Props {
  target?: HTMLElement;
  theme?: Record<string, unknown>;
  useGlobalStyles?: boolean;
}

const ThemeProvider: FC<PropsWithChildren<Props>> = ({
  children,
  target = document.head,
  theme = {},
  useGlobalStyles = true
}) => (
  <BaseThemeProvider theme={{ ...defaultTheme, ...theme }}>
    {useGlobalStyles && <GlobalStyles target={target} />}
    {children}
  </BaseThemeProvider>
);

export default ThemeProvider;
