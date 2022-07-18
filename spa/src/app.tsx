import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'focus-visible';
// containers
import AppContent from 'components/app/app';
import StoreProvider from 'modules/core/containers/store-provider';
import ToastProvider from 'modules/core/containers/toast-provider';
import ThemeProvider from 'modules/core/containers/theme-provider';
import LocalizationProvider from 'modules/localization/containers/localization-provider';
import MuiPickersProvider from 'modules/core/containers/mui-pickers-provider';
import NotificationsProvider from 'modules/notification/containers/notifications-provider';

const queryClient = new QueryClient();

const App: FC = () => (
  <StoreProvider>
    <LocalizationProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <ToastProvider>
            <NotificationsProvider>
              <MuiPickersProvider>
                <AppContent />
              </MuiPickersProvider>
            </NotificationsProvider>
          </ToastProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </LocalizationProvider>
  </StoreProvider>
);

export default App;
