import { FC } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';

import type { DateInputProps } from './date-input.interface';
import { Root } from './date-input.styled';

const DateInput: FC<DateInputProps> = (props) => {
  return (
    <Root>
      <KeyboardDatePicker
        variant='inline'
        InputLabelProps={{
          shrink: true,
        }}
        {...props}
      />
    </Root>
  );
};

export default DateInput;
