import React, {useEffect} from 'react';
import {ConfirmEamilSuccessBtn, ModalTitle, SucceedTxt} from '../styles';
import {AuthType} from '../../types';
import {useAppDispatch} from '@/modules/core/hooks';
import {setAuthModal} from '../../authSlice';
import {useRouter} from 'next/router';

const ConfirmEmailSuccess = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {regtoken} = router.query;

  const handleFormSwitch = () => {
    dispatch(setAuthModal(AuthType.LOGIN));
  };

  useEffect(() => {
    return () => {
      if (regtoken) {
        // Remove the token from the route
        const routeWithoutToken = router.asPath.replace(
          `?regtoken=${regtoken}`,
          '',
        );
        router.replace(routeWithoutToken);
      }
    };
  }, []);

  return (
    <>
      <ModalTitle>Подтверждение аккаунта</ModalTitle>
      <SucceedTxt>Ваш аккаунт успешно подтвержден</SucceedTxt>
      <ConfirmEamilSuccessBtn onClick={handleFormSwitch}>
        Войти в аккаунт
      </ConfirmEamilSuccessBtn>
    </>
  );
};

export default ConfirmEmailSuccess;
