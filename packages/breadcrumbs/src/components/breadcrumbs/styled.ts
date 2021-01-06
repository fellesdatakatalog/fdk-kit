import styled from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';

const Breadcrumbs = styled.nav`
  & > ol {
    display: flex;
  }
`;

const Separator = styled.span`
  display: flex;
  align-items: center;
  margin: 0 ${theme.spacing('S12')};
  color: ${theme.colour(Colour.NEUTRAL, 'N20')};
`;

export default { Breadcrumbs, Separator };
