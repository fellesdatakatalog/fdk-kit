# @fellesdatakatalog/alert

Alert component displays an alert message.

## Installation

```bash
npm i @fellesdatakatalog/alert
```

## Dependencies

- react
- styled-components
- @fellesdatakatalog/theme

## Usage

### Basic usage

In order to use the alert component, wrap the application in global theme provider from `@fellesdatakatalog/theme`. Then, use the alert as any regular component.

```tsx
import React, { FC } from 'react';
import ThemeProvider from '@fellesdatakatalog/theme';
import Alert, { Severity } from '@fellesdatakatalog/alert';

const App: FC = () => (
  <ThemeProvider>
    <Alert severity={Severity.SUCCESS}>
      You succeeded!
    </Alert>
  </ThemeProvider>
);

export default App;
```
