import React, {ReactNode, useState, forwardRef, useRef} from 'react';
import {
  DownArrowWrapper,
  ErrorMessage,
  Label,
  Option,
  OptionsWrapper,
  PlaceHolder,
  Root,
  SelectValue,
  SelectValueInfo,
  StartAdornment,
  Subtitle,
  Title,
} from './styles';
import {StylizationProps} from '@/modules/core/types';
import {useCombinedRefs} from '@/modules/core/hooks/useCombinedRefs';
import {useOutsideClick} from '@/modules/core/hooks/useOutsideClick';
import ArrowSelectUp from '../../icons/ArrowSelectUp';

export type SelectOptionValue = string | null;

export type SelectOption = {
  value: SelectOptionValue;
  title: string;
  titleOption?: string;
  subtitle?: string;
  startAdornment?: ReactNode;
  selectedStartAdornment?: boolean;
};

export type SelectProps = {
  value: SelectOptionValue;
  options: SelectOption[];
  onChange?: (value: SelectOptionValue) => void;
  label?: string;
  error?: string | boolean;
  disabled?: boolean;
  placeholder?: string;
  notEmpty?: boolean;
  emptyOption?: SelectOption;
} & StylizationProps;

const InputSelect = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value,
      onChange,
      label,
      error,
      className,
      style,
      disabled = false,
      placeholder,
      notEmpty,
      emptyOption = {
        value: null,
        title: 'Не выбрано',
      },
    },
    ref,
  ) => {
    // state
    const [isOpen, setIsOpen] = useState(false);
    const activeOptionData =
      options.find(option => option.value === value) ?? emptyOption;
    // refs
    const innerRef = useRef<HTMLDivElement>(null);
    const rootRef = useCombinedRefs(ref, innerRef);

    const handleOptionClick = (optionValue: SelectOptionValue) => () => {
      if (onChange) {
        onChange(optionValue);
      }

      setIsOpen(false);
    };

    useOutsideClick({
      ref: rootRef as any,
      handler: () => setIsOpen(false),
    });

    return (
      <Root
        className={className}
        style={style}
        ref={rootRef as any}
        isDisabled={disabled}>
        {label && <Label>{label}</Label>}
        <SelectValue
          tabIndex={0}
          className="selector"
          onClick={() => setIsOpen(val => !val)}
          isOpen={isOpen}
          isFilled={!!value || !!activeOptionData.value}
          isError={!!error}>
          {!!activeOptionData.startAdornment && (
            <StartAdornment>{activeOptionData.startAdornment}</StartAdornment>
          )}
          <SelectValueInfo>
            {activeOptionData.value ? (
              <Title>{activeOptionData.title}</Title>
            ) : (
              <PlaceHolder>{placeholder}</PlaceHolder>
            )}
            {!!activeOptionData.subtitle && (
              <Subtitle>{activeOptionData.subtitle}</Subtitle>
            )}
          </SelectValueInfo>
          {!disabled && (
            <DownArrowWrapper isOpen={isOpen}>
              <ArrowSelectUp />
            </DownArrowWrapper>
          )}
        </SelectValue>
        <OptionsWrapper isOpen={isOpen} className="optionsMenu">
          {(notEmpty ? [...options] : [emptyOption, ...options]).map(option => {
            return (
              <Option
                onClick={handleOptionClick(option.value)}
                key={option.value}>
                {!!option.startAdornment && !option.selectedStartAdornment && (
                  <StartAdornment>{option.startAdornment}</StartAdornment>
                )}
                <SelectValueInfo>
                  <Title active={value === option.title}>
                    {option.titleOption ?? option.title}
                  </Title>
                  {!!option.subtitle && <Subtitle>{option.subtitle}</Subtitle>}
                </SelectValueInfo>
              </Option>
            );
          })}
        </OptionsWrapper>
        {typeof error === 'string' && <ErrorMessage>{error}</ErrorMessage>}
      </Root>
    );
  },
);

InputSelect.displayName = 'InputSelect';

export default InputSelect;
