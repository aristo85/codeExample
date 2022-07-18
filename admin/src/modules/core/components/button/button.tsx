import { FC } from 'react';

import type { ButtonProps } from './button.interface';
import classNames from 'classnames';

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'default',
  ...props
}) => (
  <button
    className={classNames(
      'inline-flex justify-center items-center rounded-md py-2 px-4 shadow-sm',
      {
        'border border-gray-300 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm':
          variant === 'default',
      },
      {
        'border border-transparent bg-blue-500 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm':
          variant === 'primary',
      },
      {
        'border border-transparent bg-red-600 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm':
          variant === 'destructive',
      },
      {
        'bg-gray-500 text-white text-center py-2 px-4 rounded':
          variant === 'disabled',
      },
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
