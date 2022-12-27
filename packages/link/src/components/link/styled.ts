import styled from 'styled-components';
import { theme } from '@fellesdatakatalog/theme';

import ExternalLinkSVG from '../../images/external-link.svg';

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  color: currentColor !important;
  font-family: ${theme.fontFamily()};
  text-decoration: underline !important;
  text-underline-offset: 4px;
  line-height: 1.3;
  cursor: pointer;
`;

const Icon = styled.i`
  height: 18px;
  width: 18px;
  margin-right: ${theme.spacing('S6')};
  margin-top: -0.25rem;
  color: currentColor;

  & > svg {
    height: 100%;
    width: 100%;
    fill: currentColor;
    color: currentColor;
  }
`;

const ExternalLinkIcon = styled(ExternalLinkSVG)`
  flex-shrink: 0;
  height: 18px;
  width: 18px;
  margin-left: ${theme.spacing('S6')};
  margin-top: -0.25rem;

  &,
  & * {
    color: currentColor;
  }

  & > path {
    fill: currentColor;
  }
`;

export default { Link, Icon, ExternalLinkIcon };
