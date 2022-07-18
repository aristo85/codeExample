import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
// components
import Menu from 'modules/core/containers/header/header-menu';
// actions
import { logOut } from 'modules/auth/auth.actions';
// config
import { config } from 'config';
// hooks
import { useProfileQuery } from 'modules/user/hooks/use-profile-query';
// assets
import FruitinLogo from 'assets/icons/fruitin-logo.svg';
import PaypeopleLogo from 'assets/icons/paypeople-logo.svg';

import {
  HeaderBasic,
  HeaderContainer,
  HeaderLogo,
  HeaderLogoLink,
  HeaderLogoImage,
} from 'modules/core/containers/header/header.styled';
import { useTotalBalanceQuery } from 'modules/wallet/hooks/use-balance-query';

const Header: FC = () => {
  const dispatch = useDispatch();
  const profile = useProfileQuery();
  const isDefaultTheme = config.useDefaultTheme;
  const totalBalance = useTotalBalanceQuery();
  const handleLogOut = useCallback(() => {
    dispatch(logOut());
  }, []);

  // console.log('totalbal===>', totalBalance)

  return (
    <HeaderBasic elevation={2}>
      <HeaderContainer>
        <HeaderLogo>
          <HeaderLogoLink to='/balance'>
            <HeaderLogoImage
              src={isDefaultTheme ? FruitinLogo : PaypeopleLogo}
              alt='logo'
            />
          </HeaderLogoLink>
        </HeaderLogo>
        <Menu
          profile={profile.data}
          onLogout={handleLogOut}
          totalBalance={totalBalance}
        />
      </HeaderContainer>
    </HeaderBasic>
  );
};

export default Header;
