// @flow

function pxToRem(value) {
  return value / 16 + "rem";
}

export default {
  FontFamilies: {
    Primary: '"Montserrat", sans-serif',
    Secondary: '"Lato", sans-serif'
  },
  FontSizes: {
    h1: pxToRem(32),
    h2: pxToRem(24),
    h3: pxToRem(20),
    h4: pxToRem(18),
    h5: pxToRem(16),
    h6: pxToRem(14),
    p: {
      normal: pxToRem(16),
      medium: pxToRem(14),
      small: pxToRem(12)
    },
    a: pxToRem(14),
    label: pxToRem(14),
    input: pxToRem(14)
  },
  LineHeights: {
    h1: pxToRem(40),
    h2: pxToRem(32),
    h3: pxToRem(28),
    h4: pxToRem(26),
    h5: pxToRem(24),
    h6: pxToRem(22),
    p: {
      normal: pxToRem(22),
      medium: pxToRem(20),
      small: pxToRem(18)
    },
    a: pxToRem(14),
    label: pxToRem(22)
  }
};
