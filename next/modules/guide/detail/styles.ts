import styled, {css} from 'styled-components';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

export const DetailGuideWrapper = styled.div`
  ${({theme}) => css`
    align-items: flex-start;
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
    gap: 24px;
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

export const GuideTitle = styled.h3`
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.subtitle1};
    ${theme.media.down('xs')`
    `};
  `}
`;

export const GuideValue = styled.h4`
  ${({theme}) => css`
    color: #4f4f4f;
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.body2};
    ${theme.media.down('xs')`
    `};
  `}
`;

export const GuideBookingButton = styled(ButtonBasic)`
  ${({theme}) => css`
    height: 63px;
    width: auto;
    ${theme.media.down('md')`
      
    `};
    ${theme.media.down('xs')`
    width: 100%;
    `};
  `}
`;

export const InformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InformationBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const GuideHeaderContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 24px;
    justify-content: space-between;
    ${theme.media.down('xs')`
      flex-direction:column;
    `};
  `}
`;
