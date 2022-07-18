import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// containers
import RoutesProvider from 'modules/core/containers/routes-provider';
import AuthProvider from 'modules/auth/containers/auth-provider';
import StoreProvider from 'modules/core/containers/store-provider';
import ToastProvider from 'modules/core/containers/toast-provider';
// styles
import './index.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <AuthProvider>
          <ToastProvider>
            <RoutesProvider />
          </ToastProvider>
        </AuthProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
