# @fellesdatakatalog/button

Button component.

## Installation

```bash
npm i @fellesdatakatalog/button
```

## Dependencies

- react
- styled-components
- @material-ui/icons
- @fellesdatakatalog/theme

## Usage

### Basic usage

In order to use the Button component, wrap the application in global theme provider from `@fellesdatakatalog/theme`. Then, use the alert as any regular component.

```tsx
import React, { FC } from 'react';
import ThemeProvider from '@fellesdatakatalog/theme';
import Button from '@fellesdatakatalog/button';

const App: FC = () => (
  <ThemeProvider>
    <Button>
      Press me!
    </Button>
  </ThemeProvider>
);

export default App;
```
