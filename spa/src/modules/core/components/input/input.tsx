import { forwardRef, memo, useCallback } from 'react';
// hooks
import { useBoolean } from 'modules/core/hooks/use-boolean';

import type { InputProps } from './input.interface';
import {
  Root,
  InputFieldWrapper,
  InputField,
  Label,
  Adornment,
  ErrorMessage,
} from './input.styled';

const Input = forwardRef<HTMLInputElement, InputProps>(
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
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useBoolean();

    const handleInputFocus = useCallback(
      (e: any) => {
        onFocus && onFocus(e);
        setIsFocused.on();
      },
      [onFocus, setIsFocused.on]
    );
    const handleInputBlur = useCallback(
      (e: any) => {
        onBlur && onBlur(e);
        setIsFocused.off();
      },
      [onBlur, setIsFocused.off]
    );

    return (
      <Root className={className} style={style}>
        {!!label && <Label>{label}</Label>}
        <InputFieldWrapper isError={!!error} isFocused={isFocused}>
          {startAdornment && (
            <Adornment position='left'>{startAdornment}</Adornment>
          )}
          <InputField
            placeholder={placeholder}
            name={name}
            disabled={disabled}
            ref={ref}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...props}
          />
          {endAdornment && (
            <Adornment position='right'>{endAdornment}</Adornment>
          )}
        </InputFieldWrapper>
        {!!error && <ErrorMessage>{error}</ErrorMessage>}
      </Root>
    );
  }
);

export default memo(Input);
