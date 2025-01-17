import {css, DefaultTheme, ThemedCssFunction} from 'styled-components';

export const breakpoints = {
  xxs: 375,
  xs: 480,
  sm: 680,
  smTab: 769,
  md: 960,
  screen1000: 1000,
  screen1200: 1200,
  screen1270: 1270,
  lg: 1439,
  xl: 1920,
};

export const up = (breakpoint: keyof typeof breakpoints) => {
  return ((...args: Parameters<typeof css>) => css`
    @media (min-width: ${breakpoints[breakpoint]}px) {
      ${css(...args)}
    }
  `) as ThemedCssFunction<DefaultTheme>;
};

export const down = (breakpoint: keyof typeof breakpoints) => {
  return ((...args: Parameters<typeof css>) => css`
    @media (max-width: ${breakpoints[breakpoint]}px) {
      ${css(...args)}
    }
  `) as ThemedCssFunction<DefaultTheme>;
};

export const between = (
  fromBreakpoint: keyof typeof breakpoints,
  toBreakpoint: keyof typeof breakpoints,
) => {
  return ((...args: Parameters<typeof css>) => css`
    @media (min-width: ${breakpoints[fromBreakpoint] +
      1}px) and (max-width: ${breakpoints[toBreakpoint]}px) {
      ${css(...args)}
    }
  `) as ThemedCssFunction<DefaultTheme>;
};
