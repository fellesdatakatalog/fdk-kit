# @fellesdatakatalog/icons

Common icon module that provides icons.

## Installation

```bash
npm i @fellesdatakatalog/icons
```

## Dependencies

- react
- styled-components

## Usage

### Basic usage

In order expose icons to the application, wrap the application in a icon provider component exposed by the library.

```tsx
import React, { FC } from 'react';
import IconProvider from '@fellesdatakatalog/icons';

const App: FC = () => (
  <IconProvider>
    <div>App</div>
  </IconProvider>
)

export default App;
```