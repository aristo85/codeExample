import styled, {css} from 'styled-components';
import {Box, SwipeableDrawer} from '@mui/material';
import ButtonBasic from '../Buttons/ButtonBasic';

export const HeaderContainer = styled.div<{isHomePage: boolean}>`
  ${({theme, isHomePage}) => css`
    background: ${theme.colors.secondary};
    padding: 24px 0;
    height: ${isHomePage && '192px'};

    ${theme.media.down('sm')`
    position: fixed;
    top: 0;
    width: 100vw;
    padding: 16px 0px;
    height: 80px;
    z-index: 1001;
    `}
  `}
`;

export const DesktopContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  max-width: 1180px;
  padding: 0 10px;
  ${props => props.theme.media.down('lg')`
    width: 100%;
  `}
  ${({theme}) => theme.media.down('sm')`
   display: none;
  `}
`;

export const MobileContainer = styled.div`
  display: none;
  ${({theme}) => theme.media.down('sm')`
   display: flex;
   justify-content: space-between;
   padding: 0 10px;
  `}
  ${({theme}) => theme.media.down('xs')`
   gap: 8px;
   `}
  ${({theme}) => theme.media.down('xxs')`
   gap: 0;
   `}
`;

export const HeaderMainLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthContent = styled.div<{login?: boolean}>`
  display: flex;
  z-index: 1;
  align-items: center;
  gap: 24px;
`;

export const UserName = styled.p`
  white-space: nowrap;
  align-self: center;
  text-align: right;

  ${({theme}) => css`
    color: ${theme.colors.white};
    font-size: 24px;
    font-family: ${theme.font.family.gothicMedium};
  `};
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const AuthBtn = styled(ButtonBasic)`
  cursor: pointer;
  white-space: nowrap;
  height: 48px;
  font-size: 16px;
  padding: 0 18px;
  ${({theme}) => theme.media.down('sm')`
  height: 48px;
  width: 48px;
  padding: 0px;
  border-radius: 16px;
  font-size: 34px;
  `}
`;

export const IconBtn = styled(ButtonBasic)`
  cursor: pointer;
  padding: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  ${({theme}) => theme.media.down('sm')`
    height: 48px;
    width: 48px;
  `}
`;

export const AppDrawer = styled(SwipeableDrawer)`
  .backdrop,
  .paper {
    max-height: calc(100vh - 80px);
    top: 80px;
  }
  .paper {
    box-shadow: 0 0 0 0 rgba(0, 0, 0);
    width: 300px;
    background: ${({theme}) => theme.colors.secondary};
    padding: 30px 0 0 16px;
  }
`;

export const MenuContent = styled.div``;

export const StyledNavBox = styled(Box)`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  ${({theme}) => theme.media.down('sm')`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: flex-start;
  `}
`;

export const StyledLink = styled.p<{active?: boolean}>`
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 26px;
  border-bottom: ${props => (props.active ? 'white' : 'none')} 2px solid;
  ${({theme}) => theme.media.down('sm')`
   width: fit-content;
  `}
`;

export const Logout = styled(StyledLink)`
  position: absolute;
  bottom: 70px;
`;

export const HeaderMenuItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 32px;
  row-gap: 16px;
  align-self: flex-start;
  align-items: flex-start;
  font-family: ${({theme}) => theme.font.family.gothicMedium};
`;
