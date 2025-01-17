import {FC} from 'react';
import * as React from 'react';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {Label, Root, txtFieldStyles} from './styles';
import {Dayjs} from 'dayjs';
import {InputAdornment, TextField} from '@mui/material';
import {StylizationProps} from '../../types';
import Calendar from '../icons/Calendar';
import {MobileDatePicker} from '@mui/x-date-pickers';
import {ruRU} from '@mui/x-date-pickers/locales';

export type DateInputProps = {
  value: Dayjs | null;
  setValue?: (value: Dayjs | null) => void;
  label: string;
  placeholder?: string;
  maxDate?: Dayjs | null;
  minDate?: Dayjs | null;
  disablePast?: boolean;
  format?: string;
  onAccept?: (data: Dayjs | null) => void;
  error?: string;
} & StylizationProps;

const DateInput: FC<DateInputProps> = ({
  label,
  value = null,
  setValue,
  placeholder,
  className,
  maxDate,
  minDate,
  disablePast = true,
  format = 'DD.MM.YYYY',
  onAccept,
  style,
  error,
}) => {
  return (
    <Root active={!!value} style={style} error={!!error}>
      {label && <Label>{label}</Label>}
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={
          ruRU.components.MuiLocalizationProvider.defaultProps.localeText
        }>
        <MobileDatePicker
          onAccept={onAccept}
          className={`${className} `}
          value={value}
          onChange={setValue}
          disablePast={disablePast}
          format={format}
          maxDate={maxDate || undefined}
          minDate={minDate || undefined}
          slotProps={{
            toolbar: {
              toolbarFormat: 'dd, MMMM DD',
            },
          }}
          slots={{
            textField: props => (
              <TextField
                {...props}
                placeholder={placeholder}
                sx={txtFieldStyles}
                InputProps={{
                  ...props.InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Calendar />
                    </InputAdornment>
                  ),
                }}
              />
            ),
          }}
        />
      </LocalizationProvider>
    </Root>
  );
};

export default DateInput;
