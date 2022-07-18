import type { FC, SVGProps } from 'react';

export type IconName = 'kwalletLogo' | 'closeBtn';

export type IconProps = {
  name: IconName;
} & SVGProps<SVGSVGElement>;

export type IconsMap = Record<IconName, FC<SVGProps<SVGSVGElement>>>;
