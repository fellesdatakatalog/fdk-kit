# @fellesdatakatalog/expansion-panel

Expansion panel component.

## Installation

```bash
npm i @fellesdatakatalog/expansion-panel
```

## Dependencies

- react
- styled-components

## Usage

### Basic usage

In order to use the Expansion panel component, wrap the ExpansionPanelHead and ExpansionPanelBody in ExpansionPanel.

```tsx
import React, { FC } from 'react';
import ExpansionPanel, { ExpansionPanelBody, ExpansionPanelHead} from '@fellesdatakatalog/expansion-panel';

const App: FC = () => (
  <ExpansionPanel>
    <ExpansionPanelHead>
      Expand me!
    </ExpansionPanelHead>
    <ExpansionPanelBody>
      <p>
        Expansion panel body
      </p>
    </ExpansionPanelBody>
  </ExpansionPanel>
);

export default App;
```

### Custom expansion indicator

`ExpansionPanel` component accept expansionIndicator prop as custom elements.

```tsx
import React, { FC } from 'react';
import styled from 'styled-components';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ExpansionPanel, { ExpansionPanelBody, ExpansionPanelHead} from '@fellesdatakatalog/expansion-panel';

const App: FC = () => (
  <ExpansionPanel
    expansionIndicator={{
      expand: <ExpandMoreIcon />,
      collapse: <ExpandLessIcon />
    }}
  >
    <ExpansionPanelHead>Expand me!</ExpansionPanelHead>
    <ExpansionPanelBody>
      <p>
        Expansion panel body
      </p>
    </ExpansionPanelBody>
  </ExpansionPanel>
);

export default App;
```