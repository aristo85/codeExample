import React, {ChangeEvent, FC, ReactNode} from 'react';
import {CheckboxContainer, CheckboxLabel, CheckboxStyled} from './styles';
import {StylizationProps} from '../../types';

type Props = {
  value: boolean;
  setValue: (value: boolean) => void;
  label?: string | ReactNode;
} & StylizationProps;

const Checkbox: FC<Props> = ({label, value, setValue, ...props}) => {
  return (
    <CheckboxContainer {...props}>
      <CheckboxStyled
        checked={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.checked)
        }
        defaultValue="checked"
      />
      {label && typeof label === 'string' ? (
        <CheckboxLabel className="checkboxLabel">{label}</CheckboxLabel>
      ) : (
        label
      )}
    </CheckboxContainer>
  );
};

export default Checkbox;
