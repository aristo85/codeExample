import styled, {css} from 'styled-components';

export const PaymentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PaymentButtonBack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  width: 80px;
  color: ${({theme}) => theme.colors.primary};
`;

export const PaymentButtonBackTitle = styled.h3`
  color: ${({theme}) => theme.colors.primary};
  font-size: 20px;
  cursor: pointer;
`;

export const BreadcrumbsBlock = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({theme}) => theme.media.down('sm')`
    display: none;
    padding-bottom: 16px;
  `}
`;

export const TextInfo = styled.p`
  color: #4f4f4f;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  max-width: 460px;
  align-self: center;
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.body2};
  `}
`;
