import React, { FC } from 'react';
import { AsyncAutocompleteProps } from './async.interface';
import AsyncSelect from 'react-select/async';

const AsyncAutocomplete: FC<AsyncAutocompleteProps> = ({
  placeholder,
  label,
  value,
  onChange,
  style,
  loadOptions,
}) => {
  return (
    <div>
      <div className='-mt-1'>{label}</div>
      <AsyncSelect
        placeholder={placeholder}
        cacheOptions
        value={!value || { value, label: value }}
        // onInputChange={onInputChange}
        loadOptions={loadOptions}
        defaultOptions
        onChange={onChange}
        styles={{ control: (styles) => ({ ...styles, marginTop: '3px' }) }}
        theme={(theme) => ({
          ...theme,
          style,
          // borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#f3f6f4',
            primary: 'green',
          },
        })}
      />
    </div>
  );
};

export default AsyncAutocomplete;
