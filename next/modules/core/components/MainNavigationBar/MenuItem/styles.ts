import styled, {css} from 'styled-components';

export const MenuItemContainer = styled.div<{active?: boolean}>`
  ${({theme, active}) => css`
    cursor: pointer;
    position: relative;
    z-index: 1;
    border-bottom: 2px solid ${active ? 'white' : 'transparent'};

    ${theme.media.down('sm')`
      display: flex;
      flex-direction: column;
      gap: 8px;
      border-bottom: none;
    `}
  `}
`;

export const MenuItemHeader = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
    ${theme.media.down('sm')`
      justify-content: flex-start;
    `}
  `}
`;

export const StyledLink = styled.p<{active?: boolean}>`
  ${({theme, active}) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.gothicMedium};
    cursor: pointer;
    font-size: 24px;
    border-bottom: 2px solid ${active ? 'white' : 'transparent'};
    ${theme.media.down('sm')`
      width: fit-content;
    `}
  `}
`;

export const DropDownMenu = styled.div<{open: boolean}>`
  ${({theme, open}) => css`
    position: absolute;
    top: 30px;
    display: ${open ? 'flex' : 'none'};
    white-space: nowrap;
    border-radius: 16px;
    padding: 16px;
    flex-direction: column;
    gap: 24px;
    border: 2px solid ${theme.colors.primary};
    background: ${theme.colors.white};
    z-index: 1;
    left: -40%;

    ${theme.media.down('sm')`
      position: relative;
      left: 0;
      top: 0;
      transform: unset;
      padding: 0;
      border: none;
      padding-left: 10px;
      background: transparent;
      overflow-wrap: anywhere;
      white-space: break-spaces;
    `}
  `}
`;

export const DropDownLink = styled.p<{active: boolean}>`
  ${({theme, active}) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.font.family.gothicMedium};
    cursor: pointer;
    font-size: ${theme.font.size.subtitle1};
    font-weight: 400;
    border-bottom: 2px solid ${active ? theme.colors.primary : 'transparent'};
    ${theme.media.down('sm')`
       width: fit-content;
       color: ${theme.colors.white};
       border-bottom: 2px solid ${active ? theme.colors.white : 'none'};
    `}
  `}
`;
