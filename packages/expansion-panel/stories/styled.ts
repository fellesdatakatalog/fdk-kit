import styled from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';

import { SC } from '../src';

const CustomExpandIndicator = styled(SC.ExpansionPanel.ExpandIcon)`
  border: 2px solid ${theme.colour(Colour.RED, 'R50')};

  & > path {
    fill: ${theme.colour(Colour.RED, 'R50')};
  }
`;

const CustomCollapseIndicator = styled(SC.ExpansionPanel.CollapseIcon)`
  border: 2px solid ${theme.colour(Colour.RED, 'R50')};

  & > path {
    fill: ${theme.colour(Colour.RED, 'R50')};
  }
`;

export default { CustomExpandIndicator, CustomCollapseIndicator };
