import type { Theme } from './theme.types';
import { breakpoints, up, down } from './media-queries';

// todo: add elevation & other colors
export const paypeopleTheme: Theme = {
  palette: {
    common: {
      primary: '#ffc400',
      white: '#ffffff',
      black: '#282828',
      gray: '#858585',
      lightGray: '#c1c1c1',
      green: '#06CC76',
      red: '#E05F5F',
    },
    btn: {
      textColor: '#282828',
      menuNotificationColor: '#282828',
      hoverBackground: 'red',
    },
    table: {
      head: '#F6F7F8',
      divider: '#EBEBEB',
      rowBgHover: '#F6F7F8',
    },
    sidebar: {
      iconColor:
        'invert(82%) sepia(56%) saturate(2848%) hue-rotate(359deg) brightness(102%) contrast(101%)',
      menuIconColor:
        'invert(57%) sepia(0%) saturate(0%) hue-rotate(243deg) brightness(92%) contrast(88%)',
      redIconColor:
        'invert(53%) sepia(28%) saturate(1563%) hue-rotate(314deg) brightness(90%) contrast(95%);',
    },
    balance: {
      hoverIcon:
        'invert(17%) sepia(39%) saturate(0%) hue-rotate(194deg) brightness(86%) contrast(100%)',
      hoverWhiteIcon:
        'invert(100%) sepia(0%) saturate(2%) hue-rotate(229deg) brightness(100%) contrast(101%)',
    },
  },
  transition: {
    fast: 'all 0.25s ease-in-out',
    middle: 'all 0.5s ease-in-out',
    slow: 'all 0.8s ease-in-out',
  },
  shape: {
    borderRadius: {
      small: '3px',
      medium: '5px',
      large: '10px',
      rect: 'none',
      circle: '50%',
    },
  },
  font: {
    family: {
      main: '"FuturaPT", sans-serif',
      auxiliary: '"Montserrat", sans-serif',
      sidebar: '"Montserrat", sans-serif',
    },
    weight: {
      regular: '400',
      semiBold: '500',
      bold: '600',
    },
    size: {
      heading1: '36px',
      heading2: '32px',
      subtitle1: '24px',
      subtitle2: '20px',
      body1: '18px',
      body2: '16px',
      body3: '14px',
      auxiliary1: '12px',
      auxiliary2: '10px',
      auxiliary3: '8px',
    },
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
  },
};
