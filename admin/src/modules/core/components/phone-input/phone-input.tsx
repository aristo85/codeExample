import { forwardRef } from 'react';
// components
import PhoneInput from 'react-phone-number-input';
import Input from 'modules/core/components/input';
// hooks

import { PhoneInputProps } from './phone-input.interface';

import 'react-phone-number-input/style.css';

const PhoneInputNumber = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, onChange, label, isDisabled }, ref) => {
    return (
      <>
        <label className='block text-sm font-medium text-gray-700 -mb-4'>
          {label}
          ref={ref}
        </label>
        <PhoneInput
          disabled={isDisabled}
          international={false}
          withCountryCallingCode
          inputComponent={Input}
          countryCallingCodeEditable={false}
          placeholder={'...'}
          value={value}
          onChange={onChange}
          initialValueFormat='national'
        />
      </>
    );
  }
);

export default PhoneInputNumber;
