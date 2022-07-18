import { css } from 'styled-components';

export const breakpoints = {
  xs: 374,
  sm: 680,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const up = (breakpoint: keyof typeof breakpoints) => {
  return (...args: Parameters<typeof css>) => css`
    @media (min-width: ${breakpoints[breakpoint]}px) {
      ${css(...args)}
    }
  `;
};

export const down = (breakpoint: keyof typeof breakpoints) => {
  return (...args: Parameters<typeof css>) => css`
    @media (max-width: ${breakpoints[breakpoint]}px) {
      ${css(...args)}
    }
  `;
};
