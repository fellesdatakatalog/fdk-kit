import styled, { css } from 'styled-components';
import { Alignment } from '@fellesdatakatalog/theme';

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

export default { Tabs, Bar };
