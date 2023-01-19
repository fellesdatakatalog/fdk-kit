import styled, { css } from "styled-components";
import { theme, Colour } from "@fellesdatakatalog/theme";

const Tab = styled.li<{ active: boolean }>`
  display: flex;
  border: solid transparent;
  border-width: 1px 1px 0 1px;
  border-radius: 4px 4px 0 0;
  cursor: pointer;

  &:nth-of-type(n + 2) {
    margin-left: -1px;
  }

  ${({ active }) =>
    active &&
    css`
      position: relative;
      border-color: ${theme.colour(Colour.NEUTRAL, "N60")};

      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: -10000%;
        width: 10000%;
        border-bottom: 1px solid ${theme.colour(Colour.NEUTRAL, "N60")};
      }

      &:after {
        content: "";
        position: absolute;
        right: -10000%;
        bottom: 0;
        width: 10000%;
        border-bottom: 1px solid ${theme.colour(Colour.NEUTRAL, "N60")};
      }
    `}
`;

const Contents = styled.span`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  overflow: hidden;
`;

export default { Tab, Contents };
