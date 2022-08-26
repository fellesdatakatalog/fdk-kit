# @fellesdatakatalog/icons

Common icon module that provides icons.

## Installation

```bash
npm i @fellesdatakatalog/icons
```

## Dependencies
- React

## Usage

### Basic usage

```tsx
import React, { FC } from 'react';
import SvgIcon from '@fellesdatakatalog/icons';

const Icon1 = () => <SvgIcon name='checkStroke' className='checkStroke-icon' />;

const App: FC = () => (
  <div>
    <Icon1 />
  </div>
)

export default App;
```