import React, { FC } from 'react';

import { StyledContainer } from './toast-provider.styled';

const ToastProvider: FC = ({ children }) => {
  return (
    <>
      <StyledContainer
        position='bottom-right'
        autoClose={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </>
  );
};

export default ToastProvider;
