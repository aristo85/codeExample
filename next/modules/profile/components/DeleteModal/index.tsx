import React from 'react';
import {ModalTitle} from '@/modules/auth/components/ModalAuth/styles';
import {
  ButtonsContainer,
  DeleteModal,
} from '@/modules/profile/components/DeleteModal/styles';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

export interface ChangePasswordProfileProps {
  closeButton: () => void;
  deleteAccount: () => void;
}
export const DeleteSubmitModal: React.FC<ChangePasswordProfileProps> = ({
  closeButton,
  deleteAccount,
}) => {
  return (
    <DeleteModal isOpen={true} onClose={closeButton}>
      <ModalTitle>Вы уверены, что хотите удалить аккаунт?</ModalTitle>
      <ButtonsContainer>
        <ButtonBasic onClick={closeButton}>Нет</ButtonBasic>
        <ButtonBasic dark onClick={deleteAccount}>
          Да
        </ButtonBasic>
      </ButtonsContainer>
    </DeleteModal>
  );
};
