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
      N10: '#fafafa',
      N15: '#eeeff0',
      N20: '#dfe1e2',
      N30: '#d5d7d9',
      N40: '#969ba0',
      N50: '#6c737a',
      N60: '#2d3741',
      N70: '#121619'
    },
    [Colour.BLUE]: {
      B15: '#f0f3f7',
      B20: '#f0f3f7',
      B30: '#d5e1f2',
      B40: '#afc2db',
      B45: '#89a2c4',
      B50: '#6885ad',
      B55: '#4b6b96',
      B60: '#335380'
    },
    [Colour.BROWN]: {
      B15: '#f7f2ed',
      B20: '#f7f3f0',
      B30: '#dff2d5',
      B40: '#dbc2b2',
      B45: '#c4a289',
      B50: '#ad8468',
      B55: '#96694b',
      B60: '#805333'
    },
    [Colour.CYAN]: {
      C20: '#f0f6f7',
      C30: '#d5edf2',
      C50: '#2e6773'
    },
    [Colour.VIOLET]: {
      V15: '#f4f0f7',
      V20: '#f4f0f7',
      V30: '#e4d5f2',
      V40: '#C6B2DB',
      V45: '#a789c4',
      V50: '#8b68ad',
      V55: '#714b96',
      V60: '#593380'
    },
    [Colour.RED]: {
      R10: '#f7f0f3',
      R15: '#f7f0f3',
      R20: '#f9dae6',
      R30: '#f2d5e1',
      R40: '#dbb2c6',
      R45: '#c489a6',
      R50: '#ad688a',
      R55: '#964b6f',
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
      G15: '#f0f6f7',
      G20: '#dff2d5',
      G30: '#d5edf2',
      G40: '#b2d4db',
      G45: '#89bbc4',
      G50: '#68a2ad',
      G55: '#4b8996',
      G60: '#2e6773'
    },
    [Colour.GOLD]: {
      G15: '#f7f6f0',
      G30: '#f2edd5',
      G40: '#dbd4af',
      G45: '#c4bb89',
      G50: '#ada268',
      G55: '#96894b',
      G60: '#807333',
      G70: '#695c1f'
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
