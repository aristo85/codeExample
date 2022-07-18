import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

type ItemLink = NavLink & {
  to: {
    pathname: string;
    state: { fromSidebar: boolean };
  };
};

export const SidebarArrowButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 15%;
  left: 236px;
  width: 25px;
  height: 25px;
  background: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.shape.borderRadius.circle};
  border: 0;
  z-index: 1;
  cursor: pointer;

  transition: ${(props) => props.theme.transition.fast};

  ${(props) => props.theme.elevation[1]};

  ${(props) => props.theme.media.down('md')`
    top: 0.5%;
  `}/* ${(props) => props.theme.media.down('sm')`
    bottom: 27%;
  `}
  ${(props) => props.theme.media.down('xs')`
    bottom: 33%;
  `} */
`;

export const Aside = styled.aside`
  position: fixed;
  left: 0;
  width: 251px;
  height: 100%;
  padding-top: 35px;
  background-color: #f4f6f9;
  transition: ${(props) => props.theme.transition.fast};
  box-shadow: inset -3px 0 3px -3px rgba(0, 0, 0, 0.25),
    inset 0 3px 3px -3px rgba(0, 0, 0, 0.25);
  z-index: 2;
  a {
    transition: font-size 0.25s ease-in-out;
  }

  &.hidden {
    width: 100px;

    ul li a {
      font-size: 0;
    }

    ${SidebarArrowButton} {
      left: 86px;
      transform: rotate(180deg);
      transition: ${(props) => props.theme.transition.fast};

      ${(props) => props.theme.media.down('sm')`
        top: 5px;
      `}
    }
  }

  ${(props) => props.theme.media.down('sm')`
        top: 5px;
      `}
`;

export const SidebarMenu = styled.div``;

export const SidebarMenuList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SidebarMenuIcon = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
  margin-right: 20px;
  filter: ${({ theme }) => theme.palette.sidebar.menuIconColor};
`;

export const SidebarMenuListItemLink: any = styled(NavLink)<ItemLink>`
  position: relative;
  display: flex;
  padding: 10px 0 10px 40px;
  color: ${({ theme }) => theme.palette.common.gray};
  line-height: 26px;
  font-size: ${({ theme }) => theme.font.size.subtitle2};
  font-family: ${({ theme }) => theme.font.family.sidebar};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};

  &.active {
    background: ${({ theme, to }) =>
      !to?.state.fromSidebar && theme.palette.common.white};
    color: ${({ theme, to }) =>
      !to?.state.fromSidebar && theme.palette.common.black};
    &:after {
      position: absolute;
      content: '';
      width: 2px;
      height: 100%;
      right: 0;
      top: 0;
      border-radius: ${({ theme }) => theme.shape.borderRadius.medium};
      background-color: ${({ theme, to }) =>
        !to?.state.fromSidebar && theme.palette.common.primary};
    }
    ${SidebarMenuIcon} {
      transition: ${({ theme, to }) =>
        !to?.state.fromSidebar && theme.transition.fast};
      margin-right: 20px;
      filter: ${({ theme, to }) =>
        !to?.state.fromSidebar && theme.palette.sidebar.iconColor};
    }
  }

  &:hover {
    background: ${({ theme }) => theme.palette.common.white};
    color: ${({ theme }) => theme.palette.common.black};
    &:after {
      position: absolute;
      content: '';
      width: 2px;
      height: 100%;
      right: 0;
      top: 0;
      border-radius: ${({ theme }) => theme.shape.borderRadius.medium};
      background-color: ${({ theme }) => theme.palette.common.primary};
    }
    ${SidebarMenuIcon} {
      transition: ${(props) => props.theme.transition.fast};
      margin-right: 20px;
      filter: ${(props) => props.theme.palette.sidebar.iconColor};
    }
  }
`;

export const SidebarMenuListItem = styled.li`
  margin-bottom: 5px;

  &.blocked ${SidebarMenuListItemLink}:after {
    background-color: ${({ theme }) => theme.palette.common.red};
  }

  &.blocked ${SidebarMenuListItemLink} ${SidebarMenuIcon} {
    filter: ${(props) => props.theme.palette.sidebar.menuIconColor};
  }

  &.blocked ${SidebarMenuListItemLink}.active ${SidebarMenuIcon} {
    filter: ${(props) => props.theme.palette.sidebar.redIconColor};
  }

  &.blocked ${SidebarMenuListItemLink}:hover ${SidebarMenuIcon} {
    filter: ${(props) => props.theme.palette.sidebar.redIconColor};
  }
`;

export const SidebarMenuListItemRedirect = styled(NavLink)<any>`
  position: relative;
  display: flex;
  padding: 10px 0 10px 40px;
  color: ${({ theme }) => theme.palette.common.gray};
  line-height: 26px;
  font-size: ${({ theme }) => theme.font.size.subtitle2};
  font-family: ${({ theme }) => theme.font.family.sidebar};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};

  &.active {
    background: ${({ theme, to }) =>
      to?.state.fromSidebar && theme.palette.common.white};
    color: ${({ theme, to }) =>
      to?.state.fromSidebar && theme.palette.common.black};
    &:after {
      position: absolute;
      content: '';
      width: 2px;
      height: 100%;
      right: 0;
      top: 0;
      border-radius: ${({ theme }) => theme.shape.borderRadius.medium};
      background-color: ${({ theme, to }) =>
        to?.state.fromSidebar && theme.palette.common.primary};
    }
    ${SidebarMenuIcon} {
      transition: ${({ theme, to }) =>
        to?.state.fromSidebar && theme.transition.fast};
      margin-right: 20px;
      filter: ${({ theme, to }) =>
        to?.state.fromSidebar && theme.palette.sidebar.iconColor};
    }
  }

  &:hover {
    background: ${({ theme }) => theme.palette.common.white};
    color: ${({ theme }) => theme.palette.common.black};
    &:after {
      position: absolute;
      content: '';
      width: 2px;
      height: 100%;
      right: 0;
      top: 0;
      border-radius: ${({ theme }) => theme.shape.borderRadius.medium};
      background-color: ${({ theme }) => theme.palette.common.primary};
    }
    ${SidebarMenuIcon} {
      transition: ${(props) => props.theme.transition.fast};
      margin-right: 20px;
      filter: ${(props) => props.theme.palette.sidebar.iconColor};
    }
  }

  &.buy-crypto,
  &.sell-crypto {
    padding-left: 60px;
  }
`;

export const TermsMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const TermsMenuItem = styled.li`
  padding: 5px 0 0 40px;
  font-size: ${({ theme }) => theme.font.size.body2};
  color: ${({ theme }) => theme.palette.common.gray};
`;
export const TermsMenuItemLink = styled(NavLink)`
  color: ${({ theme }) => theme.palette.common.gray};

  &.active {
    color: ${({ theme }) => theme.palette.common.black};
  }
`;

export const SidebarMenus = styled.div`
  display: grid;
  grid-template-rows: 2fr 5fr;

  ${(props) => props.theme.media.down('md')`
    grid-template-rows: 2fr 3fr;
  `}
`;
