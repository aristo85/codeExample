import React, {
  forwardRef,
  ReactNode,
  InputHTMLAttributes,
  useCallback,
  useState,
} from 'react';
import {
  Adornment,
  ErrorMessage,
  InputField,
  InputFieldWrapper,
  Label,
  Root,
} from './styles';
import {StylizationProps} from '../../../types';
import {useBoolean} from '../../../hooks/useBoolean';

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  disabled?: boolean;
  error?: string;
  isPassword?: boolean;
  completeDisable?: boolean;
} & StylizationProps &
  InputHTMLAttributes<HTMLInputElement>;

const InputStyled = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      label,
      placeholder,
      startAdornment,
      endAdornment,
      className,
      style,
      disabled = false,
      error,
      onFocus,
      onBlur,
      isPassword,
      completeDisable,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useBoolean();
    const [isPassVis, setIsPassVis] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputFocus = useCallback(
      (e: any) => {
        onFocus && onFocus(e);
        setIsFocused.on();
      },
      [onFocus, setIsFocused.on],
    );
    const handleInputBlur = useCallback(
      (e: any) => {
        onBlur && onBlur(e);
        setIsFocused.off();
        setIsFilled(true);
      },
      [onBlur, setIsFocused.off],
    );

    const handlePassWordVisibility = () => {
      setIsPassVis(val => !val);
    };

    return (
      <Root isDisabled={!!completeDisable} className={className} style={style}>
        {!!label && <Label>{label}</Label>}
        <InputFieldWrapper
          className="inputwrapper"
          isError={!!error}
          isFocused={isFocused}
          isFilled={isFilled}>
          {startAdornment && (
            <Adornment
              isPassword={isPassword}
              position="left"
              onClick={() => isPassword && handlePassWordVisibility()}>
              {startAdornment}
            </Adornment>
          )}
          <InputField
            placeholder={placeholder}
            name={name}
            disabled={disabled || completeDisable}
            ref={ref}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...props}
            type={isPassword ? (isPassVis ? 'text' : 'password') : props.type}
          />
          {endAdornment && (
            <Adornment position="right">{endAdornment}</Adornment>
          )}
        </InputFieldWrapper>
        {!!error && <ErrorMessage>{error}</ErrorMessage>}
      </Root>
    );
  },
);

InputStyled.displayName = 'InputStyled';

export default InputStyled;
