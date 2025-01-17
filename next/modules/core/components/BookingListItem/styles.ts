import styled, {css} from 'styled-components';
import Image from 'next/image';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import Link from 'next/link';
import {BookingStatus} from '@/modules/core/api/types';

export const BookedItemContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 16px;
    height: 89px;
    border: 1px solid ${theme.colors.primary};
    border-radius: 8px;
    ${theme.media.down('xs')`
      flex-direction: column;
      height: auto;
      gap: 0;
    `}
  `}
`;

export const BookedItemImageContainer = styled.div`
  position: relative;
  width: 88px;
  height: auto;
  ${({theme}) => css`
    ${theme.media.down('xs')`
      width: 100%;
      height: 128px;
    `}
  `}
`;

export const BookedItemImage = styled(Image)<{$isGuide?: boolean}>`
  object-fit: cover;
  ${({theme, $isGuide}) => css`
    border-radius: ${$isGuide ? '50%' : '7px 0 0 7px'};
    ${theme.media.down('xs')`
      position: static;
      border-radius: 7px 7px 0 0;
    `}
  `}
`;

export const BookedMainBlockWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  ${({theme}) => css`
    ${theme.media.down('xs')`
      padding: 16px;
    `}
  `}
`;

export const BookedMainBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`;

export const BookedItemInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  ${({theme}) => css`
    ${theme.media.down('smTab')`
      width: 100%;
    `}
  `}
`;

export const BookedItemFieldData = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  ${({theme}) => css`
    ${theme.media.down('xs')`
      
    `}
  `}
`;

export const BookedItemName = styled.div<{isPartner: boolean}>`
  ${({theme, isPartner}) => css`
    display: inline-block;
    font-family: ${theme.font.family.interBold};
    font-size: ${theme.font.size.body3};
    color: ${theme.colors.primary};
    min-width: 215px;
    max-width: ${isPartner ? '300px' : '530px'};
    height: 17px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    ${theme.media.down('lg')`
    ${
      !isPartner &&
      css`
        max-width: 400px;
      `
    }
      
    `};
    ${theme.media.down('screen1200')`
    ${
      isPartner
        ? css`
            max-width: 220px;
            min-width: 180px;
          `
        : css`
            max-width: 300px;
          `
    }
      
    `};
    ${theme.media.down('xs')`
      min-width: unset;
      max-width: 215px;
    `};
  `}
`;

export const BookedItemValue = styled.h3`
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicBook};
    font-size: ${theme.font.size.body3};
    color: ${theme.colors.default};
    ${theme.media.down('xs')`
      
    `};
  `}
`;

export const ActionSection = styled.section`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  ${({theme}) => css`
    ${theme.media.down('xs')`
      width: 100%;
      justify-content: space-between;
    `}
  `}
`;

export const ItemStatus = styled.h3<{
  type: BookingStatus;
  showBackground: boolean;
}>`
  ${({theme, type, showBackground}) => css`
    font-family: ${theme.font.family.interBold};
    font-size: ${showBackground
      ? theme.font.size.auxiliary1
      : theme.font.size.body3};
    padding: ${showBackground ? '8px 16px' : 0};
    border-radius: 16px;
    color: ${type === 'PAID'
      ? '#6fcf97'
      : type === 'CANCELLED'
      ? '#de3730'
      : type === 'WAITING_PAYMENT'
      ? '#f29200'
      : type === 'WAITING_PARTNER' || type === 'PARTNER_ACCEPTED'
      ? '#f29200'
      : 'inherit'};
    ${showBackground &&
    css`
      background: ${type === 'PAID'
        ? 'rgba(111, 207, 151, 0.3)'
        : type === 'CANCELLED'
        ? 'rgba(255, 127, 122, 0.3)'
        : type === 'WAITING_PAYMENT'
        ? 'rgba(255, 228, 110, 0.3)'
        : type === 'WAITING_PARTNER' || type === 'PARTNER_ACCEPTED'
        ? 'rgba(255, 228, 110, 0.3)'
        : 'none'};
    `}
    ${theme.media.down('xs')`
      padding: ${showBackground ? '8px' : 0};
    `};
  `}
`;

export const ItemPartnerStatus = styled.h3<{
  type: BookingStatus;
}>`
  align-self: start;
  ${({theme, type}) => css`
    font-family: ${theme.font.family.interBold};
    font-size: ${theme.font.size.body3};
    border-radius: 16px;
    color: ${type === 'PAID'
      ? '#6fcf97'
      : type === 'CANCELLED'
      ? '#de3730'
      : type === 'WAITING_PAYMENT'
      ? '#f29200'
      : type === 'WAITING_PARTNER' || type === 'PARTNER_ACCEPTED'
      ? '#f29200'
      : 'inherit'};
    ${theme.media.down('xs')`
    `};
  `}
`;

export const ButtonContainer = styled.div<{isScreenSmTab?: boolean}>`
  position: relative;
  margin: 8px 8px;
  ${({theme}) => css`
    ${theme.media.down('xs')`
      margin 0;
    `}
  `}
`;

export const ItemButton = styled(ButtonBasic)`
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  font-size: 18px;
  position: relative;
  border-radius: 10px;
  border: 2px solid var(--main-accent, #1d7abd);
  background: var(--main-white, #fff);
  display: flex;
  justify-content: center;
  align-items: baseline;
  ${({theme}) => css`
    ${theme.media.down('xs')`
      
    `}
  `}
`;

export const Block = styled.div`
  position: absolute;
  background: blue;
  top: 30px;
  right: 0;
  z-index: 1;
  border-radius: 16px 0 16px 16px;
  border: 2px solid var(--main-accent, #1d7abd);
  background: var(--main-white, #fff);
  padding: 16px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
  ${({theme}) => css`
    ${theme.media.down('xs')`
      
    `}
  `}
`;

export const ItemLink = styled(Link)`
  white-space: nowrap;
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.body2};
    color: ${theme.colors.default};
    ${theme.media.down('xs')`      
    `};
  `}
`;

export const ButtonItem = styled.button`
  white-space: nowrap;
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.body2};
    color: ${theme.colors.default};
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    text-align: left;
    ${theme.media.down('xs')`
      
    `};
  `}
`;

export const StatusAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: flex-end;
  align-self: flex-start;
  margin-top: 8px;
  white-space: nowrap;
  ${({theme}) => css`
    ${theme.media.down('xs')`
      display: block;
    `}
  `}
`;

export const FullNameString = styled.h3`
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicDemi};
    font-size: ${theme.font.size.body2};
    color: ${theme.colors.default};
    ${theme.media.down('xs')`
      
    `};
  `}
`;

export const ItemPrice = styled.h3<{$isScreenSmTab?: boolean}>`
  ${({theme, $isScreenSmTab}) => css`
    font-family: ${theme.font.family.interBold};
    font-size: ${theme.font.size.body3};
    color: ${theme.colors.default};
    ${() =>
      $isScreenSmTab
        ? css`
            padding: 0 16px 0 0;
          `
        : theme.media.between('xs', 'smTab')`
          padding: 0 16px 0 0;
    `}
  `}
`;

// GUIDE

export const GuideCard = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  border-radius: 8px;
  ${({theme}) => css`
    border: 1px solid ${theme.colors.primary};
    ${theme.media.down('xs')`
    `};
  `}
`;

export const GuideMainSection = styled.section`
  display: flex;
  gap: 16px;
  align-items: center;
  ${({theme}) => css`
    ${theme.media.down('xs')`
      
    `};
  `}
`;

export const GuideImage = styled(Image)`
  border-radius: 7px 0 0 7px;
  object-fit: cover;
  ${({theme}) => css`
    ${theme.media.down('xs')`
    `}
  `}
`;

export const GuideMainInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${({theme}) => css`
    ${theme.media.down('xs')`
    `}
  `}
`;
