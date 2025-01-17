import styled, {css} from 'styled-components';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import Link from 'next/link';

export const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NotificationItemContainer = styled.div`
  ${({theme}) => css`
    background: #fffaeb;
    padding: 16px 24px 16px 24px;
    display: grid;
    grid-template-columns: 5% auto;
    grid-column-gap: 16px;
    grid-row-gap: 8px;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    border-radius: 2px;
    border: 1px solid #f29200;
    width: 100%;
    height: 100%;
    ${theme.media.down('xs')`
      
    `};
  `}
`;

export const NotificationMessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  grid-column: 2;
`;

export const NotificationLink = styled(Link)`
  ${({theme}) => css`
    font-size: ${theme.font.size.body2};
    font-family: ${theme.font.family.gothicDemi};
    color: ${theme.colors.primary};
    grid-column: 2;
    ${theme.media.down('xs')`
      
    `};
  `}
`;
export const NotificationMessage = styled.h2`
  ${({theme}) => css`
    font-size: ${theme.font.size.body2};
    font-family: ${theme.font.family.gothicDemi};
    color: ${theme.colors.default};
    font-weight: ${theme.font.weight.regular};
    grid-column: 2;
    ${theme.media.down('xs')`
      
    `};
  `}
`;

export const IconContainer = styled.div`
  grid-column: 1;
  justify-content: flex-start;
`;

export const NotificationButtonsBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  grid-column: 2;
`;

export const NotificationMainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

export const NotificationButton = styled(ButtonBasic)`
  width: auto;
  height: 25px;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 0 10px;
  border-radius: 10px;
`;
