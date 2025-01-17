import styled, {css} from 'styled-components';
import Image from 'next/image';
import ArrowSelectUp from '@/modules/core/components/icons/ArrowSelectUp';
import Link from 'next/link';

export const GuideCardWrapper = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;
  border: 1px solid #c8c8c8;
  padding: 16px;
  align-items: flex-start;
  border-radius: 32px;
  cursor: pointer;

  ${({theme}) => theme.media.down('sm')`
    flex-direction: column;
    border-radius: 16px;
  `}
`;

export const GuideCardImageBlock = styled.div`
  min-width: 220px;
  height: 220px;

  position: relative;
  display: block;
  align-items: center;

  ${({theme}) => theme.media.down('sm')`
    width: 100%;
  `}
`;

export const GuideCardImage = styled(Image)`
  height: 100%;
  border-radius: 32px;
  width: 100%;
  object-fit: cover;
  aspect-ratio: attr(width) / attr(height);
`;

export const MobileGuideImage = styled.div`
  min-width: 100px;
  height: 100px;
  position: relative;
  display: block;
  align-items: center;
`;

export const GuideMobileInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
`;

export const GuideCardInformationBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DividingLine = styled.span`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const GuidePriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const GuidePrice = styled.h3`
  ${({theme}) => css`
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `};
`;

export const HighlightedPrice = styled.span`
  padding: 0 4px;
  ${({theme}) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.font.family.gothicDemi};
  `};
`;

export const GuideAdditionalData = styled.h3`
  ${({theme}) => `
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    color: #4f4f4f;
    `};
`;

export const GuideDescription = styled.p`
  ${({theme}) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicBook};
  `};
`;

export const GuideButtonLink = styled.a`
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  padding: 6px 24px;
  height: 56px;
  border-radius: 16px;
  float: right;

  ${({theme}) => css`
    &:hover {
      background: #c6e1f3;
      color: #1d7abd;
    }
    color: ${theme.colors.white};
    font-size: ${theme.font.size.subtitle2};
    background: ${theme.colors.primary};
    font-family: ${theme.font.family.gothicDemi};

    ${theme.media.down('sm')`
      width: 100%;
    `}
  `}
`;

export const ArrowLeft = styled(ArrowSelectUp)`
  transform: rotate(-90deg);
`;

export const GuideName = styled.h2`
  display: flex;
  flex-direction: row;
  ${({theme}) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.heading2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `};
`;

export const GuideAge = styled.h2`
  ${({theme}) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.size.heading3};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
  `};
`;

export const GuideAddress = styled.h3`
  ${({theme}) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down('xs')`
        font-size: ${theme.font.size.subtitle2};
    `};
  `}
`;
