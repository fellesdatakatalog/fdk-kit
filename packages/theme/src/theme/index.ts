import { Token, Colour, Unit } from './enums';

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
      N15: '#eeeff0',
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
      FS12: {
        [Unit.PX]: 12,
        [Unit.REM]: 1.2,
        [Unit.EM]: 1.2
      },
      FS14: {
        [Unit.PX]: 14,
        [Unit.REM]: 1.4,
        [Unit.EM]: 1.4
      },
      FS16: {
        [Unit.PX]: 16,
        [Unit.REM]: 1.6,
        [Unit.EM]: 1.6
      },
      FS20: {
        [Unit.PX]: 20,
        [Unit.REM]: 2.0,
        [Unit.EM]: 2.0
      },
      FS24: {
        [Unit.PX]: 24,
        [Unit.REM]: 2.4,
        [Unit.EM]: 2.4
      },
      FS28: {
        [Unit.PX]: 28,
        [Unit.REM]: 2.8,
        [Unit.EM]: 2.8
      },
      FS32: {
        [Unit.PX]: 32,
        [Unit.REM]: 3.2,
        [Unit.EM]: 3.2
      },
      FS40: {
        [Unit.PX]: 40,
        [Unit.REM]: 4.0,
        [Unit.EM]: 4.0
      },
      FS48: {
        [Unit.PX]: 48,
        [Unit.REM]: 4.8,
        [Unit.EM]: 4.8
      }
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
    S4: {
      [Unit.PX]: 4,
      [Unit.REM]: 0.4,
      [Unit.EM]: 0.4
    },
    S6: {
      [Unit.PX]: 6,
      [Unit.REM]: 0.6,
      [Unit.EM]: 0.6
    },
    S8: {
      [Unit.PX]: 8,
      [Unit.REM]: 0.8,
      [Unit.EM]: 0.8
    },
    S10: {
      [Unit.PX]: 10,
      [Unit.REM]: 1.0,
      [Unit.EM]: 1.0
    },
    S12: {
      [Unit.PX]: 12,
      [Unit.REM]: 1.2,
      [Unit.EM]: 1.2
    },
    S16: {
      [Unit.PX]: 16,
      [Unit.REM]: 1.6,
      [Unit.EM]: 1.6
    },
    S24: {
      [Unit.PX]: 24,
      [Unit.REM]: 2.4,
      [Unit.EM]: 2.4
    },
    S32: {
      [Unit.PX]: 32,
      [Unit.REM]: 3.2,
      [Unit.EM]: 3.2
    },
    S40: {
      [Unit.PX]: 40,
      [Unit.REM]: 4.0,
      [Unit.EM]: 4.0
    },
    S48: {
      [Unit.PX]: 48,
      [Unit.REM]: 4.8,
      [Unit.EM]: 4.8
    },
    S56: {
      [Unit.PX]: 56,
      [Unit.REM]: 5.6,
      [Unit.EM]: 5.6
    },
    S64: {
      [Unit.PX]: 64,
      [Unit.REM]: 6.4,
      [Unit.EM]: 6.4
    },
    S72: {
      [Unit.PX]: 72,
      [Unit.REM]: 7.2,
      [Unit.EM]: 7.2
    },
    S80: {
      [Unit.PX]: 80,
      [Unit.REM]: 8.0,
      [Unit.EM]: 8.0
    },
    S88: {
      [Unit.PX]: 88,
      [Unit.REM]: 8.8,
      [Unit.EM]: 8.8
    },
    S96: {
      [Unit.PX]: 96,
      [Unit.REM]: 9.6,
      [Unit.EM]: 9.6
    }
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
