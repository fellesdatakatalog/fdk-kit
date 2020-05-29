import { Token, Colour } from './enums';

import {
  selectColour as colour,
  selectFontFamily as fontFamily,
  selectFontSize as fontSize,
  selectFontWeight as fontWeight,
  selectSpacing as spacing
} from './selectors';

export default {
  [Token.COLOUR]: {
    [Colour.NEUTRAL]: {
      N0: '#ffffff',
      N10: '#f7f7f7',
      N20: '#dfe1e2',
      N30: '#d5d7d9',
      N40: '#969ba0',
      N50: '#6c737a',
      N60: '#2d3741',
      N70: '#121619'
    },
    [Colour.BLUE]: {
      B20: '#f0f3f7',
      B30: '#d5e1f2',
      B50: '#335380'
    },
    [Colour.BROWN]: {
      B20: '#f7f3f0',
      B30: '#f2e1d5',
      B50: '#805333'
    },
    [Colour.CYAN]: {
      C20: '#f0f6f7',
      C30: '#d5edf2',
      C50: '#2e6773'
    },
    [Colour.VIOLET]: {
      V20: '#f4f0f7',
      V30: '#e4d5f2',
      V50: '#593380'
    },
    [Colour.RED]: {
      R10: '#f7f0f3',
      R20: '#f9dae6',
      R30: '#f2d5e1',
      R40: '#f1a9c5',
      R50: '#d70a5a',
      R60: '#803353'
    },
    [Colour.YELLOW]: {
      Y20: '#fff2d8',
      Y30: '#ffe5b1',
      Y50: '#ffbe3c',
      Y70: '#885b00'
    },
    [Colour.GREEN]: {
      G10: '#f4f7f2',
      G20: '#dff2d5',
      G50: '#3e7b1f'
    }
  },
  [Token.FONT]: {
    family: 'Heebo, sans-serif',
    size: {
      FS12: 12,
      FS14: 14,
      FS16: 16,
      FS20: 20,
      FS24: 24,
      FS28: 28,
      FS32: 32,
      FS40: 40,
      FS48: 48
    },
    weight: {
      FW100: 100,
      FW300: 300,
      FW400: 400,
      FW500: 500,
      FW700: 700,
      FW800: 800,
      FW900: 900
    }
  },
  [Token.SPACING]: {
    S4: 4,
    S6: 6,
    S8: 8,
    S10: 10,
    S12: 12,
    S16: 16,
    S24: 24,
    S32: 32,
    S40: 40,
    S48: 48,
    S56: 56,
    S64: 64,
    S72: 72,
    S80: 80,
    S88: 88,
    S96: 96
  }
};

export * from './enums';

export const selectors = {
  colour,
  fontFamily,
  fontSize,
  fontWeight,
  spacing
};
