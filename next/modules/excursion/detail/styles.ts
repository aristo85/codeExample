import styled, {css} from 'styled-components';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

export const DetailExcursionWrapper = styled.div`
  ${({theme}) => css`
    gap: 32px;
    position: relative;
    display: flex;
    flex-direction: column;
    ${theme.media.down('md')`
      gap: 16px;
    `};
    ${theme.media.down('xs')`
    `};
  `}
`;

export const DetailHeaderBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    gap: 32px;
    width: 100%;
    ${theme.media.down('md')`
      flex-direction:column;
      gap: 16px;
    `};
    ${theme.media.down('xs')`
      align-items:center;
    `};
  `}
`;

export const ExcursionName = styled.h2`
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.heading2};
    ${theme.media.down('xs')`
    `};
  `}
`;

export const ExcursionCalendarBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const ExcursionTitle = styled.h3`
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.subtitle1};
    ${theme.media.down('xs')`
    `};
  `}
`;

export const ExcursionValue = styled.p`
  ${({theme}) => css`
    color: #4f4f4f;
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.body2};
    ${theme.media.down('xs')`
    `};
  `}
`;

export const ExcursionBookingButton = styled(ButtonBasic)`
  height: 63px;
`;

export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InformationContainer = styled.div`
  ${({theme}) => css`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    ${theme.media.down('md')`
      grid-template-columns: 1fr 1fr;
    `};
    ${theme.media.down('xs')`
      grid-template-columns: 1fr;
    `};
  `}
`;

export const InformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BookingExcursionBlock = styled.div`
  ${({theme}) => css`
    border: 2px solid ${theme.colors.secondary};
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 24px;
    width: 100%;
    ${theme.media.down('md')`
      flex-direction: column;
      gap: 24px;
    `};
    ${theme.media.down('xs')`
    `};
  `}
`;

export const PriceBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
`;
