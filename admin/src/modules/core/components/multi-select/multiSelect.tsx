import React, { FC } from 'react';
import Select from 'react-select';
import { MultiSelectProps } from './multiSelect.interface';

const MultiSelect: FC<MultiSelectProps> = ({
  options,
  label,
  placeholder,
  value,
  onChange,
  //   className,
  style,
}) => {
  const newOptions: any = options.map((obj) => ({
    value: obj.value,
    label: obj.text,
  }));

  const activeValue = value.map((el) => ({ value: el.value, label: el.text }));

  return (
    <div>
      <div className='-mt-1'>{label}</div>
      <Select
        defaultValue={[]}
        value={activeValue}
        isMulti
        name='colors'
        options={newOptions}
        onChange={onChange}
        styles={{ control: (styles) => ({ ...styles, marginTop: '3px' }) }}
        placeholder={placeholder ?? '...'}
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

export default MultiSelect;
