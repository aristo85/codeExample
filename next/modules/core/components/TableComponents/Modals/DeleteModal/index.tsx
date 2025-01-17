import React from 'react';
import {ModalTitle} from '@/modules/auth/components/ModalAuth/styles';
import {ButtonsContainer, DeleteModalWrapper} from './styles';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

export interface DeleteModalProps {
  closeButtonFn: () => void;
  deletePlacementFn: () => void;
  deletingText: string;
}
export const DeleteModal: React.FC<DeleteModalProps> = ({
  closeButtonFn,
  deletePlacementFn,
  deletingText,
}) => {
  return (
    <DeleteModalWrapper isOpen={true} onClose={closeButtonFn}>
      <ModalTitle>{deletingText}</ModalTitle>
      <ButtonsContainer>
        <ButtonBasic onClick={closeButtonFn}>Нет</ButtonBasic>
        <ButtonBasic dark onClick={deletePlacementFn}>
          Да
        </ButtonBasic>
      </ButtonsContainer>
    </DeleteModalWrapper>
  );
};
