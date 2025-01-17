import styled, {css} from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import ArrowSelectUp from '@/modules/core/components/icons/ArrowSelectUp';

export const BookingCardWrapper = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  border: 1px solid #c8c8c8;
  border-radius: 32px;
  padding: 16px 16px 80px 16px;
  cursor: pointer;

  position: relative;
  min-height: 348px;
  max-height: 400px;
  ${({theme}) => theme.media.down('sm')`
    flex-direction: column;
    border-radius: 16px;
    padding: 16px;
    min-height: 361px;
    max-height: unset;
  `}
`;

export const BookingCardImageBlock = styled.div`
  width: 100%;
  min-width: 160px;
  max-width: 260px;
  aspect-ratio: 1;
  position: relative;
  display: block;
  align-items: center;

  ${({theme}) => theme.media.down('sm')`
    height: 156px;
    width: 100%;
    max-width: 100%;
  `}
`;

export const BookingCardImage = styled(Image)`
  border-radius: 32px;
  object-fit: cover;

  ${({theme}) => theme.media.down('sm')`
    border-radius: 16px;
  `}
`;

export const BookingCardInformationBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({theme}) => theme.media.down('sm')`
    height: unset 
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: inherit;
`;

export const DividingLine = styled.span`
  height: 2px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const BookingPriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BookingPrice = styled.h3`
  ${({theme}) => css`
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
  `};
`;

export const BookingHighlightedPrice = styled.span`
  padding: 0 4px;
  ${({theme}) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.font.family.gothicMedium};
  `};
`;

export const BookingAdditionalData = styled.h3`
  ${({theme}) => `
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicBook};
  `};
`;

export const BookingDescription = styled.p<{lines?: number}>`
  white-space: pre-line;
  ${({theme}) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicBook};
  `};

  display: -webkit-box;
  -webkit-line-clamp: ${props => props.lines || 1};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BookingButtonLink = styled(Link)`
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  float: right;
  padding: 8px 16px;
  width: fit-content;
  height: 40px;
  gap: 8px;

  ${({theme}) => theme.media.up('sm')`
    position: absolute;
    bottom: 16px;
    right: 16px;
  `}

  ${({theme}) => css`
    &:hover {
      background: #c6e1f3;
      color: #1d7abd;
    }
    color: ${theme.colors.white};
    font-size: ${theme.font.size.body2};
    background: ${theme.colors.primary};
    font-family: ${theme.font.family.gothicDemi};

    ${theme.media.down('sm')`
      width: 100%;
      font-size: ${theme.font.size.body1};
      font-family: ${theme.font.family.gothicMedium};
    `}
  `}
`;

export const CardArrowRight = styled(ArrowSelectUp)`
  transform: rotate(-90deg);
`;
