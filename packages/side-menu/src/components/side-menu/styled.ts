import styled, { css } from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';

const SideMenu = styled.aside``;

const Title = styled.h3`
  margin: ${theme.spacing('S12')} 0;
  font-size: ${theme.fontSize('FS24')};
  font-weight: ${theme.fontWeight('FW500')};
`;

const Menu = styled.nav`
  & > ul {
    padding: 0;
  }

  & > ul > li {
    border-top: 1px solid ${theme.colour(Colour.NEUTRAL, 'N20')};

    &:last-of-type {
      border-bottom: 1px solid ${theme.colour(Colour.NEUTRAL, 'N20')};
    }

    /* & > a {
      color: ${theme.colour(Colour.NEUTRAL, 'N50')} !important;
    } */
  }
`;

const MenuItem = styled.li<{ active?: boolean }>`
  margin: 0;
  padding: ${theme.spacing('S12')} 0;
  list-style: none;
  border-top: 1px solid red;
  font-size: ${theme.fontSize('FS16')};
  font-weight: ${theme.fontWeight('FW700')};
  color: ${theme.colour(Colour.NEUTRAL, 'N60')};

  &:last-of-type {
    border-bottom: 1px solid red;
  }

  & > a {
    text-decoration: none;
  }

  ${({ active }) =>
    !active &&
    css`
      font-weight: ${theme.fontWeight('FW400')};
      cursor: pointer;
    `}

  &:hover {
    color: currentColor;
  }
`;

const Link = styled.a``;

export default { SideMenu, Title, Menu, MenuItem, Link };
