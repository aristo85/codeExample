import styled from 'styled-components';
import CheckMark from '@/modules/core/components/icons/CheckMark';

export const DataTermsAndPrivacyPolicyBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  border-radius: 32px;
  ${({theme}) => `
    border: 2px solid ${theme.colors.secondary};
  `};
`;

export const InfoBlock = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  grid-column-gap: 15px;
  grid-row-gap: 4px;
  grid-row: 2;
`;

export const CheckMarkContainer = styled(CheckMark)`
  align-self: center;
`;

export const InfoBlockTitle = styled.h3`
  white-space: nowrap;
  grid-column: 2;
  ${({theme}) => `
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
  `};
`;

export const InfoBlockDescription = styled.h4`
  grid-column: 2;
  ${({theme}) => `
    color: ${theme.colors.secondary};
    font-size: ${theme.font.size.body3};
    font-weight: ${theme.font.weight.regular};
  `};
`;
