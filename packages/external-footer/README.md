# @fellesdatakatalog/external-footer

FDK footer component intended for external use.

## Installation

```bash
npm i @fellesdatakatalog/external-footer
```

## Dependencies

- react
- styled-components
- @fellesdatakatalog/theme

## Usage

### Basic usage

In order to use the footer component, wrap the application in global theme provider from `@fellesdatakatalog/theme`. Then, use the footer as any regular component.

```tsx
import React, { FC } from 'react';
import ThemeProvider from '@fellesdatakatalog/theme';
import Footer from '@fellesdatakatalog/external-footer';

const App: FC = () => (
  <ThemeProvider>
    <Footer>Footer</Footer>
  </ThemeProvider>
)

export default App;
```
