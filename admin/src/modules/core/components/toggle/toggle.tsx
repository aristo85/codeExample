import React, { FC } from 'react';
import classNames from 'classnames';
import { Switch } from '@headlessui/react';

import type { ToggleProps } from './toggle.interface';

const Toggle: FC<ToggleProps> = ({
  label,
  enabled,
  onChange,
  className,
  style,
}) => {
  return (
    <Switch.Group
      as='div'
      className={`flex flex-col space-y-1 ${className}`}
      style={style}
    >
      {!!label && (
        <Switch.Label className='text-sm font-medium text-gray-700'>
          {label}
        </Switch.Label>
      )}
      <Switch
        as='button'
        checked={enabled}
        onChange={onChange}
        className={classNames(
          'relative inline-flex flex-shrink-0 h-8 w-16 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:shadow-outline bg-gray-200',
          { 'bg-blue-500': enabled }
        )}
      >
        {({ checked }) => (
          <span
            className={classNames(
              'inline-block w-7 h-7 transition duration-200 ease-in-out transform bg-white rounded-full translate-x-0',
              { 'translate-x-8': checked }
            )}
          />
        )}
      </Switch>
    </Switch.Group>
  );
};

export default Toggle;
