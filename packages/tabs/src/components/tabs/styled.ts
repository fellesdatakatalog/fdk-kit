import styled, { css } from 'styled-components';
import { theme, Colour, Alignment } from '@fellesdatakatalog/theme';

const Tabs = styled.div``;

const Bar = styled.ul<{ alignment: Alignment }>`
  display: flex;
  overflow: hidden;

  ${({ alignment }) => {
    switch (alignment) {
      case Alignment.LEFT:
        return css`
          justify-content: flex-start;
        `;
      case Alignment.RIGHT:
        return css`
          justify-content: flex-end;
        `;
      case Alignment.CENTRE:
      default:
        return css`
          justify-content: center;
        `;
    }
  }}
`;

const Tab = styled.li<{ active: boolean }>`
  border: solid transparent;
  border-width: 1px 1px 0 1px;
  border-radius: 4px 4px 0 0;
  cursor: pointer;

  &:nth-of-type(n + 2) {
    margin-left: ${theme.spacing('S6')};
  }

  ${({ active }) =>
    active &&
    css`
      position: relative;
      border-color: ${theme.colour(Colour.NEUTRAL, 'N60')};

      &:before {
        content: '';
        position: absolute;
        left: -10000%;
        bottom: 0;
        width: 10000%;
        border-bottom: 1px solid ${theme.colour(Colour.NEUTRAL, 'N60')};
      }

      &:after {
        content: '';
        position: absolute;
        right: -10000%;
        bottom: 0;
        width: 10000%;
        border-bottom: 1px solid ${theme.colour(Colour.NEUTRAL, 'N60')};
      }
    `}
`;

const TabChild = styled.div`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  overflow: hidden;
`;

const Contents = styled.div``;

export default { Tabs, Bar, Tab, TabChild, Contents };
