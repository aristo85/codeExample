import localFont from 'next/font/local';
import React, {useEffect} from 'react';
import MainNavigationBar from '../components/MainNavigationBar';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {
  Roles,
  selectProfileData,
  selectUserToken,
  setLogOut,
  setProfile,
} from '@/modules/auth/authSlice';
import {useGetProfileDataQuery} from '@/modules/core/api/apiSlice';
import {UserStatus} from '@/modules/core/api/model/user/userStatus';
import {useRouter} from 'next/router';

const LayoutContainer = styled.div`
  ${({theme}) => theme.media.down('sm')`
      padding-top: 100px;
  `}
  ${({theme}) => theme.media.down('xs')`
      padding-top: 96px;
  `}
`;

export const franklinGothicMedium = localFont({
  src: [
    {
      path: '../../../public/fonts/franklinGothicMedium.ttf',
    },
  ],
  variable: '--font-franklin',
});

export const franklinGothicDemiRegular = localFont({
  src: [
    {
      path: '../../../public/fonts/FranklinGothicDemiRegular.ttf',
    },
  ],
  variable: '--font-franklin-demi',
});

export const franklinGothicBook = localFont({
  src: [
    {
      path: '../../../public/fonts/franklinGothicBook.ttf',
    },
  ],
  variable: '--font-franklin-book',
});

export const interRegular = localFont({
  src: [
    {
      path: '../../../public/fonts/interRegular.ttf',
    },
  ],
  variable: '--inter-regular',
});

export const interBold = localFont({
  src: [
    {
      path: '../../../public/fonts/interBold.ttf',
    },
  ],
  variable: '--inter-bold',
});

const AppLayout = ({children}: {children: React.ReactNode}) => {
  // Put user's profile data into a store if there's empty
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);
  const account = useSelector(selectProfileData);
  const {data, isLoading} = useGetProfileDataQuery(undefined, {
    skip: !account && !token,
  });

  const router = useRouter();
  useEffect(() => {
    const isProfile = router.pathname === '/profile';
    const isControlPanel = router.pathname.includes('control-panel');
    const isConfirmPage =
      router.pathname.includes('booking') ||
      router.pathname.includes('confirm');
    if (!account && data) {
      const profileData = data.data;

      dispatch(setProfile(profileData));
      if (profileData?.role === Roles.tourist) return;

      if (profileData?.role === Roles.admin) {
        dispatch(setLogOut());
        window.location.href = `https://admin.${window.location.hostname}`;
      }

      if (
        profileData?.role === Roles.partner &&
        profileData?.status === UserStatus.CHECKING_CONTRACT
      ) {
        void router.push('/profile');
      }
      if (
        profileData?.role === Roles.partner &&
        profileData?.status !== UserStatus.CHECKING_CONTRACT &&
        !isProfile &&
        !isControlPanel &&
        !isConfirmPage
      ) {
        void router.push('/control-panel');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, data]);

  return (
    <LayoutContainer
      className={`
      ${franklinGothicMedium.variable} 
      ${franklinGothicDemiRegular.variable} 
      ${franklinGothicBook.variable} 
      ${interRegular.variable} 
      ${interBold.variable}`}>
      <MainNavigationBar />
      {children}
    </LayoutContainer>
  );
};

export default AppLayout;
