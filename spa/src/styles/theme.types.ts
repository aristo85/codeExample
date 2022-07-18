import { breakpoints, down, up } from './media-queries';

export type Color =
  | 'primary'
  | 'white'
  | 'black'
  | 'gray'
  | 'lightGray'
  | 'green'
  | 'red';
export type BtnColor =
  | 'textColor'
  | 'menuNotificationColor'
  | 'hoverBackground';
export type SidebarColor = 'iconColor' | 'menuIconColor' | 'redIconColor';
export type BalanceColor = 'hoverIcon' | 'hoverWhiteIcon';
export type Transition = 'fast' | 'middle' | 'slow';
export type BorderRadius = 'small' | 'medium' | 'large' | 'circle' | 'rect';
export type FontFamily = 'main' | 'auxiliary' | 'sidebar';
export type FontWeight = 'regular' | 'semiBold' | 'bold';
export type FontSize =
  | 'heading1'
  | 'heading2'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'auxiliary1'
  | 'auxiliary2'
  | 'auxiliary3';
/* eslint-disable */
export type Elevation = 0 | 1 | 2 | 3;
export type TableColor = 'head' | 'divider' | 'rowBgHover';

export type Theme = {
  palette: {
    common: Record<Color, string>;
    btn: Record<BtnColor, string>;
    sidebar: Record<SidebarColor, string>;
    balance: Record<BalanceColor, string>;
    table: Record<TableColor, string>;
  };
  transition: Record<Transition, string>;
  shape: {
    borderRadius: Record<BorderRadius, string>;
  };
  elevation: Record<Elevation, string>;
  font: {
    family: Record<FontFamily, string>;
    weight: Record<FontWeight, string>;
    size: Record<FontSize, string>;
  };
  media: {
    breakpoints: Record<keyof typeof breakpoints, number>;
    up: typeof up;
    down: typeof down;
  };
};
