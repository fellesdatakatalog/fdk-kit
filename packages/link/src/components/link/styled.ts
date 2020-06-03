import styled from 'styled-components';
import { theme } from '@fellesdatakatalog/theme';

import ExternalLinkSVG from '../../images/external-link.svg';

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  color: currentColor;
  font-family: ${theme.fontFamily()};
  cursor: pointer;
`;

const Icon = styled.i`
  height: 18px;
  width: 18px;
  margin-right: ${theme.spacing('S6')};
  color: currentColor;

  & > svg {
    height: 100%;
    width: 100%;
    fill: currentColor;
  }
`;

const ExternalLinkIcon = styled(ExternalLinkSVG)`
  height: 18px;
  width: 18px;
  margin-left: ${theme.spacing('S6')};

  & > path {
    fill: currentColor;
  }
`;

const Underlined = styled.div`
  display: inline-flex;
  padding-bottom: 1px;
  border-bottom: 1px solid currentColor;
`;

export default { Link, Icon, ExternalLinkIcon, Underlined };