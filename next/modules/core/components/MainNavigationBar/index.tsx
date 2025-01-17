import * as React from 'react';
import {useEffect} from 'react';
import Link from 'next/link';
import {
  AppDrawer,
  AuthBtn,
  AuthContent,
  DesktopContainer,
  HeaderContainer,
  HeaderMainLine,
  HeaderMenuItems,
  IconBtn,
  MenuContent,
  MobileContainer,
  StyledLink,
  StyledNavBox,
  UserName,
} from './styles';
import {useRouter} from 'next/router';
import MainLogo from '../icons/MainLogo';
import ProfileIcon from '../icons/ProfileIcon';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  Roles,
  selectProfileData,
  selectRefreshToken,
  selectUserToken,
  setAuthModal,
} from '@/modules/auth/authSlice';
import {AuthType} from '@/modules/auth/types';
import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';
import {franklinGothicMedium} from '../../containers/AppLayout';
import MenuItem from '@/modules/core/components/MainNavigationBar/MenuItem';
import AuthContainer from '@/modules/auth/AuthContainer';
import {queryHandler, QueryLocation} from '@/modules/core/helpers/queryHandler';
import {selectFilterValues} from '@/modules/core/api/filterSlice';
import {selectGuideFilterValues} from '@/modules/guide/components/GuideFilter/guideFilterSlice';
import {
  guideQueryHandler,
  GuideQueryLocation,
} from '@/modules/core/helpers/guideQueryHandler';
import {selectExcursionFilterValues} from '@/modules/excursion/components/ExcursionFilter/ExcursionFilterSlice';
import {
  excursionQueryHandler,
  ExcursionQueryLocation,
} from '@/modules/core/helpers/excursionQueryHandler';
import EnterIcon from '@/modules/core/components/icons/EnterIcon';
import {UserStatus} from '../../api/model/user/userStatus';

export enum Devices {
  MOBILE = 'MOBILE',
  DESKTOP = 'DESKTOP',
}
export interface PagesData {
  name: string;
  url: string;
  accessAllowed: Roles[];
  dropDownLinks?: {
    name: string;
    url: string;
    accessAllowed: Roles[];
  }[];
  allowedDevices: Devices[];
}

const MainNavigationBar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectUserToken);
  const refreshToken = useAppSelector(selectRefreshToken);
  const profile = useAppSelector(selectProfileData);
  const [login, setLogin] = React.useState(false);
  const [drawer, setDrawer] = React.useState<boolean>(false);

  useEffect(() => {
    setLogin(!!isAuth);
  }, [isAuth]);

  const toggleDrawer = (val: boolean) => {
    setDrawer(val);
  };

  const handleLogin = (authType: AuthType) => {
    dispatch(setAuthModal(authType));
  };
  const onProfileIconClickHandler = () => {
    if (!login) {
      handleLogin(AuthType.LOGIN);
      return;
    }
    router.push('/profile');
  };

  // TODO need refactoring in the future. Can place placement store into queryHandler.
  const filterPlacementData = useAppSelector(selectFilterValues);
  const {queriesString: placementQueryString} = queryHandler(
    filterPlacementData,
    QueryLocation.list,
  );

  const filterGuideData = useAppSelector(selectGuideFilterValues);
  const {queriesString: guideQueryString} = guideQueryHandler(
    filterGuideData,
    GuideQueryLocation.list,
  );

  const filterExcursionData = useAppSelector(selectExcursionFilterValues);
  const {queriesString: excursionQueryString} = excursionQueryHandler(
    filterExcursionData,
    ExcursionQueryLocation.list,
  );

  const isPartnerCheckingStatus =
    profile?.status === UserStatus.CHECKING_CONTRACT &&
    profile?.role === Roles.partner;

  const pages: PagesData[] = [
    {
      name: 'Панель управления',
      url: '/control-panel',
      accessAllowed: [Roles.partner],
      allowedDevices: [Devices.DESKTOP, Devices.MOBILE],
    },
    {
      name: 'Уведомления',
      url: '/notification',
      accessAllowed: [Roles.partner],
      allowedDevices: [Devices.MOBILE],
    },
    {
      name: 'Жильё',
      url: `/control-panel/placement`,
      accessAllowed: [Roles.partner],
      allowedDevices: [Devices.DESKTOP, Devices.MOBILE],
    },
    {
      name: 'Бронирования',
      url: `/control-panel/booking`,
      accessAllowed: [Roles.partner],
      allowedDevices: [Devices.DESKTOP, Devices.MOBILE],
    },
    {
      name: 'Экскурсии',
      url: `/control-panel/excursion`,
      accessAllowed: [Roles.partner],
      allowedDevices: [Devices.DESKTOP, Devices.MOBILE],
    },
    {
      name: 'Гиды',
      url: `/control-panel/guide`,
      accessAllowed: [Roles.partner],
      allowedDevices: [Devices.DESKTOP, Devices.MOBILE],
    },
    {
      name: 'Жилье',
      url: `/placement?${placementQueryString}`,
      accessAllowed: [Roles.tourist, Roles.guest],
      allowedDevices: [Devices.DESKTOP, Devices.MOBILE],
    },
    {
      name: 'Экскурсии',
      url: `/excursion?${excursionQueryString}`,
      accessAllowed: [Roles.tourist, Roles.guest],
      allowedDevices: [Devices.DESKTOP, Devices.MOBILE],
    },
    {
      name: 'Гиды',
      url: `/guide?${guideQueryString}`,
      accessAllowed: [Roles.tourist, Roles.guest],
      allowedDevices: [Devices.DESKTOP, Devices.MOBILE],
    },
  ];

  return (
    <HeaderContainer isHomePage={router.pathname === '/'}>
      <DesktopContainer>
        <HeaderMainLine>
          <Link href="/" prefetch={false}>
            <MainLogo />
          </Link>
          {login ? (
            <AuthContent login={login}>
              <UserName>{`${profile?.firstName || ''} ${
                profile?.lastName || ''
              }`}</UserName>
              <Link href="/profile">
                <IconBtn>
                  <StyledLink style={{paddingBottom: '0px', height: '24px'}}>
                    <ProfileIcon />
                  </StyledLink>
                </IconBtn>
              </Link>
            </AuthContent>
          ) : (
            <AuthContent>
              <AuthBtn onClick={() => handleLogin(AuthType.REG)}>
                Регистрация
              </AuthBtn>
              <AuthBtn onClick={() => handleLogin(AuthType.LOGIN)}>
                Войти в аккаунт
              </AuthBtn>
            </AuthContent>
          )}
        </HeaderMainLine>

        {!isPartnerCheckingStatus && (
          <HeaderMenuItems>
            {pages.map((page, index) => {
              return <MenuItem {...page} key={`${page.name}-${index}`} />;
            })}
          </HeaderMenuItems>
        )}

        <AuthContainer />
      </DesktopContainer>

      <MobileContainer>
        <MenuContent>
          {drawer ? (
            <IconBtn onClick={() => toggleDrawer(false)}>
              <CloseIcon />
            </IconBtn>
          ) : (
            <IconBtn onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconBtn>
          )}
          <AppDrawer
            className={`${franklinGothicMedium.className}`}
            anchor={'left'}
            open={drawer}
            onClose={() => toggleDrawer(false)}
            onOpen={() => toggleDrawer(true)}
            slotProps={{
              root: {
                style: {
                  maxHeight: 'calc(100vh - 104px)',
                  top: '104px',
                },
              },
              backdrop: {className: 'backdrop'},
            }}
            PaperProps={{className: 'paper'}}>
            {!isPartnerCheckingStatus && (
              <StyledNavBox>
                {pages.map((page, index) => {
                  return (
                    <MenuItem
                      {...page}
                      key={`${page.name}-${index}`}
                      closeDrawer={() => toggleDrawer(false)}
                    />
                  );
                })}
              </StyledNavBox>
            )}
          </AppDrawer>
        </MenuContent>
        <Link href="/">
          <StyledLink>
            <MainLogo />
          </StyledLink>
        </Link>
        <IconBtn onClick={onProfileIconClickHandler}>
          {login ? <ProfileIcon /> : <EnterIcon />}
        </IconBtn>
      </MobileContainer>
    </HeaderContainer>
  );
};
export default MainNavigationBar;
