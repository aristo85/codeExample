import { forwardRef } from 'react';
// components
import PhoneInput from 'react-phone-number-input';
import Input from 'modules/core/components/input';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';

import { PhoneInputProps } from './phone-input.interface';
import { Label } from '../input/input.styled';

import 'react-phone-number-input/style.css';

const PhoneInputNumber = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, onChange, label }, ref) => {
    const { t } = useLocalization();

    return (
      <>
        <Label>
          {label}
          <PhoneInput
            ref={ref}
            international={false}
            withCountryCallingCode
            inputComponent={Input}
            countryCallingCodeEditable={false}
            placeholder={t('FORMS.PHONE_NUMBER')}
            value={value}
            onChange={onChange}
            initialValueFormat='national'
          />
        </Label>
      </>
    );
  }
);

export default PhoneInputNumber;
