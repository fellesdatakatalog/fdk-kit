import styled, { css } from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';

const Breadcrumb = styled.li<{ active?: boolean }>`
  ${({ active }) =>
    !active &&
    css`
      color: ${theme.colour(Colour.NEUTRAL, 'N40')};
      cursor: pointer;
    `}

  &:hover {
    color: currentColor;
  }
`;

export default { Breadcrumb };
