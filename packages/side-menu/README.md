# @fellesdatakatalog/side-menu

Side menu component.

## Installation

```bash
npm i @fellesdatakatalog/side-menu
```

## Dependencies

- react
- styled-components
- @fellesdatakatalog/theme

## Usage

### Basic usage

In order to use the SideMenu component, wrap the application in global theme provider from `@fellesdatakatalog/theme`. Then, use the alert as any regular component.

```tsx
import React, { FC } from 'react';
import ThemeProvider from '@fellesdatakatalog/theme';
import Button from '@fellesdatakatalog/side-menu';

const menuItems = [
  { id: 'page1', title: 'Page 1', active: true },
  { id: 'page2', title: 'Page 2' },
  { id: 'page3', title: 'Page 3' }
];

const App: FC = () => (
  <ThemeProvider>
    <SideMenu title='My side menu' menuItems={menuItems} />
  </ThemeProvider>
);

export default App;
```
