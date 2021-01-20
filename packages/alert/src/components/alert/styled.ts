import styled, { css } from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';

import { Check, Info, Warning, Error } from '@material-ui/icons';
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
  text-decoration: none !important;
  ${({ severity }) => {
    switch (severity) {
      case Severity.INFO:
        return css`
          color: ${theme.colour(Colour.BLUE, 'B50')};
          background: ${theme.colour(Colour.BLUE, 'B30')};
        `;
      case Severity.WARNING:
        return css`
          color: ${theme.colour(Colour.YELLOW, 'Y70')};
          background: ${theme.colour(Colour.YELLOW, 'Y20')};
        `;
      case Severity.ERROR:
        return css`
          color: ${theme.colour(Colour.RED, 'R50')};
          background: ${theme.colour(Colour.RED, 'R20')};
        `;
      default:
        return css`
          color: ${theme.colour(Colour.GREEN, 'G50')};
          background: ${theme.colour(Colour.GREEN, 'G20')};
        `;
    }
  }}
`;

const CheckIcon = styled(Check)`
  && {
    font-size: ${theme.fontSize('FS20')};
    margin-right: ${theme.spacing('S4')};
  }
`;

const InfoIcon = styled(Info)`
  && {
    font-size: ${theme.fontSize('FS20')};
    margin-right: ${theme.spacing('S4')};
  }
`;

const WarningIcon = styled(Warning)`
  && {
    font-size: ${theme.fontSize('FS20')};
    margin-right: ${theme.spacing('S4')};
  }
`;

const ErrorIcon = styled(Error)`
  && {
    font-size: ${theme.fontSize('FS20')};
    margin-right: ${theme.spacing('S4')};
  }
`;

export default { Alert, CheckIcon, InfoIcon, WarningIcon, ErrorIcon };
