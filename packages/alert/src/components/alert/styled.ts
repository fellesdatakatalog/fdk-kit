import styled, { css } from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';

import Check from '../../images/icon-alert-success-md.svg';
import Info from '../../images/icon-alert-info-md.svg';
import Warning from '../../images/icon-alert-warning-md.svg';
import Error from '../../images/icon-alert-danger-md.svg';

import { Severity } from './enums';

interface Props {
  severity?: Severity;
}

const Alert = styled.div<Props>`
  align-items: center;
  border-radius: 5px;
  border: none;
  display: flex;
  padding: 1em 1em;
  font-family: ${theme.fontFamily()};
  font-weight: ${theme.fontWeight('FW400')};
  text-decoration: none !important;
  ${({ severity }) => {
    switch (severity) {
      case Severity.INFO:
        return css`
          &,
          & * {
            color: ${theme.colour(Colour.BLUE, 'B50')};
            background: ${theme.colour(Colour.BLUE, 'B30')};
          }
        `;
      case Severity.WARNING:
        return css`
          &,
          & * {
            color: ${theme.colour(Colour.YELLOW, 'Y70')};
            background: ${theme.colour(Colour.YELLOW, 'Y20')};
          }
        `;
      case Severity.ERROR:
        return css`
          &,
          & * {
            color: ${theme.colour(Colour.RED, 'R50')};
            background: ${theme.colour(Colour.RED, 'R20')};
          }
        `;
      default:
        return css`
          &,
          & * {
            color: ${theme.colour(Colour.GREEN, 'G50')};
            background: ${theme.colour(Colour.GREEN, 'G20')};
          }
        `;
    }
  }}
`;

const CheckIcon = styled(Check)`
  && {
    height: 24px;
    width: 24px;
    margin-right: ${theme.spacing('S6')};
    
    & > path {
      fill: ${theme.colour(Colour.GREEN, 'G50')};
    }
  }
`;

const InfoIcon = styled(Info)`
  && {
    height: 24px;
    width: 24px;
    margin-right: ${theme.spacing('S6')};
    
    & > path {
      fill: ${theme.colour(Colour.BLUE, 'B50')};
    }
  }
`;

const WarningIcon = styled(Warning)`
  && {
    height: 24px;
    width: 24px;
    margin-right: ${theme.spacing('S6')};
    
    & > path {
      fill: ${theme.colour(Colour.YELLOW, 'Y70')};
    }
  }
`;

const ErrorIcon = styled(Error)`
  && {
    height: 24px;
    width: 24px;
    margin-right: ${theme.spacing('S6')};
    
    & > path {
      fill: ${theme.colour(Colour.RED, 'R50')};
    }
  }
`;

export default { Alert, CheckIcon, InfoIcon, WarningIcon, ErrorIcon };
