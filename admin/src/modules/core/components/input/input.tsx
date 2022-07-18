import { forwardRef } from 'react';

import type { InputProps } from './input.interface';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className={`${className}`}>
        <label className='block text-sm font-medium text-gray-700'>
          {label}
        </label>
        <div className='mt-1 flex rounded-md shadow-sm'>
          <input
            type='text'
            className={`focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300 disabled:border-red-600`}
            {...props}
            ref={ref}
          />
        </div>
      </div>
    );
  }
);

export default Input;
