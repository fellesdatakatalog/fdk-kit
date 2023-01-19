import styled from 'styled-components';
import { theme } from '@fellesdatakatalog/theme';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1140px;
  z-index: 1;
  font-size: ${theme.fontSize('FS16')};

  @media screen and (max-width: 1400px) {
    max-width: 100%;
    padding: 0 130px;
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacing('S24')};
    text-align: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:first-of-type {
    flex-basis: 50%;
  }

  & > *:nth-of-type(n + 2) {
    margin-top: ${theme.spacing('S12')};
  }

  @media screen and (max-width: 1400px) {
    &:first-of-type {
      flex-basis: 40%;
    }
  }

  @media screen and (max-width: 1100px) {
    align-items: center;

    &:nth-of-type(n + 2) {
      margin-top: ${theme.spacing('S16')};
    }
  }

  @media screen and (max-width: 700px) {
    & > a > i,
    & > a > div > svg {
      height: 12px;
      width: 12px;
    }
  }
`;

export default { Content, Column };
