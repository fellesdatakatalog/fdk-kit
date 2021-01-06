import styled from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';

const Breadcrumb = styled.span`
  padding: ${theme.spacing('S12')} ${theme.spacing('S16')};
  border: 2px solid ${theme.colour(Colour.GREEN, 'G50')};
`;

export default { Breadcrumb };
