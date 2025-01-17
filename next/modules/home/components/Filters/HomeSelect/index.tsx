import React, {useState, forwardRef, useRef} from 'react';
import {
  Option,
  OptionsWrapper,
  PlaceHolder,
  Root,
  SelectValue,
  SelectValueInfo,
  Title,
} from './styles';
import {StylizationProps} from '@/modules/core/types';
import {useCombinedRefs} from '@/modules/core/hooks/useCombinedRefs';
import {useOutsideClick} from '@/modules/core/hooks/useOutsideClick';

export type SelectOptionValue = string | null;

export type SelectOption = {
  value: SelectOptionValue;
  title: string;
  titleOption?: string;
};

export enum SelectCustomOption {
  POPULAR = 'POPULAR',
}

export type SelectProps = {
  value: SelectOptionValue;
  options: SelectOption[];
  onChange?: (value: SelectOptionValue) => void;
  placeholder?: string;
  notEmpty?: boolean;
} & StylizationProps;

const HomeSelect = forwardRef<HTMLDivElement, SelectProps>(
  (
    {options, value, onChange, className, style, placeholder, notEmpty},
    ref,
  ) => {
    const startOption: SelectOption = {
      value: SelectCustomOption.POPULAR,
      title: 'Популярные',
    };

    const [isOpen, setIsOpen] = useState(false);

    const activeOptionData =
      options.find(option => option.value === value) ?? startOption;

    const innerRef = useRef<HTMLDivElement>(null);
    const rootRef = useCombinedRefs(ref, innerRef);

    const handleOptionClick = (optionValue: SelectOptionValue) => () => {
      if (onChange && optionValue) {
        onChange(optionValue);
      }

      setIsOpen(false);
    };

    useOutsideClick({
      ref: rootRef as any,
      handler: () => setIsOpen(false),
    });

    return (
      <Root className={className} style={style} ref={rootRef as any}>
        <SelectValue
          tabIndex={0}
          className="selector"
          onClick={() => setIsOpen(val => !val)}
          isOpen={isOpen}>
          <SelectValueInfo>
            {activeOptionData.value ? (
              <Title>
                {activeOptionData.value === SelectCustomOption.POPULAR
                  ? `${activeOptionData.title} направления`
                  : activeOptionData.title}
              </Title>
            ) : (
              <PlaceHolder>{placeholder}</PlaceHolder>
            )}
          </SelectValueInfo>
        </SelectValue>

        <OptionsWrapper isOpen={isOpen} className="optionsMenu">
          {(notEmpty
            ? [...options]
            : [
                {
                  value: SelectCustomOption.POPULAR,
                  title: 'Популярное',
                },
                ...options,
              ]
          ).map(option => {
            return (
              <Option
                onClick={handleOptionClick(option.value)}
                key={option.value}>
                <SelectValueInfo>
                  <Title active={value === option.title}>
                    {option.titleOption ?? option.title}
                  </Title>
                </SelectValueInfo>
              </Option>
            );
          })}
        </OptionsWrapper>
      </Root>
    );
  },
);

HomeSelect.displayName = 'HomeSelect';

export default HomeSelect;
