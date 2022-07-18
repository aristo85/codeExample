import { FC } from 'react';
import classNames from 'classnames';

import type { SpinnerProps } from './spinner.interface';

import styles from './spinner.module.scss';

export const Spinner: FC<SpinnerProps> = ({
  isLoading,
  // isAbsolute = false,
  children,
  size = '12',
  className,
  isAbsolute,
  style,
}) => {
  if (isLoading) {
    return (
      <div
        className={classNames({
          [styles.absolutePosition]: isAbsolute,
        })}
      >
        <div
          className={`${styles.loader} loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-${size} w-${size} ${className}`}
          style={style}
        />
      </div>
    );
  }

  return <>{children}</>;
};

export default Spinner;
