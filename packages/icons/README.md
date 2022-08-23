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

```tsx
import React, { FC } from 'react';
import SVG from '@fellesdatakatalog/icons';

const Icon1 = () => <SVG name='quality1' className='quality1-icon' />;

const App: FC = () => (
  <div>
    <Icon1 />
  </div>
)

export default App;
```