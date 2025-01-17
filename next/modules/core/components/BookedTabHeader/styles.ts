import styled, {css} from 'styled-components';

export const BookedTab = styled.div<{isActive: boolean}>`
  ${({theme, isActive}) => css`
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.regular};
    color: ${isActive ? theme.colors.primary : theme.colors.default};
    font-family: ${theme.font.family.gothicMedium};
    position: relative;
    padding: 0 8px;
    cursor: pointer;

    &::after {
      position: absolute;
      content: '';
      display: ${isActive ? 'block' : 'none'};
      height: 2px;
      background-color: ${theme.colors.primary};
      bottom: -8px;
      left: 0;
      width: 100%;
      z-index: 1;
    }

    ${theme.media.down('xs')`
      margin: 16px 0;
    `}
  `}
`;

export const BookedTabHeader = styled.div<{wholeWidth: number | null}>`
  display: flex;
  flex-direction: row;
  gap: 24px;
  position: relative;
  width: 100%;
  overflow: visible;

  &::after {
    position: absolute;
    content: '';
    display: block;
    height: 2px;
    background-color: #c6e1f3;
    bottom: -8px;
    width: 100%;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  ${({theme, wholeWidth}) => css`
    ${theme.media.down('xs')`
      overflow-y: hidden;
      overflow-x: auto;
      
      &::after {
      bottom: 8px;
        width: ${wholeWidth ? `${wholeWidth}px` : '100%'};
      }
    `}
  `}
`;
