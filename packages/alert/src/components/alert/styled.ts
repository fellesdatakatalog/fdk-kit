import styled from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';

import { Check, Info, Warning, Error } from '@material-ui/icons';
import { Severity } from '../../enums';

interface Props {
  severity?: Severity;
}

const handleBackgroundColor = (severity?: Severity) => {
  switch (severity) {
    case Severity.SUCCESS:
      return theme.colour(Colour.GREEN, 'G20');
    case Severity.INFO:
      return theme.colour(Colour.BLUE, 'B30');
    case Severity.WARNING:
      return theme.colour(Colour.YELLOW, 'Y20');
    case Severity.ERROR:
      return theme.colour(Colour.RED, 'R20');
    default:
      return theme.colour(Colour.GREEN, 'G20');
  }
};

const handleColor = (severity?: Severity) => {
  switch (severity) {
    case Severity.SUCCESS:
      return theme.colour(Colour.GREEN, 'G50');
    case Severity.INFO:
      return theme.colour(Colour.BLUE, 'B50');
    case Severity.WARNING:
      return theme.colour(Colour.YELLOW, 'Y70');
    case Severity.ERROR:
      return theme.colour(Colour.RED, 'R50');
    default:
      return theme.colour(Colour.GREEN, 'G50');
  }
};

const Alert = styled.div<Props>`
  align-items: center;
  border-radius: 5px;
  border: none;
  display: flex;
  padding: 1em 1em;
  font-family: ${theme.fontFamily()};
  text-decoration: none !important;
  color: ${({ severity }) => handleColor(severity)};
  background-color: ${({ severity }) => handleBackgroundColor(severity)};
`;

const CheckIcon = styled(Check)`
  && {
    font-size: 2em;
    margin-right: 0.3em;
  }
`;

const InfoIcon = styled(Info)`
  && {
    font-size: 2em;
    margin-right: 0.3em;
  }
`;

const WarningIcon = styled(Warning)`
  && {
    font-size: 2em;
    margin-right: 0.3em;
  }
`;

const ErrorIcon = styled(Error)`
  && {
    font-size: 2em;
    margin-right: 0.3em;
  }
`;

export default { Alert, CheckIcon, InfoIcon, WarningIcon, ErrorIcon };
