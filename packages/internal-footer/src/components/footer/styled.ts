import styled from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';
import SkeFooterBase from '@skatteetaten/frontend-components/FooterContent';

import FooterIllustrationSVG from '../../images/footer-illustration.svg';

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 200px;
  padding: ${theme.spacing('S48')} 0;
  background: ${theme.colour(Colour.NEUTRAL, 'N60')};

  &,
  & * {
    color: ${theme.colour(Colour.NEUTRAL, 'N0')};
  }

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

const SkeFooter = styled(SkeFooterBase)`
  & > footer > div {
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default { Footer, Illustration, SkeFooter };
