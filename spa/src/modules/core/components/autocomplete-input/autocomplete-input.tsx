import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
// components
import Input from 'modules/core/components/input';
// hooks
import { useOutsideClick } from 'modules/core/hooks/use-outside-click';

import type {
  AutocompleteInputProps,
  AutocompleteOption,
} from './autocomplete-input.interface';
import { Root, Options, Option } from './autocomplete-input.styled';

const getActiveOption = (key: string | null, options: AutocompleteOption[]) => {
  return options.find((option) => option.key === key) ?? null;
};

const AutocompleteInput: FC<AutocompleteInputProps> = ({
  value,
  onChange,
  options,
  ...props
}) => {
  // state
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  // refs
  const rootRef = useRef<HTMLDivElement>(null);
  // memo
  const matchedOptions = useMemo(
    () =>
      options.filter((option) =>
        option.name.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [inputValue, options]
  );

  useEffect(() => {
    const activeOption = getActiveOption(value, options);

    setInputValue(activeOption?.name ?? '');
  }, [value, options]);

  useOutsideClick({
    ref: rootRef,
    handler: () => setIsOpen(false),
  });

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    if (matchedOptions.length === 1) {
      onChange(matchedOptions[0].key);
      setInputValue(matchedOptions[0].name);
    } else if (value === null) {
      setInputValue('');
    }
  }, [onChange, matchedOptions]);

  const handleOptionClick = useCallback(
    (key: string) => () => {
      if (key !== value) {
        onChange(key);
      } else {
        const activeOption = getActiveOption(value, options);

        setInputValue(activeOption?.name ?? '');
      }

      setIsOpen(false);
    },
    [onChange, value]
  );

  return (
    <Root ref={rootRef}>
      <Input
        {...props}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        autoComplete='off'
        autoCorrect='off'
        autoCapitalize='off'
        type='text'
      />
      <Options isOpen={isOpen}>
        {matchedOptions.map((option) => (
          <Option key={option.key} onClick={handleOptionClick(option.key)}>
            {option.name}
          </Option>
        ))}
      </Options>
    </Root>
  );
};

export default AutocompleteInput;
