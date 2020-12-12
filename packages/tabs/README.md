# @fellesdatakatalog/tabs

Tabs make it easy to explore and switch between different views.

## Installation

```bash
npm i @fellesdatakatalog/tabs
```

## Dependencies

- react
- styled-components
- @fellesdatakatalog/theme

## Usage

### Basic usage

In order to use tabs component, wrap the application with `ThemeProvider` from `@fellesdatakatalog/theme`. Then, use `Tabs` as any regular component.

```tsx
import React, { FC } from 'react';
import ThemeProvider from '@fellesdatakatalog/theme';
import Tabs, { Tab, Pane } from '@fellesdatakatalog/tabs';

const App: FC = () => (
  <ThemeProvider>
    <Tabs>
      <Tab for="pane-1">Tab 1</Tab>
      <Tab for="pane-2">Tab 2</Tab>
      <Tab for="pane-3">Tab 3</Tab>
      <Pane id="pane-1">Pane 1</Pane>
      <Pane id="pane-2">Pane 2</Pane>
      <Pane id="pane-3">Pane 3</Pane>
    </Tabs>
  </ThemeProvider>
);

export default App;
```

### Setting default active tab

If not otherwise specified, the first `Tab` will be active. In order to overwrite this behaviour, any `Tab` can be manually set to be active using an `active` prop.

```tsx
import React, { FC } from 'react';
import ThemeProvider from '@fellesdatakatalog/theme';
import Tabs, { Tab, Pane } from '@fellesdatakatalog/tabs';

const App: FC = () => (
  <ThemeProvider>
    <Tabs>
      <Tab for="pane-1">Tab 1</Tab>
      <Tab for="pane-2" active>Tab 2</Tab>
      <Tab for="pane-3">Tab 3</Tab>
      <Pane id="pane-1">Pane 1</Pane>
      <Pane id="pane-2">Pane 2</Pane>
      <Pane id="pane-3">Pane 3</Pane>
    </Tabs>
  </ThemeProvider>
);

export default App;
```

### Tabs alignment

If not otherwise specified, tabs will be centrally aligned. In order to overwrite this behaviour, pass a `tabsAlignment` prop to `Tabs` component.

```tsx
import React, { FC } from 'react';
import ThemeProvider, { Alignment } from '@fellesdatakatalog/theme';
import Tabs, { Tab, Pane } from '@fellesdatakatalog/tabs';

const App: FC = () => (
  <ThemeProvider>
    <Tabs tabsAlignment={Alignment.LEFT}>
      <Tab for="pane-1">Tab 1</Tab>
      <Tab for="pane-2" active>Tab 2</Tab>
      <Tab for="pane-3">Tab 3</Tab>
      <Pane id="pane-1">Pane 1</Pane>
      <Pane id="pane-2">Pane 2</Pane>
      <Pane id="pane-3">Pane 3</Pane>
    </Tabs>
  </ThemeProvider>
);

export default App;
```

### Custom tabs and panes

`Tab` and `Pane` components are polymorphic and can thus be customised using `as` prop. Furthermore, `Tab` and `Pane` components accept arbitrary text and element nodes as children.

```tsx
import React, { FC } from 'react';
import styled from 'styled-components';
import ThemeProvider from '@fellesdatakatalog/theme';
import Tabs, { Tab, Pane } from '@fellesdatakatalog/tabs';
import FavouriteIcon from '@material-ui/icons/Favorite'

const CustomTab = styled.div`
  font-weight: bold;
`;

const CustomPane = styled.div`
  padding: 16px;
`;

const App: FC = () => (
  <ThemeProvider>
    <Tabs>
      <Tab for="pane-1" as={CustomTab}>
        <span>Tab 1</span>
      </Tab>
      <Tab for="pane-2" active as={CustomTab}>
        <span>Tab 2</span>
      </Tab>
      <Tab for="pane-3" as={CustomTab}>
        <span>Tab 3</span>
      </Tab>
      <Pane id="pane-1" as={CustomPane}>
        <div>Pane 1</div>
      </Pane>
      <Pane id="pane-2" as={CustomPane}>
        <div>Pane 2</div>
      </Pane>
      <Pane id="pane-3" as={CustomPane}>
        <div>Pane 3</div>
      </Pane>
    </Tabs>
  </ThemeProvider>
);

export default App;
```
