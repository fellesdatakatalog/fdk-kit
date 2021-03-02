import styled, { css } from 'styled-components';
import { theme, Colour } from '@fellesdatakatalog/theme';
import { Variant } from './enums';

interface Props {
  variant?: Variant;
}

const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  appearance: none;
  border: none;
  outline: none;
  font-weight: ${theme.fontWeight('FW500')};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;

  ${({ variant }) => {
    switch (variant) {
      case Variant.SECONDARY:
        return css`
          color: ${theme.colour(Colour.NEUTRAL, 'N60')};
          background: ${theme.colour(Colour.NEUTRAL, 'N30')};
          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
            0px 2px 2px 0px rgba(0, 0, 0, 0.14),
            0px 1px 5px 0px rgba(0, 0, 0, 0.12);
          border-radius: 4px;
          padding: ${theme.spacing('S10')} ${theme.spacing('S24')};

          &:hover,
          &:focus {
            color: ${theme.colour(Colour.NEUTRAL, 'N0')};
            background: ${theme.colour(Colour.NEUTRAL, 'N70')};
          }

          &:disabled {
            cursor: default;
            pointer-events: none;
            color: ${theme.colour(Colour.NEUTRAL, 'N0')};
            background: ${theme.colour(Colour.NEUTRAL, 'N30')};
          }
        `;
      case Variant.TERTIARY:
        return css`
          background: inherit;
          border-bottom: 1px dashed;
          height: max-content;

          &:focus {
            outline: 1px dashed ${theme.colour(Colour.NEUTRAL, 'N70')};
          }

          &:disabled {
            cursor: default;
            pointer-events: none;
            color: ${theme.colour(Colour.NEUTRAL, 'N30')};
          }
        `;
      default:
        return css`
          color: ${theme.colour(Colour.NEUTRAL, 'N0')};
          background: ${theme.colour(Colour.NEUTRAL, 'N60')};
          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
            0px 2px 2px 0px rgba(0, 0, 0, 0.14),
            0px 1px 5px 0px rgba(0, 0, 0, 0.12);
          border-radius: 4px;
          padding: ${theme.spacing('S10')} ${theme.spacing('S24')};

          &:hover,
          &:focus {
            background: ${theme.colour(Colour.NEUTRAL, 'N70')};
          }

          &:disabled {
            cursor: default;
            pointer-events: none;
            color: ${theme.colour(Colour.NEUTRAL, 'N0')};
            background: ${theme.colour(Colour.NEUTRAL, 'N30')};
          }
        `;
    }
  }}
`;

export default { Button };
