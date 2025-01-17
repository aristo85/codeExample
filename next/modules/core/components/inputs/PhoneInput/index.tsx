import {
  ClipboardEvent,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  getCountries,
  getCountryCallingCode,
  Country,
  parsePhoneNumber,
} from 'react-phone-number-input';
import {
  CountrySelect,
  InputWrapper,
  Label,
  PhoneInputContainer,
  PhoneWithoutCodeContainer,
} from './styles';
import FlagComp from './FlagComp';
import 'react-phone-number-input/style.css';
import en from 'react-phone-number-input/locale/en.json';
import {useAppDispatch} from '@/modules/core/hooks';
import {selectCountryCode, setCountryCode} from '@/modules/auth/authSlice';
import {useSelector} from 'react-redux';
import InputStyled from '../InputStyled';
import {PatternFormat} from 'react-number-format';
import {formatPhoneNumber} from '@/modules/core/services';

export type PhoneInputProps = {
  label?: string;
  placeholder?: string;
  error?: string;
  onChange?: (value: string) => void;
  from?: string;
  phoneNumber?: string | null;
};
type SelectOptionValue = string | null;

const PhoneInputNumber = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({onChange, phoneNumber, label, placeholder, error, from}, ref) => {
    const dispatch = useAppDispatch();
    const [currentPhoneWithoutCode, setCurrentPhoneWithoutCode] = useState('');
    const countryCode = useSelector(selectCountryCode);
    const contDig = countryCode.codeNum;
    const inputRef = useRef<HTMLDivElement | null>(null);
    const currentPhoneWithoutCodeRef = useRef(currentPhoneWithoutCode);
    const options = useMemo(
      () =>
        getCountries()
          .map(cont => ({
            value: cont,
            title: `+${getCountryCallingCode(cont)}`,
            titleOption: en[cont],
            startAdornment: <FlagComp country={cont} />,
            selectedStartAdornment: true,
          }))
          .sort((a, b) => a.titleOption.localeCompare(b.titleOption)),
      [],
    );

    const handleSetCountryCode = (value: SelectOptionValue) => {
      const inNumber = getCountryCallingCode((value as Country) ?? 'RU');
      dispatch(setCountryCode({codeStr: value, codeNum: inNumber}));
      onChange && onChange(inNumber);
      setCurrentPhoneWithoutCode('');
    };

    const handleNationalPhoneChange = (data: string) => {
      setCurrentPhoneWithoutCode(data);
      onChange && onChange(contDig + data);
    };

    const handleInitialInputValue = (
      initValue: string,
      currentValue?: string,
    ) => {
      const parsedInitialNumber = parsePhoneNumber(`+${initValue}`);
      if (parsedInitialNumber && !currentValue) {
        const {country, countryCallingCode, nationalNumber} =
          parsedInitialNumber;
        dispatch(
          setCountryCode({
            codeStr: country ? country : countryCode.codeStr,
            codeNum: countryCallingCode,
          }),
        );
        setCurrentPhoneWithoutCode(nationalNumber);
        onChange && onChange(countryCallingCode + nationalNumber);
      }
    };

    const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
      const pastedValue = event.clipboardData.getData('Text');
      const cleanValue = pastedValue.replace(/\D/g, '');
      if (cleanValue.length > 10) {
        handleInitialInputValue(cleanValue);
      }
    };

    const handleRawInputEvent = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const rawValue = target.value;
      const cleanValue = rawValue.replace(/\D/g, '');

      if (cleanValue.length > 10 && !currentPhoneWithoutCodeRef.current) {
        handleInitialInputValue(cleanValue, currentPhoneWithoutCodeRef.current);
      }
    };

    useEffect(() => {
      phoneNumber &&
        handleInitialInputValue(
          phoneNumber,
          currentPhoneWithoutCodeRef.current,
        );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [phoneNumber]);

    useEffect(() => {
      if (!inputRef.current) return;

      const inputElement = inputRef.current.querySelector('input');
      if (!inputElement) return;

      inputElement.addEventListener('input', handleRawInputEvent);

      return () => {
        inputElement.removeEventListener('input', handleRawInputEvent);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      currentPhoneWithoutCodeRef.current = currentPhoneWithoutCode;
    }, [currentPhoneWithoutCode]);

    return (
      <PhoneInputContainer>
        {label && <Label>{label}</Label>}
        <InputWrapper>
          <CountrySelect
            options={options}
            value={countryCode.codeStr}
            onChange={handleSetCountryCode}
            notEmpty
            from={from}
          />
          <PhoneWithoutCodeContainer ref={inputRef}>
            <PatternFormat
              name="phone"
              customInput={InputStyled}
              onValueChange={(value, source) =>
                source.event && handleNationalPhoneChange(value.value)
              }
              format={formatPhoneNumber(countryCode.codeNum)}
              value={currentPhoneWithoutCode}
              placeholder={placeholder}
              error={error}
              onPaste={handlePaste}
            />
          </PhoneWithoutCodeContainer>
        </InputWrapper>
      </PhoneInputContainer>
    );
  },
);

PhoneInputNumber.displayName = 'PhoneInputNumber';

export default PhoneInputNumber;
