import React from 'react';
import {Modal} from '@mui/material';
import {
  franklinGothicBook,
  franklinGothicMedium,
} from '@/modules/core/containers/AppLayout';
import useOverflowControl from '@/modules/core/hooks/useOverflowControl';
import {
  BodyContent,
  CloseBtn,
  ModalContent,
  ModalHeaderBlock,
  ModalHeaderTitle,
} from './styles';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const MobileDetailModal: React.FC<Props> = ({isOpen, onClose, children}) => {
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
          <CloseBtn onClick={onClose} fill="#222121" />
          <ModalHeaderTitle>О номере</ModalHeaderTitle>
        </ModalHeaderBlock>
        <BodyContent>{children}</BodyContent>
      </ModalContent>
    </Modal>
  );
};

export default MobileDetailModal;
