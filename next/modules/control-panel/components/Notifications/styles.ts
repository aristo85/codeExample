import styled, {css} from 'styled-components';

export const NotificationContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    width: 80%;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 40px;
    ${theme.media.down('md')`
      width: 100%;
    `}
  `}
`;

export const NotificationItemsContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 24px;
    ${theme.media.down('xs')`
      
    `}
  `}
`;

export const DefaultNotificationText = styled.h3`
  ${({theme}) => css`
    font-size: ${theme.font.size.subtitle2};
    font-family: ${theme.font.family.gothicMedium};
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.regular};
    text-align: center;
    ${theme.media.down('xs')`
      
    `}
  `}
`;
export const NotificationTitle = styled.h2`
  ${({theme}) => css`
    font-size: ${theme.font.size.heading2};
    font-family: ${theme.font.family.gothicMedium};
    color: ${theme.colors.default};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down('xs')`
      
    `}
  `}
`;

export const ControlPanelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 56px;
  align-items: flex-start;
  margin-top: 16px;

  ${({theme}) => theme.media.down('md')`
       flex-direction: column;
    `}
`;

export const NotificationHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NotificationPagination = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

type ArrowProps = {
  disabled?: boolean;
};

const ArrowStyles = css<ArrowProps>`
  ${({theme, disabled}) => css`
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    height: auto;
    outline: none;
    background: none;
    border: none;

    &:active path {
      stroke: ${disabled ? '#22212152' : '#22212152'};
    }

    & path {
      stroke: ${disabled ? '#22212152' : '#222121'};
    }

    ${theme.media.down('md')`
    `};
  `}
`;

export const StyledButton = styled.button<ArrowProps>`
  ${ArrowStyles};
`;
