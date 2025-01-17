import ModalAuth from '@/modules/auth/components/ModalAuth';
import styled from 'styled-components';

export const BookingCancellationModalWrapper = styled(ModalAuth)``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  margin-top: 30px;
`;

export const ModalSubtitle = styled.h3`
  ${({theme}) => `
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight};
    font-size: ${theme.font.size.subtitle3};
    text-align: center;
    margin-top: 16px;
  `}
`;
