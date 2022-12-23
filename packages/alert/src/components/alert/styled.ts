import styled, { css } from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';

import { Severity } from './enums';

interface Props {
  $severity?: Severity;
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
  ${({ $severity }) => {
    switch ($severity) {
      case Severity.INFO:
        return css`
          &,
          & * {
            color: ${theme.colour(Colour.BLUE, 'B60')};
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
            color: ${theme.colour(Colour.RED, 'R60')};
            background: ${theme.colour(Colour.RED, 'R20')};
          }
        `;
      default:
        return css`
          &,
          & * {
            color: ${theme.colour(Colour.GREEN, 'G60')};
            background: ${theme.colour(Colour.GREEN, 'G20')};
          }
        `;
    }
  }}
`;

const IconWrapper = styled.div<Props>`
  & > svg {
    height: 24px;
    width: 24px;
    & * {
      stroke: ${({ $severity }) => {
        switch ($severity) {
          case Severity.INFO:
            return css`
              ${theme.colour(Colour.BLUE, 'B60')};
            `;
          case Severity.WARNING:
            return css`
              ${theme.colour(Colour.YELLOW, 'Y70')};
            `;
          case Severity.ERROR:
            return css`
              ${theme.colour(Colour.RED, 'R60')};
            `;
          default:
            // SUCCESS
            return css`
              ${theme.colour(Colour.GREEN, 'G60')};
            `;
        }
      }};
    }
  }
  margin-right: ${theme.spacing('S6')};
`;

export default {
  Alert,
  IconWrapper
};
