import type { Theme } from '.';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
