const breakpoints = {
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
};

const theme = {
  gutter: '0.5rem',
  breakpoints,
  borderRadius: '.25rem',
  fontWeights: { normal: 400, bold: 700 },
  textVariants: {
    large: {
      fontSize: '1.25rem',
      lineHeight: 1.5
    },
    normal: {
      fontSize: '.875rem',
      lineHeight: 1.25
    },
    small: {
      fontSize: '.75rem',
      lineHeight: 1.1
    }
  }
};

export default theme;
