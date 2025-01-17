import styled, {css} from 'styled-components';
import {Swiper} from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
  padding-bottom: 40px;
  max-width: 100%;
  width: 100%;
  .swiper-pagination-bullets {
    position: absolute;
    bottom: 10px;
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #1d7abd;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border: 1px solid #c6e1f3;
  border-radius: 16px;
`;

export const InfoTitle = styled.h3`
  line-height: 22px;
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
  `}
`;

export const Price = styled.h2`
  line-height: 28px;
  margin-top: auto;
  ${({theme}) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `}
`;

export const CancellationText = styled.p`
  line-height: 18px;
  text-align: center;
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body3};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicBook};
  `}
`;

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
