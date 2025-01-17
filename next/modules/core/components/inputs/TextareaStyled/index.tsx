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
  Label,
  Root,
  TextAreaField,
  TextAreaWrapper,
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
} & StylizationProps &
  InputHTMLAttributes<HTMLTextAreaElement>;

const TextAreaStyled = forwardRef<HTMLTextAreaElement, Props>(
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
      <Root className={className} style={style}>
        {!!label && <Label>{label}</Label>}
        <TextAreaWrapper
          className="textarea"
          isError={!!error}
          isFocused={isFocused}
          isFilled={isFilled}>
          {startAdornment && (
            <Adornment position="left">{startAdornment}</Adornment>
          )}
          <TextAreaField
            placeholder={placeholder}
            name={name}
            disabled={disabled}
            ref={ref}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...props}
          />
          {endAdornment && (
            <Adornment position="right">{endAdornment}</Adornment>
          )}
        </TextAreaWrapper>
        {!!error && <ErrorMessage>{error}</ErrorMessage>}
      </Root>
    );
  },
);

TextAreaStyled.displayName = 'TextareaStyled';

export default TextAreaStyled;
