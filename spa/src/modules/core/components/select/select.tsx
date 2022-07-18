import { forwardRef, useCallback, useRef, useState, useMemo } from 'react';
// components
import Icon from 'modules/core/components/icon';
// hooks
import { useOutsideClick } from 'modules/core/hooks/use-outside-click';
import { useCombinedRefs } from 'modules/core/hooks/use-combined-refs';
import { useLocalization } from 'modules/localization/hooks/use-localization';

import type {
  SelectOption,
  SelectOptionValue,
  SelectProps,
} from './select.interface';
import {
  Root,
  SelectValue,
  SelectValueInfo,
  StartAdornment,
  DownArrowWrapper,
  OptionsWrapper,
  Option,
  Title,
  Subtitle,
  Label,
  ErrorMessage,
} from './select.styled';

const Select = forwardRef<HTMLDivElement, SelectProps>(
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
    },
    ref
  ) => {
    const { t } = useLocalization();

    const emptyOption: SelectOption = {
      value: null,
      title: t('COMPONENT.SELECT.NO_CHOICE'),
    };

    // state
    const [isOpen, setIsOpen] = useState(false);
    // memo
    const activeOptionData = useMemo(
      () => options.find((option) => option.value === value) ?? emptyOption,
      [value, options]
    );
    // refs
    const innerRef = useRef<HTMLDivElement>(null);
    const rootRef = useCombinedRefs(ref, innerRef);

    const handleOptionClick = useCallback(
      (optionValue: SelectOptionValue) => () => {
        if (onChange) {
          onChange(optionValue);
        }

        setIsOpen(false);
      },
      [onChange, setIsOpen]
    );

    useOutsideClick({
      ref: rootRef,
      handler: () => setIsOpen(false),
    });

    return (
      <Root
        className={className}
        style={style}
        ref={rootRef}
        isDisabled={disabled}
      >
        {label && <Label>{label}</Label>}
        <SelectValue onClick={() => setIsOpen(true)} isError={!!error}>
          {!!activeOptionData.startAdornment && (
            <StartAdornment>{activeOptionData.startAdornment}</StartAdornment>
          )}
          <SelectValueInfo>
            <Title>{activeOptionData.title}</Title>
            {!!activeOptionData.subtitle && (
              <Subtitle>{activeOptionData.subtitle}</Subtitle>
            )}
          </SelectValueInfo>
          {!disabled && (
            <DownArrowWrapper isOpen={isOpen}>
              <Icon name='arrowDown' />
            </DownArrowWrapper>
          )}
        </SelectValue>
        <OptionsWrapper isOpen={isOpen}>
          {[emptyOption, ...options].map((option) => (
            <Option
              onClick={handleOptionClick(option.value)}
              key={option.value}
            >
              {!!option.startAdornment && (
                <StartAdornment>{option.startAdornment}</StartAdornment>
              )}
              <SelectValueInfo>
                <Title>{option.title}</Title>
                {!!option.subtitle && <Subtitle>{option.subtitle}</Subtitle>}
              </SelectValueInfo>
            </Option>
          ))}
        </OptionsWrapper>
        {typeof error === 'string' && <ErrorMessage>{error}</ErrorMessage>}
      </Root>
    );
  }
);

export default Select;
