import React from 'react';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, scrollbarStyles} from '../styles/globalStyles';
import {breakpoints, up, down, between} from './../styles/mediaQueries';

export const theme = {
  colors: {
    foregroundRgb: '0, 0, 0',
    primary: '#1D7ABD',
    secondary: '#8DAEC1',
    default: '#222121',
    lightDefault: 'rgba(34, 33, 33, 0.16)',
    white: '#FFFFFF',
    black: '#000000',
    lightBlue: '#C6E1F3',
  },
  font: {
    weight: {
      regular: '400',
      semiBold: '500',
      bold: '600',
    },
    size: {
      heading1: '36px',
      heading2: '34px',
      heading3: '32px',
      subtitle1: '24px',
      subtitle2: '20px',
      subtitle3: '22px',
      subtitle4: '18px',
      subtitle5: '16px',
      body1: '18px',
      body2: '16px',
      body3: '14px',
      auxiliary1: '12px',
      auxiliary2: '10px',
      auxiliary3: '8px',
    },
    family: {
      gothicMedium: 'var(--font-franklin), sans-serif',
      gothicDemi: 'var(--font-franklin-demi), sans-serif',
      gothicBook: 'var(--font-franklin-book), sans-serif',
      interRegular: 'var(--inter-regular), sans-serif',
      interBold: 'var(--inter-bold), sans-serif',
    },
  },
  transition: {
    fast: 'all 0.25s ease-in-out',
    middle: 'all 0.5s ease-in-out',
    slow: 'all 0.8s ease-in-out',
  },
  elevation: {
    0: 'box-shadow: none;',
    1: 'box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);',
    2: 'box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);',
    3: 'box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);',
  },
  media: {
    breakpoints,
    up,
    down,
    between,
  },
  scrollbar: {
    thinSecondary: () => scrollbarStyles,
  },
  layouts: {
    paddingLg: '10.6%',
    paddingMd: '10px',
    paddingSm: '10px',
  },
};

const GlobalThemeProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
