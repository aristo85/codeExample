import React from 'react';
import {Modal} from '@mui/material';
import {
  CloseBtn,
  ModalContent,
  ModalHeaderBlock,
  ModalHeaderTitle,
} from './styles';
import {
  franklinGothicBook,
  franklinGothicMedium,
} from '@/modules/core/containers/AppLayout';
import useOverflowControl from '@/modules/core/hooks/useOverflowControl';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const AmenitiesModal: React.FC<Props> = ({isOpen, onClose, children}) => {
  useOverflowControl(isOpen);

  return (
    <Modal
      className={`${franklinGothicMedium.variable} 
      ${franklinGothicBook.variable}`}
      disableEnforceFocus
      disableAutoFocus
      open={isOpen}
      aria-labelledby="amenities-modal"
      aria-describedby="amenities-modal-description">
      <ModalContent>
        <ModalHeaderBlock>
          <ModalHeaderTitle>Удобства в номере</ModalHeaderTitle>
          <CloseBtn onClick={onClose} />
        </ModalHeaderBlock>
        {children}
      </ModalContent>
    </Modal>
  );
};

export default AmenitiesModal;
