import React from 'react';
import ModalAuth from './components/ModalAuth';
import {AuthType} from './types';
import {useAppDispatch, useAppSelector} from '../core/hooks';
import {setAuthModal} from './authSlice';
import Login from './components/Login';
import Registration from './components/Registration';
import ForgottenPass from './components/ForgottenPass';
import ResetPass from './components/ResetPass';
import ConfirmEmailSuccess from './components/Registration/ConfirmEmailSuccess';
import RegistrationForm from './components/RegistrationForm';

const AuthContainer = ({}) => {
  const dispatch = useAppDispatch();
  const authModal = useAppSelector(state => state.auth.authModal);

  const handleModalClose = () => {
    dispatch(setAuthModal(null));
  };

  const ModalContent = () => {
    switch (authModal) {
      case AuthType.LOGIN:
        return <Login />;
      case AuthType.REG:
        return <Registration />;
      case AuthType.RECOVER:
        return <ForgottenPass />;
      case AuthType.REG_PARTNER:
      case AuthType.REG_TUR:
        return <RegistrationForm authModalType={authModal} />;
      case AuthType.RESET:
        return <ResetPass />;
      case AuthType.EMAIL_CONFIRM_SUCCESS:
        return <ConfirmEmailSuccess />;
    }
  };

  return (
    <ModalAuth onClose={handleModalClose} isOpen={!!authModal}>
      {ModalContent()}
    </ModalAuth>
  );
};

export default AuthContainer;
