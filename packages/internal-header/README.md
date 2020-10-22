# @fellesdatakatalog/internal-header

FDK header component intended for internal use.

## Installation

```bash
npm i @fellesdatakatalog/internal-header
```

## Dependencies

- react
- styled-components
- @fellesdatakatalog/link
- @fellesdatakatalog/theme
- @skatteetaten/frontend-components

## Usage

### Basic usage

In order to use the header component, wrap the application in global theme provider from `@fellesdatakatalog/theme`. Then, use the header as any regular component.

```tsx
import React, { FC } from 'react';
import ThemeProvider from '@fellesdatakatalog/theme';
import Footer from '@fellesdatakatalog/internal-header';

const App: FC = () => (
  <ThemeProvider>
    <Header username="Michelle" />
  </ThemeProvider>
)

export default App;
```

### Basic usage with logout event handler

Pass an event handler as a prop to the header component. Then wrap the application in global theme provider from `@fellesdatakatalog/theme` and use the header as any regular component.

```tsx
import React, { FC } from 'react';
import ThemeProvider, { ThemeProfile } from '@fellesdatakatalog/theme';
import Footer from '@fellesdatakatalog/internal-header';

const App: FC = () => (
  <ThemeProvider>
    <Header username="Michelle" onLogout={() => {}} />
  </ThemeProvider>
)

export default App;
```

### Skatteetaten usage

In order to use the header component, wrap the application in global theme provider from `@fellesdatakatalog/theme`. Then, use the header as any regular component.

```tsx
import React, { FC } from 'react';
import ThemeProvider, { ThemeProfile } from '@fellesdatakatalog/theme';
import Footer from '@fellesdatakatalog/internal-header';

const App: FC = () => (
  <ThemeProvider>
    <Header themeProfile={ThemeProfile.SKE} username="Michelle" />
  </ThemeProvider>
)

export default App;
```
