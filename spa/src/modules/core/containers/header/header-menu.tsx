import { useCallback, useEffect } from 'react';
import { MenuItem } from '@szhsin/react-menu';
import { useDispatch, useSelector } from 'react-redux';
// components
import Icon from 'modules/core/components/icon';
import WalletLink from 'modules/wallet/components/wallet-link';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
import { useWalletListQuery } from 'modules/wallet/hooks/use-wallet-list-query';
import { useWalletTypeInfoListQuery } from 'modules/wallet/hooks/use-wallet-type-info-list-query';
import { useNotificationsCountQuery } from '../../../notification/hooks/use-notifications-count-query';
import { useProfileQuery } from 'modules/user/hooks/use-profile-query';
import {
  selectIsAccountBlocked,
  selectIsUserReviewStatusBlocked,
  // selectIsUserReviewStatusReset,
  selectIsUserReviewStatusRequestCheck,
} from 'modules/user/user.selectors';
// selectors
import { selectLanguage } from '../../../localization/localization.services';
// services
import notificationWsService from 'modules/notification/services/notification-ws.service';

import '@szhsin/react-menu/dist/index.css';
import {
  Burger,
  HeaderActions,
  BalanceButton,
  BalanceInfoContainer,
  BalanceInfo,
  BalancePseudoIcon,
  BalanceAmountEquivalentTitle,
  BalanceAmountEquivalent,
  BalanceAmountEquivalentDecimal,
  BalanceMenuContainer,
  BalanceMenuHeader,
  BalanceMenuHeaderTitle,
  BalanceMenuHeaderAmount,
  BalanceMenuHeaderAmountDeciaml,
  BalanceMenuItem,
  BalanceMenuItemParagraph,
  BalanceMenuItemLink,
  ProfileButton,
  ProfileInfo,
  ProfileAvatar,
  ProfileAvatarImage,
  ProfileName,
  ProfileVerificationAndBlockStatus,
  ProfileStatus,
  ProfileMenu,
  ProfileMenuItem,
  ProfileMenuItemLink,
  NumberOfNotification,
  LanguageTitle,
  LanguageButton,
  LanguageSwitcher,
  LanguageFlagContainer,
  LanguageFlag,
  LanguageFlagInfo,
  LanguageName,
  LanguageMenu,
  LanguageMenuItemFlagContainer,
  LanguageMenuItemFlag,
  LanguageMenuItemInfo,
  LanguageMenuItemName,
} from 'modules/core/containers/header/header-menu.styled';

import Avatar from '../../../../assets/icons/avatar.svg';
import { languageChange } from '../../../localization/localization.actions';
import { defaultCountWalletsPerPage } from 'modules/core/services/pagination.service';

// todo: rewrite this component
function HeaderMenu({ profile, onLogout, totalBalance }) {
  // hooks
  const { t } = useLocalization();
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  // queries
  const walletList = useWalletListQuery({
    page: 1,
    per_page: defaultCountWalletsPerPage,
  });
  const walletTypeInfoList = useWalletTypeInfoListQuery();
  const newNotificationsCount = useNotificationsCountQuery({
    is_readed: false,
  });
  // memo
  const fiatWalletList = getWalletsByType(walletList.data?.list ?? [], 'fiat');
  const cryptoWalletList = getWalletsByType(
    walletList.data?.list ?? [],
    'crypto'
  );
  // const tokenWalletList = getWalletsByType(
  //   walletTypeInfoList.data ?? [],
  //   'tokens'
  // );
  const sidebar = document.getElementById('sidebar');
  const langMeta: any = {
    en: {
      icon: 'flagEn',
      text: t('HEADER.MENU.LANGUAGE.EN'),
    },
    ru: {
      icon: 'flagRu',
      text: t('HEADER.MENU.LANGUAGE.RU'),
    },
  };

  useEffect(() => {
    const unsubscribe = notificationWsService.subscribe(() => {
      newNotificationsCount.refetch();
    });

    return () => {
      unsubscribe();
    };
  }, [newNotificationsCount.refetch]);

  const handleLanguageChange = useCallback(
    (lang) => {
      dispatch(languageChange(lang));
    },
    [dispatch]
  );

  const accountBlockedTitle = t('HEADER.MENU.BLOCKED.TITLE');
  const userReviewStatusRequestCheckTitle = t(
    'HEADER.MENU.REVIEW_STATUS.REQUEST_CHECK'
  );

  const getProfile = useProfileQuery();

  const isAccountBlocked =
    selectIsAccountBlocked(getProfile?.data) ||
    (selectIsUserReviewStatusBlocked(getProfile?.data) &&
      !profile.kyc.verified);

  // const isUserReviewStatusReset =
  //   selectIsUserReviewStatusReset(getProfile?.data) && !profile.kyc.verified;

  const isUserReviewStatusRequestCheck =
    selectIsUserReviewStatusRequestCheck(getProfile?.data) &&
    profile.kyc.verified;

  const handleMenuClick = () => {
    // if (window.innerWidth < 768) {
    //   sidebar.classList.remove('hidden');
    //   document.body.classList.remove('lock');
    // }

    // sidebar.classList.remove('hidden');
    document.body.classList.remove('lock');
  };

  const isUserVerified = () => {
    if (!profile) return false;

    return profile.kyc.verified;
  };

  // const balanceVerificationTitle = () => {
  //   if (!profile) return t('HEADER.MENU.BALANCE_MENU.MYBALANCE');

  //   return profile.kyc.verified
  //     ? t('HEADER.MENU.BALANCE_MENU.MYBALANCE')
  //     : t('HEADER.MENU.VERIFICATION.STATUS_UNVERIFIED');
  // };

  const userVerificationTitle = () => {
    if (!profile) return;

    if (isAccountBlocked) return accountBlockedTitle;

    if (isUserReviewStatusRequestCheck)
      return userReviewStatusRequestCheckTitle;

    return profile.kyc.verified
      ? t('HEADER.MENU.VERIFICATION.STATUS_VERIFIED')
      : t('HEADER.MENU.VERIFICATION.STATUS_UNVERIFIED');
  };

  const username = () => {
    if (!profile) return 'User name';

    return profile.user.email;
  };

  const balanceButton = (
    <BalanceButton onClick={handleMenuClick}>
      <BalanceInfoContainer>
        <BalancePseudoIcon>...</BalancePseudoIcon>
        <BalanceInfo>
          <BalanceAmountEquivalentTitle>
            {t('HEADER.MENU.BALANCE_MENU.MYBALANCE')}
          </BalanceAmountEquivalentTitle>
          <BalanceAmountEquivalent>
            {totalBalance?.data?.currency === 'USD' ? '$' : '€'}
            {isUserVerified() ? parseInt(totalBalance?.data?.value, 10) : 0}.
            <BalanceAmountEquivalentDecimal>
              {isUserVerified()
                ? parseInt(
                    (Math.abs(+totalBalance?.data?.value) % 1)
                      .toFixed(2)
                      .substring(2),
                    10
                  )
                : 0}
            </BalanceAmountEquivalentDecimal>
          </BalanceAmountEquivalent>
        </BalanceInfo>
      </BalanceInfoContainer>
    </BalanceButton>
  );

  const profileButton = (
    <ProfileButton onClick={handleMenuClick}>
      <ProfileInfo>
        <ProfileAvatar>
          <ProfileAvatarImage
            src={profile?.avatar?.url ?? Avatar}
            alt='avatar'
          />
        </ProfileAvatar>
        <ProfileStatus>
          <ProfileVerificationAndBlockStatus
            className={
              isAccountBlocked
                ? 'blocked'
                : '' || isUserVerified()
                ? 'verified'
                : 'unverified'
            }
          >
            {isAccountBlocked ? accountBlockedTitle : userVerificationTitle()}
          </ProfileVerificationAndBlockStatus>
          <ProfileName>{username()}</ProfileName>
        </ProfileStatus>
      </ProfileInfo>
    </ProfileButton>
  );

  const languageButton = (
    <LanguageButton>
      <LanguageSwitcher>
        <LanguageFlagContainer>
          <LanguageFlag>
            <Icon name={langMeta[language].icon} />
          </LanguageFlag>
        </LanguageFlagContainer>
        <LanguageFlagInfo>
          <LanguageTitle>{t('HEADER.MENU.LANGUAGE.SWITCHER')}</LanguageTitle>
          <LanguageName>{langMeta[language].text}</LanguageName>
        </LanguageFlagInfo>
      </LanguageSwitcher>
    </LanguageButton>
  );

  function mobileCollapseSidebar(e) {
    e.preventDefault();

    sidebar.classList.toggle('hidden');
    document.body.classList.toggle('lock');
  }

  function getWalletsByType(wallets, type) {
    if (!walletList.data) {
      return [];
    }

    if (type === 'fiat') {
      return wallets.filter((wallet) => wallet.wallet_type === type);
    }

    if (type === 'crypto') {
      return wallets.filter((wallet) => wallet.wallet_type === type);
    }

    if (type === 'tokens') {
      return wallets.filter(
        (wallet) =>
          !!walletTypeInfoList.data?.find(
            (walletTypeInfo) => walletTypeInfo.currency === wallet.currency
          )?.isToken
      );
    }
  }

  return (
    <HeaderActions>
      <Burger id='burger' onClick={mobileCollapseSidebar} />
      <BalanceMenuContainer menuButton={balanceButton} elevation={1}>
        <BalanceMenuHeader>
          <BalanceMenuHeaderTitle>
            {t('HEADER.MENU.BALANCE_MENU.MYBALANCE')}
          </BalanceMenuHeaderTitle>
          <BalanceMenuHeaderAmount>
            {totalBalance?.data?.currency === 'USD' ? '$' : '€'}
            {isUserVerified() ? parseInt(totalBalance?.data?.value, 10) : 0}.
            <BalanceAmountEquivalentDecimal>
              <BalanceMenuHeaderAmountDeciaml>
                {isUserVerified()
                  ? parseInt(
                      (Math.abs(+totalBalance?.data?.value) % 1)
                        .toFixed(2)
                        .substring(2),
                      10
                    )
                  : 0}
              </BalanceMenuHeaderAmountDeciaml>
            </BalanceAmountEquivalentDecimal>
          </BalanceMenuHeaderAmount>
        </BalanceMenuHeader>
        {fiatWalletList.length > 0 && (
          <BalanceMenuItem>
            <BalanceMenuItemLink to='/funds'>
              {fiatWalletList.map((wallet) => (
                <WalletLink wallet={wallet} key={wallet.id} />
              ))}
            </BalanceMenuItemLink>
          </BalanceMenuItem>
        )}
        <BalanceMenuItem>
          <BalanceMenuItemParagraph>
            {t('HEADER.MENU.BALANCE_MENU.CRYPTO_WALLETS')}
          </BalanceMenuItemParagraph>
          <BalanceMenuItemLink to='/funds'>
            {cryptoWalletList
              .sort((a, b) => a.convertation.value - b.convertation.value)
              .reverse()
              .map((wallet) => (
                <WalletLink wallet={wallet} key={wallet.id} />
              ))}
          </BalanceMenuItemLink>
        </BalanceMenuItem>
        {/* <BalanceMenuItem>
          <BalanceMenuItemParagraph>
            {t('HEADER.MENU.BALANCE_MENU.TOKENS')}
          </BalanceMenuItemParagraph>
          <BalanceMenuItemLink to='/funds'>
            {tokenWalletList.map((wallet) => (
              <WalletLink wallet={wallet} key={wallet.id} />
            ))}
          </BalanceMenuItemLink>
        </BalanceMenuItem> */}
      </BalanceMenuContainer>
      <ProfileMenu menuButton={profileButton} elevation={1}>
        {isUserVerified() ? null : (
          <ProfileMenuItem>
            <ProfileMenuItemLink
              to='/verification'
              className='verification-link'
            >
              {t('FORM.BTN.START_VERIFICATION')}
            </ProfileMenuItemLink>
          </ProfileMenuItem>
        )}

        <ProfileMenuItem>
          <ProfileMenuItemLink to='/profile'>
            {t('HEADER.MENU.PROFILE_MENU.PROFILE')}
          </ProfileMenuItemLink>
        </ProfileMenuItem>
        <ProfileMenuItem>
          <ProfileMenuItemLink to='/notifications'>
            {t('HEADER.MENU.PROFILE_MENU.NOTIFICATIONS')}
          </ProfileMenuItemLink>
          {!!newNotificationsCount.data && (
            <NumberOfNotification>
              {newNotificationsCount.data}
            </NumberOfNotification>
          )}
        </ProfileMenuItem>
        <ProfileMenuItem>
          <ProfileMenuItemLink
            to={{
              pathname: '/preferences',
              state: { currency: totalBalance?.data?.currency },
            }}
          >
            {t('HEADER.MENU.PROFILE_MENU.PREFERENCES')}
          </ProfileMenuItemLink>
        </ProfileMenuItem>
        <ProfileMenuItem>
          <ProfileMenuItemLink to='/support'>
            {t('HEADER.MENU.PROFILE_MENU.SUPPORT')}
          </ProfileMenuItemLink>
        </ProfileMenuItem>
        {/* <ProfileMenuItem>{t('HEADER.MENU.PROFILE_MENU.LOGS')}</ProfileMenuItem> */}
        <ProfileMenuItem onClick={onLogout}>
          {t('HEADER.MENU.PROFILE_MENU.LOG_OUT')}
        </ProfileMenuItem>
      </ProfileMenu>
      <LanguageMenu menuButton={languageButton} elevation={1}>
        <MenuItem onClick={() => handleLanguageChange('en')}>
          <LanguageMenuItemFlagContainer>
            <LanguageMenuItemFlag>
              <Icon name={langMeta.en.icon} />
            </LanguageMenuItemFlag>
          </LanguageMenuItemFlagContainer>
          <LanguageMenuItemInfo>
            <LanguageMenuItemName
              className={language === 'en' ? 'lang-name current' : 'lang-name'}
            >
              {t('HEADER.MENU.LANGUAGE.EN')}
            </LanguageMenuItemName>
          </LanguageMenuItemInfo>
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange('ru')}>
          <LanguageMenuItemFlagContainer>
            <LanguageMenuItemFlag>
              <Icon name={langMeta.ru.icon} />
            </LanguageMenuItemFlag>
          </LanguageMenuItemFlagContainer>
          <LanguageMenuItemInfo>
            <LanguageMenuItemName
              className={language === 'ru' ? 'lang-name current' : 'lang-name'}
            >
              {t('HEADER.MENU.LANGUAGE.RU')}
            </LanguageMenuItemName>
          </LanguageMenuItemInfo>
        </MenuItem>
      </LanguageMenu>
    </HeaderActions>
  );
}

export default HeaderMenu;
