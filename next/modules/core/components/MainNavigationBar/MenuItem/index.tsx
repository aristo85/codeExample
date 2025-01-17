import * as React from 'react';
import {FC, useState} from 'react';
import Link from 'next/link';
import {Devices, PagesData} from '@/modules/core/components/MainNavigationBar';
import {useAppSelector} from '@/modules/core/hooks';
import {Roles, selectProfileData} from '@/modules/auth/authSlice';
import {StyledLink} from '@/modules/core/components/MainNavigationBar/MenuItem/styles';
import {useRouter} from 'next/router';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';

const MenuItem: FC<PagesData & {closeDrawer?: () => void}> = ({
  name,
  url,
  dropDownLinks,
  accessAllowed,
  allowedDevices,
  closeDrawer,
}) => {
  useState<boolean>(false);
  const profile = useAppSelector(selectProfileData);
  const router = useRouter();
  const deviceType = useMatchMedia(`(max-width: ${breakpoints.sm}px)`)
    ? Devices.MOBILE
    : Devices.DESKTOP;

  const isRoleAllowed =
    (profile && accessAllowed.includes(profile.role)) ||
    (!profile && accessAllowed.includes(Roles.guest));

  if (!dropDownLinks && isRoleAllowed && allowedDevices.includes(deviceType)) {
    const isActive = router.pathname === url;
    return (
      <Link key={name} href={`${url}`}>
        <StyledLink active={isActive} onClick={closeDrawer}>
          {name}
        </StyledLink>
      </Link>
    );
  }

  return null;
};
export default MenuItem;
