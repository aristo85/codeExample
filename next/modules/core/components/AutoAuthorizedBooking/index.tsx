import React from 'react';
import {Container, SubTitle, Title} from './styles';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectProfileData, setAuthModal} from '@/modules/auth/authSlice';
import {AuthType} from '@/modules/auth/types';
import {useRouter} from 'next/router';

const AutoAuthorizedBooking = () => {
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector(selectProfileData);
  const router = useRouter();

  const url = `/profile${router.pathname.split('[id]')[0]}${
    router.query.bookingId
  }`;

  const handleLogin = (authType: AuthType) => {
    dispatch(setAuthModal(authType));
  };

  return (
    <Container>
      <Title>Бронирование создано</Title>
      <SubTitle>
        вы можете посмотреть свое бронирование по{' '}
        {userProfile ? (
          <a href={url}>ссылке</a>
        ) : (
          <p onClick={() => handleLogin(AuthType.LOGIN)}>ссылке</p>
        )}
      </SubTitle>
    </Container>
  );
};

export default AutoAuthorizedBooking;
