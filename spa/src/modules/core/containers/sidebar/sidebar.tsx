import React, { FC, useState, useEffect, useRef } from 'react';
// import { NavLink } from 'react-router-dom';
// hooks
import { useProfileQuery } from 'modules/user/hooks/use-profile-query';
import { useLocalization } from 'modules/localization/hooks/use-localization';
import { selectIsAccountBlocked } from 'modules/user/user.selectors';
// assets
import BalanceIcon from 'assets/icons/speedometer.svg';
import FundsIcon from 'assets/icons/plus-outline.svg';
import TransferIcon from 'assets/icons/plane.svg';
// import TradeIcon from "../../img/svg/graph.svg";
import ExchangeIcon from 'assets/icons/transfer.svg';
import HistoryIcon from 'assets/icons/clock.svg';
import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
// import BuyIcon from 'assets/icons/buy.svg';
// import SellIcon from 'assets/icons/selling.svg';
import {
  Aside,
  SidebarArrowButton,
  SidebarMenu,
  SidebarMenuList,
  SidebarMenuListItem,
  SidebarMenuListItemLink,
  SidebarMenuIcon,
  // SidebarMenuListItemRedirect,
  TermsMenu,
  TermsMenuItem,
  TermsMenuItemLink,
  SidebarMenus,
} from 'modules/core/containers/sidebar/sidebar.styled';

const Sidebar: FC = () => {
  const { t } = useLocalization();
  const profile = useProfileQuery();
  // const isUserVerified = useMemo(() => profile.data?.kyc?.verified, [profile]);
  const [fromSidebar, setfromSidebar] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);
  const asideRef = useRef<HTMLInputElement>();

  const mainContainer = document.getElementById('main-container');
  const sidebar = document.getElementById('sidebar');

  const isAccountBlocked = selectIsAccountBlocked(profile?.data);

  const collapseSidebar = (e: any) => {
    e.preventDefault();

    sidebar.classList.toggle('hidden');
    document.body.classList.toggle('lock');

    if (sidebar.classList.contains('hidden')) {
      mainContainer.style.maxWidth = 'calc(100% - 100px)';
    } else {
      mainContainer.style.maxWidth = 'calc(100% - 250px)';
    }
  };

  const onClickListItem = (data: boolean) => {
    setfromSidebar(data);
  };

  const handleClickOutside = (e: any) => {
    if (!asideRef.current.contains(e.target) && window.innerWidth < +'768') {
      setClickedOutside(true);
      sidebar?.classList.add('hidden');
      document.body.classList.remove('lock');
    }
  };

  const handleClickInside = (e: any) => {
    setClickedOutside(false);

    if (e.target.tagName.toLowerCase() === 'a' && window.innerWidth < +'768') {
      sidebar.classList.add('hidden');
      document.body.classList.remove('lock');
    }
  };

  useEffect(() => {
    if (sidebar) {
      console.log('test');
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sidebar]);

  return (
    <Aside
      className='sidebar'
      id='sidebar'
      ref={asideRef}
      onClick={handleClickInside}
    >
      {clickedOutside && collapseSidebar}

      <SidebarArrowButton
        className='sidebar-btn'
        id='sidebar-btn'
        onClick={collapseSidebar}
      >
        <img src={ArrowLeftIcon} alt='arrl' />
      </SidebarArrowButton>

      <SidebarMenus>
        <SidebarMenu className='sidebar-menu' id='sidebarmenu'>
          <SidebarMenuList>
            <SidebarMenuListItem className={isAccountBlocked ? 'blocked' : ''}>
              <SidebarMenuListItemLink
                to={{
                  pathname: '/balance',
                  state: { fromSidebar },
                }}
                onClick={() => onClickListItem(false)}
              >
                <SidebarMenuIcon>
                  <img src={BalanceIcon} alt='sidebar-icon' />
                </SidebarMenuIcon>
                {t('PAGES.BALANCE.TITLE')}
              </SidebarMenuListItemLink>
            </SidebarMenuListItem>
            <SidebarMenuListItem className={isAccountBlocked ? 'blocked' : ''}>
              <SidebarMenuListItemLink
                to={{
                  pathname: '/funds',
                  state: { fromSidebar },
                }}
                onClick={() => onClickListItem(false)}
              >
                <SidebarMenuIcon>
                  <img src={FundsIcon} alt='sidebar-icon' />
                </SidebarMenuIcon>
                {t('PAGES.ADD_FUNDS.TITLE')}
              </SidebarMenuListItemLink>
            </SidebarMenuListItem>
            {/* <SidebarMenuListItem className={isAccountBlocked ? 'blocked' : ''}>
            <SidebarMenuListItemRedirect
              className='buy-crypto'
              to={{
                pathname: '/funds',
                state: { fromSidebar, fromRedirect: true },
              }}
              onClick={() => onClickListItem(true)}
            >
              <SidebarMenuIcon>
                <img src={BuyIcon} alt='sidebar-icon' />
              </SidebarMenuIcon>
              {t('PAGES.BUY_FUNDS.TITLE')}
            </SidebarMenuListItemRedirect>
          </SidebarMenuListItem> */}
            <SidebarMenuListItem className={isAccountBlocked ? 'blocked' : ''}>
              <SidebarMenuListItemLink
                to={{
                  pathname: '/transfer',
                  state: { fromSidebar },
                }}
                onClick={() => onClickListItem(false)}
              >
                <SidebarMenuIcon>
                  <img src={TransferIcon} alt='sidebar-icon' />
                </SidebarMenuIcon>
                {t('PAGES.TRANSFER.TITLE')}
              </SidebarMenuListItemLink>
            </SidebarMenuListItem>
            {/* <SidebarMenuListItem className={isAccountBlocked ? 'blocked' : ''}>
            <SidebarMenuListItemRedirect
              className='sell-crypto'
              to={{
                pathname: '/transfer',
                state: { fromSidebar, fromRedirect: true },
              }}
              onClick={() => onClickListItem(true)}
            >
              <SidebarMenuIcon>
                <img src={SellIcon} alt='sidebar-icon' />
              </SidebarMenuIcon>
              {t('PAGES.SELL_FUNDS.TITLE')}
            </SidebarMenuListItemRedirect>
          </SidebarMenuListItem> */}
            {/* <SidebarMenuListItem>*/}
            {/*  <SidebarMenuListItemLink to="/trade">*/}
            {/*    <div className="sidebar-icon">*/}
            {/*      <img src={TradeIcon} alt="sidebar-icon" />*/}
            {/*    </div>*/}
            {/*    Trade*/}
            {/*  </SidebarMenuListItemLink>*/}
            {/* </SidebarMenuListItem>*/}
            <SidebarMenuListItem className={isAccountBlocked ? 'blocked' : ''}>
              <SidebarMenuListItemLink
                to={{
                  pathname: '/exchange',
                  state: { fromSidebar },
                }}
                onClick={() => onClickListItem(false)}
              >
                <SidebarMenuIcon>
                  <img src={ExchangeIcon} alt='sidebar-icon' />
                </SidebarMenuIcon>
                {t('PAGES.EXCHANGE.TITLE')}
              </SidebarMenuListItemLink>
            </SidebarMenuListItem>
            <SidebarMenuListItem>
              <SidebarMenuListItemLink
                to={{
                  pathname: '/history',
                  state: { fromSidebar },
                }}
                onClick={() => onClickListItem(false)}
              >
                <SidebarMenuIcon>
                  <img src={HistoryIcon} alt='sidebar-icon' />
                </SidebarMenuIcon>
                {t('PAGES.HISTORY.TITLE')}
              </SidebarMenuListItemLink>
            </SidebarMenuListItem>
            {/* {!isUserVerified && <VerificationLink />} */}
          </SidebarMenuList>
        </SidebarMenu>
        <TermsMenu>
          <TermsMenuItem>
            <TermsMenuItemLink
              to={{
                pathname: '/aml-program',
                state: { fromSidebar },
              }}
              onClick={() => onClickListItem(false)}
            >
              {/* {t('PAGES.AML_PROGRAM_TITLE')} */}
              AML program
            </TermsMenuItemLink>
          </TermsMenuItem>
          <TermsMenuItem>
            <TermsMenuItemLink
              to={{
                pathname: '/privacy-policy',
                state: { fromSidebar },
              }}
              onClick={() => onClickListItem(false)}
            >
              {/* {t('PAGES.PRIVACY_POLICY_TITLE')} */}
              Privacy Policy
            </TermsMenuItemLink>
          </TermsMenuItem>
          <TermsMenuItem>
            <TermsMenuItemLink
              to={{
                pathname: '/terms-and-conditions',
                state: { fromSidebar },
              }}
              onClick={() => onClickListItem(false)}
            >
              {/* {t('PAGES.TERMS_AND_CONDITIONS_TITLE')} */}
              Terms and Conditions
            </TermsMenuItemLink>
          </TermsMenuItem>
        </TermsMenu>
      </SidebarMenus>
    </Aside>
  );
};

export default Sidebar;
