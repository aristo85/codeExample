import { ChangeEvent, forwardRef, useCallback, useState } from 'react';
// components
import Input from 'modules/core/components/input';
// utils
import { isNumberString } from 'utils/string.utils';

import type { InputNumberProps } from './input-number.interface';

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  ({ value, onChange, ...props }, ref) => {
    const [localValue, setLocalValue] = useState(value ?? '0');

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        // remove leading zero
        if (
          e.target.value.length &&
          e.target.value[0] === '0' &&
          (+e.target.value >= 1 || e.target.value === '00')
        ) {
          // eslint-disable-next-line no-param-reassign
          e.target.value = e.target.value.slice(1, e.target.value.length);
        }

        // allow only numbers
        if (!isNumberString(e.target.value)) {
          return;
        }

        // set by default zero
        if (e.target.value === '') {
          // eslint-disable-next-line no-param-reassign
          e.target.value = '0';
        }

        onChange && onChange(e);
        setLocalValue(e.target.value);
      },
      [onChange]
    );

    return (
      <Input
        value={value ?? localValue}
        onChange={handleChange}
        ref={ref}
        {...props}
      />
    );
  }
);

export default InputNumber;
