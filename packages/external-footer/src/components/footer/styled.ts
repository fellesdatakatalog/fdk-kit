import styled from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';

import FooterIllustrationSVG from '../../images/footer-illustration.svg';

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 200px;
  padding: ${theme.spacing('S48')} 0;
  font-size: ${theme.fontSize('FS14')};
  background: ${theme.colour(Colour.NEUTRAL, 'N60')};

  &,
  & * {
    color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  }
`;

const Illustration = styled(FooterIllustrationSVG)`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  transform: rotate(180deg);

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1140px;
  z-index: 1;

  @media screen and (max-width: 1500px) {
    max-width: 600px;
  }

  @media screen and (max-width: 696px) {
    padding: 0 ${theme.spacing('S48')};
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  & > *:nth-child(n + 3) {
    margin-top: ${theme.spacing('S12')};
  }

  & > h6 {
    margin-bottom: ${theme.spacing('S16')};
    font-size: ${theme.fontSize('FS16')};
    font-weight: ${theme.fontWeight('FW700')};
  }

  @media screen and (max-width: 1500px) {
    flex-basis: 50%;

    &:nth-of-type(n + 3) {
      margin-top: ${theme.spacing('S32')};
    }
  }

  @media screen and (max-width: 600px) {
    flex-shrink: 0;
    flex-basis: 100%;

    &:nth-of-type(n + 2) {
      margin-top: ${theme.spacing('S32')};
    }
  }
`;

const ColumnHeading = styled.div`
  font-size: ${theme.fontSize('FS16')};
  font-weight: ${theme.fontWeight('FW700')};
  margin-bottom: ${theme.spacing('S16')};
`;

export default { Footer, Illustration, Content, Column, ColumnHeading };
