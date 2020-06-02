import styled from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';

import FooterIllustrationSVG from '../../images/footer-illustration.svg';

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 200px;
  padding: ${theme.spacing('S48')} 0;
  background: ${theme.colour(Colour.NEUTRAL, 'N60')};
  color: ${theme.colour(Colour.NEUTRAL, 'N0')};

  @media screen and (max-width: 1100px) {
    padding: ${theme.spacing('S32')} 0;
  }

  @media screen and (max-width: 700px) {
    font-size: ${theme.fontSize('FS12')};
  }
`;

const Illustration = styled(FooterIllustrationSVG)`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  transform: rotate(180deg);

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1140px;
  z-index: 1;

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

export default { Footer, Illustration, Content, Column };
