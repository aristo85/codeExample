import React, {FC} from 'react';
import {ModalTitle} from '@/modules/auth/components/ModalAuth/styles';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import {
  BookingCancellationModalWrapper,
  ButtonsContainer,
  ModalSubtitle,
} from './styles';
import {
  CurrencyEnum,
  currencyNameFormatter,
} from '@/modules/placement/constants';

export interface BookingCancellationModalProps {
  closeButton: () => void;
  cancelBooking: () => void;
  isOpen: boolean;
  penaltyAmount: number | null;
}
export const BookingCancellationModal: FC<BookingCancellationModalProps> = ({
  closeButton,
  cancelBooking,
  isOpen,
  penaltyAmount,
}) => {
  return (
    <BookingCancellationModalWrapper isOpen={isOpen} onClose={closeButton}>
      <ModalTitle>Вы уверены, что хотите отменить бронирование?</ModalTitle>
      {penaltyAmount ? (
        <ModalSubtitle>{`Сумма штрафа - ${penaltyAmount} ${currencyNameFormatter(
          penaltyAmount || 0,
          CurrencyEnum.rubles,
        )}`}</ModalSubtitle>
      ) : null}
      <ButtonsContainer>
        <ButtonBasic onClick={closeButton}>Нет</ButtonBasic>
        <ButtonBasic dark onClick={cancelBooking}>
          Да
        </ButtonBasic>
      </ButtonsContainer>
    </BookingCancellationModalWrapper>
  );
};
