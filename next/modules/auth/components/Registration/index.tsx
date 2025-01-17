import React, {FC} from 'react';
import {ModalTitle, RegOptionBtn, RegOptionContainer} from '../styles';
import {AuthType} from '../../types';
import {useAppDispatch} from '@/modules/core/hooks';
import {setAuthModal} from '../../authSlice';

const Registration: FC = () => {
  const dispatch = useAppDispatch();
  const handleFormSwitch = (authType: AuthType) => {
    dispatch(setAuthModal(authType));
  };

  return (
    <>
      <ModalTitle>Регистрация</ModalTitle>
      <RegOptionContainer>
        <RegOptionBtn onClick={() => handleFormSwitch(AuthType.REG_TUR)} dark>
          Я турист
        </RegOptionBtn>
        <RegOptionBtn onClick={() => handleFormSwitch(AuthType.REG_PARTNER)}>
          Я партнёр
        </RegOptionBtn>
      </RegOptionContainer>
    </>
  );
};

export default Registration;
