import styled, {css} from 'styled-components';

export const MobileFilterButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 122px;
  height: 37px;
  border-radius: 8px;
  border: 1px solid #222121;
  align-items: center;
  justify-content: center;
`;

export const MobileButtonCounter = styled.button<{
  side: 'left' | 'right';
  disabled: boolean;
}>`
  background: #ffffff;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 100%;
  border: none;
  cursor: ${({disabled}) => `${disabled ? 'not-allowed' : 'pointer'}`};

  ${({theme}) => css`
    ${theme.media.down('xs')`
        width: 36px;
    `}
  `}

  ${({side}) =>
    side === 'left'
      ? css`
          border-right: 1px solid #222121;
          border-radius: 8px 0 0 8px;
        `
      : side === 'right'
      ? css`
          border-left: 1px solid #222121;
          border-radius: 0 8px 8px 0;
        `
      : ''};
  &:disabled {
    cursor: not-allowed;

    &:hover {
    }
  }
  &:active {
    background: ${props => props.theme.colors.lightDefault};
  }
`;

export const ValueTitle = styled.h3<{longCounter?: boolean}>`
  ${({theme, longCounter}) => css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.subtitle3};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.default};
    flex: 1;
    text-align: center;
    padding: 0 8px;
    min-width: ${longCounter ? '80px' : '50px'};
  `}
`;

export const MobileFilterCounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const MobileButtonCounterLabel = styled.h3`
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.default};
    text-align: center;
    width: 29px;
    white-space: nowrap;
  `}
`;
