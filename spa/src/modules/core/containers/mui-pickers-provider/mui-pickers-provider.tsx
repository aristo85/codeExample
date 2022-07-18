import React, { FC } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FCCE23',
      contrastText: 'rgb(255,255,255)',
    },
  },
});

const MuiPickersProvider: FC = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {children}
    </MuiPickersUtilsProvider>
  </MuiThemeProvider>
);

export default MuiPickersProvider;
