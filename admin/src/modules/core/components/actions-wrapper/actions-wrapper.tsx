import { FC } from 'react';

import type { ActionsWrapperProps } from './actions-wrapper.interface';

const ActionsWrapper: FC<ActionsWrapperProps> = ({
  children,
  className,
  style,
}) => (
  <div
    style={style}
    className={`w-full flex flex-row-reverse align-center justify-start bg-gray-50 gap-4 px-4 py-3 sm:px-6 sm:px-6 ${className}`}
  >
    {children}
  </div>
);

export default ActionsWrapper;
