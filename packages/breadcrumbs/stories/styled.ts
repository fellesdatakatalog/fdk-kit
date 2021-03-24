import styled from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';

const Breadcrumbs = styled.nav`
  padding: ${theme.spacing('S12')} ${theme.spacing('S16')};
  border: 2px solid ${theme.colour(Colour.RED, 'R50')};
`;

const Breadcrumb = styled.li`
  padding: ${theme.spacing('S12')} ${theme.spacing('S16')};
  border: 2px solid ${theme.colour(Colour.GREEN, 'G50')};
`;

export default { Breadcrumbs, Breadcrumb };
