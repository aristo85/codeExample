import React, {ReactNode} from 'react';
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {MobileTimePicker} from '@mui/x-date-pickers/MobileTimePicker';
import dayjs, {Dayjs} from 'dayjs';
import {ruRU} from '@mui/x-date-pickers/locales';

type TimePickerProps = {
  isOpen: boolean;
  onClose: () => void;
  onChange: (arg: string) => void;
  disabled?: boolean;
  value?: Dayjs;
  children?: ReactNode;
};

const TimeInput = ({
  value,
  onChange,
  disabled,
  children,
  isOpen,
  onClose,
}: TimePickerProps) => {
  return (
    <div>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={
          ruRU.components.MuiLocalizationProvider.defaultProps.localeText
        }>
        <MobileTimePicker
          ampm={false}
          minutesStep={5}
          disabled={disabled}
          value={value}
          open={isOpen}
          onClose={onClose}
          onAccept={acceptedVal => {
            if (acceptedVal) onChange(dayjs(acceptedVal)?.format('HH:mm'));
          }}
          slots={{
            textField: props => (
              <TextField {...props} style={{display: 'none'}} />
            ),
          }}
        />
        {children}
      </LocalizationProvider>
    </div>
  );
};

export default TimeInput;
