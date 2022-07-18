import styled from 'styled-components';
// types
import type { Elevation } from 'styles/theme.types';
// components
import { Menu, MenuHeader, MenuItem, MenuButton } from '@szhsin/react-menu';
import { Link } from 'react-router-dom';
// icons
import ArrowDown from '../../../../assets/icons/arrow-down.svg';
import BurgerButton from '../../../../assets/icons/burger.svg';

export const Burger = styled.div`
  display: none;

  ${(props) => props.theme.media.down('sm')`
    display: block;
    position: relative;
    margin: 0 20px 0 20px;
    width: 30px;
    height: 30px;
    background-image: url(${BurgerButton});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    z-index: 1;
    &:after {
      position: absolute;
      content: '';
      width: 1px;
      top: -20px;;
      height: 70px;
      right: -20px;
      background: #ebebeb;
    }
  `}
`;

export const BalanceButton = styled(MenuButton)``;

export const BalanceInfoContainer = styled.div`
  display: flex;
  margin: 0 45px;

  ${(props) => props.theme.media.down('md')`
    margin: 0 10px;
  `}
`;

export const BalanceInfo = styled.div`
  ${(props) => props.theme.media.down('md')`
    text-align: left;
  `}
`;

export const BalanceAmountEquivalentTitle = styled.span`
  font-size: ${({ theme }) => theme.font.size.body2};
  color: ${({ theme }) => theme.palette.common.gray};
  ${(props) => props.theme.media.down('xs')`
    font-size: ${({ theme }) => theme.font.size.body3};
  `}
`;

export const BalanceAmountEquivalent = styled.p`
  display: flex;
  margin-top: 5px;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.body1};
  font-family: ${({ theme }) => theme.font.family.auxiliary};
  color: ${({ theme }) => theme.palette.common.black};

  ${(props) => props.theme.media.down('xs')`
    font-size: ${({ theme }) => theme.font.size.body2};
  `}

  &:after {
    position: absolute;
    content: url(${ArrowDown});
    width: 12px;
    height: 12px;
    right: 20px;
    bottom: 5px;
    fill: ${({ theme }) => theme.palette.common.red};

    ${(props) => props.theme.media.down('md')`
      display: none;
    `}
  }
`;

export const BalanceAmountEquivalentDecimal = styled.span`
  padding-top: 2px;
  font-size: ${({ theme }) => theme.font.size.auxiliary2};
`;

export const BalancePseudoIcon = styled.p`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  overflow: hidden;
  border-color: transparent;
  border-radius: ${({ theme }) => theme.shape.borderRadius.circle};
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.font.size.subtitle1};
  color: ${({ theme }) => theme.palette.common.white};
  background: ${({ theme }) => theme.palette.common.primary};

  ${(props) => props.theme.media.down('md')`
    min-width: 40px;
  `}
  ${(props) => props.theme.media.down('sm')`
    display: none;
  `}
`;

export const BalanceMenuContainer = styled(Menu)<{ elevation: Elevation }>`
  top: 59px !important;
  left: -282px !important;
  width: 275px;
  padding: 15px;
  background-color: #f4f6f9;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.shape.borderRadius.medium};
  font-family: ${({ theme }) => theme.font.family.auxiliary};

  ${({ elevation, theme }) => theme.elevation[elevation]}

  ${(props) => props.theme.media.down('md')`
    left: 120px !important;
    top: 45px !important;
  `}

  ${(props) => props.theme.media.down('sm')`
    left: -115px !important;
    top: 45px !important;
  `}

  // drop-down menu arrow
  &:before {
    content: '';
    border: solid transparent;
    position: absolute;
    bottom: 100%;
    right: 6px;
    border-bottom-color: #f4f6f9;
    border-width: 12px;
    margin-right: -1px;

    ${(props) => props.theme.media.down('sm')`
      left: 6px;
      right: auto;
    `}
  }
`;

export const BalanceMenuHeader = styled(MenuHeader)`
  padding: 0;
  font-family: ${({ theme }) => theme.font.family.auxiliary};
`;

export const BalanceMenuHeaderTitle = styled.h3`
  text-transform: initial;
  font-size: ${({ theme }) => theme.font.size.body1};
  line-height: 27px;
  color: ${({ theme }) => theme.palette.common.black};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const BalanceMenuHeaderAmount = styled.p`
  position: relative;
  margin: 7px 0;
  font-size: ${({ theme }) => theme.font.size.body2};
  line-height: 24px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.palette.common.primary};
`;

export const BalanceMenuHeaderAmountDeciaml = styled.span`
  position: absolute;
  top: 1px;
  font-size: ${({ theme }) => theme.font.size.auxiliary2};
  line-height: 15px;
`;

export const BalanceMenuItem = styled(MenuItem)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  background-color: transparent;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1));

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BalanceMenuItemParagraph = styled.p`
  width: 100%;
  padding-bottom: 5px;
  font-size: ${({ theme }) => theme.font.size.body1};
  line-height: 27px;
  color: ${({ theme }) => theme.palette.common.black};
`;

export const BalanceMenuItemLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProfileButton = styled(MenuButton)``;

export const ProfileInfo = styled.div`
  display: flex;
  margin: 0 45px;

  ${(props) => props.theme.media.down('sm')`
    margin: 0;
  `}
`;

export const ProfileAvatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  overflow: hidden;
  border-color: transparent;
  background: transparent;
  border-radius: ${({ theme }) => theme.shape.borderRadius.circle};
  box-sizing: border-box;

  ${(props) => props.theme.media.down('sm')`
    display: none;
  `}
`;

export const ProfileAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* object-fit: contain; */
  object-position: center;
`;

export const ProfileName = styled.p`
  max-width: 163px;
  display: flex;
  margin-top: 5px;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-family: ${({ theme }) => theme.font.family.auxiliary};
  font-size: ${({ theme }) => theme.font.size.body2};
  color: ${({ theme }) => theme.palette.common.black};
  overflow: hidden;

  ${(props) => props.theme.media.down('xs')`
    font-size: ${({ theme }) => theme.font.size.auxiliary1};
  `}

  &:after {
    position: absolute;
    content: url(${ArrowDown});
    width: 12px;
    height: 12px;
    right: -27px;
    bottom: 5px;
    fill: ${({ theme }) => theme.palette.common.red};

    ${(props) => props.theme.media.down('md')`
      display: none;
    `}
  }
`;

export const ProfileStatus = styled.div`
  position: relative;
  text-align: left;

  .blocked,
  .unverified {
    font-size: ${({ theme }) => theme.font.size.body2};
    color: ${({ theme }) => theme.palette.common.red};

    ${(props) => props.theme.media.down('xs')`
      font-size: ${({ theme }) => theme.font.size.body3};
    `}
  }

  .verified {
    color: ${({ theme }) => theme.palette.common.green};
    font-size: ${({ theme }) => theme.font.size.body2};

    ${(props) => props.theme.media.down('xs')`
      font-size: ${({ theme }) => theme.font.size.body3};
    `}
  }
`;

export const ProfileVerificationAndBlockStatus = styled.span`
  padding-top: 2px;
  font-size: ${({ theme }) => theme.font.size.body2};
`;

export const ProfileMenu = styled(Menu)<{ elevation: Elevation }>`
  top: 59px !important;
  left: -215px !important;
  width: 210px;
  padding: 17px 20px 20px 20px;
  background-color: #f4f6f9;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.shape.borderRadius.medium};
  ${({ elevation, theme }) => theme.elevation[elevation]}

  ${(props) => props.theme.media.down('md')`
    left: -180px !important;
    width: 194px;
    top: 45px !important;
  `}

  // drop-down menu arrow
  &:before {
    content: '';
    border: solid transparent;
    position: absolute;
    bottom: 100%;
    right: 6px;
    border-bottom-color: #f4f6f9;
    border-width: 12px;
    margin-right: -1px;
  }

  .rc-menu__item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    background-color: unset;
    font-size: ${({ theme }) => theme.font.size.body1};
    font-family: ${({ theme }) => theme.font.family.auxiliary};
    font-weight: ${({ theme }) => theme.font.weight.regular};

    &:hover {
      a {
        transition: ${(props) => props.theme.transition.fast};
        color: ${({ theme }) => theme.palette.common.primary};
      }
    }
  }
`;

export const ProfileMenuItemLink = styled(Link)`
  width: 100%;
  color: ${({ theme }) => theme.palette.common.black};
`;

export const ProfileMenuItem = styled(MenuItem)`
  ${ProfileMenuItemLink}.verification-link {
    color: ${({ theme }) => theme.palette.common.primary};
  }
  &:last-child {
    margin-top: 30px;
    color: ${({ theme }) => theme.palette.common.red};
    &:hover {
      color: ${({ theme }) => theme.palette.common.red};
    }
  }
  &:hover {
    transition: ${(props) => props.theme.transition.fast};
    color: ${({ theme }) => theme.palette.common.primary};
  }
`;

export const NumberOfNotification = styled.span`
  margin-left: auto;
  padding: 3px 11px 0 11px;
  background: ${({ theme }) => theme.palette.common.primary};
  border-radius: ${({ theme }) => theme.shape.borderRadius.medium};
  font-size: ${({ theme }) => theme.font.size.body3};
  font-family: ${({ theme }) => theme.font.family.auxiliary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.palette.common.white};
`;

export const LanguageSwitcher = styled.div`
  position: relative;
  display: flex;
`;

export const LanguageButton = styled(MenuButton)`
  margin-left: 35px;
`;

export const LanguageFlagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.shape.borderRadius.circle};
  border: 1px solid #f4f6f9;
  background-color: transparent;
  box-sizing: border-box;

  svg {
    border-radius: ${({ theme }) => theme.shape.borderRadius.circle};
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

export const LanguageFlag = styled.div`
  display: flex;
`;

export const LanguageFlagInfo = styled.div`
  position: relative;
  padding: 0 64px 0 15px;
  text-align: left;
  color: ${({ theme }) => theme.palette.common.gray};

  ${(props) => props.theme.media.down('sm')`
    display: none;
  `}
`;

export const LanguageName = styled.p`
  margin-top: 5px;
  font-family: ${({ theme }) => theme.font.family.auxiliary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.body1};
  color: ${({ theme }) => theme.palette.common.black};
  transition: ${({ theme }) => theme.transition.fast};

  &:after {
    position: absolute;
    content: url(${ArrowDown});
    width: 12px;
    height: 12px;
    right: 37px;
    bottom: 7px;

    ${(props) => props.theme.media.down('md')`
      display: none;
    `}
  }
`;

export const LanguageTitle = styled.span``;

export const LanguageMenu = styled(Menu)<{ elevation: Elevation }>`
  top: 59px !important;
  max-width: 200px;
  min-width: 150px;
  padding: 17px 20px 20px 20px;
  background-color: #f4f6f9;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  ${({ elevation, theme }) => theme.elevation[elevation]}
  border-radius: ${({ theme }) => theme.shape.borderRadius.medium};

  ${(props) => props.theme.media.down('md')`
    left: -190px !important;
    width: auto;
    top: 45px !important;
  `}

  ${(props) => props.theme.media.down('xs')`
    left: -205px !important;

  `}

  &:before {
    content: '';
    border: solid transparent;
    position: absolute;
    bottom: 100%;
    right: 12px;
    border-bottom-color: #f4f6f9;
    border-width: 12px;
    margin-right: -1px;
  }
  .rc-menu__item {
    padding: 0;
    margin-bottom: 10px;
    background: transparent;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const LanguageMenuItemFlagContainer = styled.span`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  background-color: transparent;
  box-sizing: border-box;
  text-align: center;
  svg {
    border-radius: ${({ theme }) => theme.shape.borderRadius.circle};
  }
`;

export const LanguageMenuItemFlag = styled.div``;

export const LanguageMenuItemInfo = styled.div``;

export const LanguageMenuItemName = styled.p`
  font-family: ${({ theme }) => theme.font.family.auxiliary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.body1};
  ${({ theme }) => theme.font.size.body2};
  color: ${({ theme }) => theme.palette.common.black};
  &:hover {
    color: ${({ theme }) => theme.palette.common.lightGray};
  }
  &.current {
    color: ${({ theme }) => theme.palette.common.lightGray};
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
`;

export const HeaderActions = styled.div`
  display: flex;

  ${(props) => props.theme.media.down('md')`
    padding: 15px 0;
    display: inline-grid;
    grid-template: 1fr / repeat(3,auto);
    grid-auto-flow:column;
    align-items: center;
  `}

  ${(props) => props.theme.media.down('xs')`
    justify-content: space-between;
  `}

  .rc-menu-button {
    border: none;
    position: relative;
    cursor: pointer;
    padding: unset;
    font-family: unset;
    line-height: unset;
    background-color: ${({ theme }) => theme.palette.common.white};

    &.rc-menu-button--open {
      ${BalanceInfoContainer}::before,
      ${ProfileInfo}::before,
      ${LanguageSwitcher}::before {
        display: none;
      }
    }

    // divider
    &${ProfileButton}, &${BalanceButton} {
      :after {
        position: absolute;
        content: '';
        height: 70px;
        width: 1px;
        top: -15px;
        right: 0;
        background-color: #ebebeb;

        ${(props) => props.theme.media.down('sm')`
          height: 68px;
        `}
      }

      &${ProfileButton}:after {
        ${(props) => props.theme.media.down('sm')`
          display: none;}
        `}
      }

      &:hover
        ${BalanceInfoContainer}::before,
        :hover
        ${ProfileInfo}::before,
        :hover
        ${LanguageSwitcher}::before {
        width: 75%;
        position: absolute;
        content: '';
        height: 2px;
        margin: 0 auto;
        bottom: -15px;
        background-color: ${({ theme }) => theme.palette.common.primary};
        border-radius: ${({ theme }) => theme.shape.borderRadius.medium};

        ${(props) => props.theme.media.down('md')`
          display: none;
        `}
      }

      &${LanguageButton} {
        ${(props) => props.theme.media.down('sm')`
          position: absolute;
          top: 15px;
          right: 20px;
        `}
      }
    }

    ${(props) => props.theme.media.down('md')`
      width: 100%;
    `}

    // drop-down menu
    .rc-menu-container {
      position: relative;
    }
  }
`;
