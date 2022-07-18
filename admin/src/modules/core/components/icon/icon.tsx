import { FC, memo } from 'react';
// icons
import { ReactComponent as KwalletLogo } from 'assets/icons/logo.svg';
import { ReactComponent as CloseBtn } from 'assets/icons/close-btn.svg';

import type { IconProps, IconsMap } from './icon.interface';

export const icons: IconsMap = {
  kwalletLogo: KwalletLogo,
  closeBtn: CloseBtn,
};

const Icon: FC<IconProps> = ({ name, ...props }) => {
  const SVGIcon = icons[name];

  if (!SVGIcon) {
    console.warn(`Icon "${name}" does not exist`);

    return null;
  }

  return <SVGIcon {...props} />;
};

export default memo(Icon);
