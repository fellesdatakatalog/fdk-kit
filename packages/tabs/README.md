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

In order to use tabs component, wrap the application in global theme provider from `@fellesdatakatalog/theme`. Then, use tabs as any regular component.

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
)

export default App;
```

### Setting default active tab

If not otherwise specified, the first tab will be set to active. In order to overwrite this behaviour, a tab can be manually set to active using an `active` prop.

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
)

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
)

export default App;
```

### Custom Tab and Pane children

Tab and Pane components both accept text and element nodes as children.

```tsx
import React, { FC } from 'react';
import ThemeProvider from '@fellesdatakatalog/theme';
import Tabs, { Tab, Pane } from '@fellesdatakatalog/tabs';
import FavouriteIcon from '@material-ui/icons/Favorite'

const App: FC = () => (
  <ThemeProvider>
    <Tabs>
      <Tab for="pane-1">
        <span>Tab 1</span>
      </Tab>
      <Tab for="pane-2" active>
        <span>Tab 2</span>
      </Tab>
      <Tab for="pane-3">
        <span>Tab 3</span>
      </Tab>
      <Pane id="pane-1">
        <div>Pane 1</div>
      </Pane>
      <Pane id="pane-2">
        <div>Pane 2</div>
      </Pane>
      <Pane id="pane-3">
        <div>Pane 3</div>
      </Pane>
    </Tabs>
  </ThemeProvider>
)

export default App;
```
