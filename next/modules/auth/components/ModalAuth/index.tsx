import React from 'react';
import {Modal} from '@mui/material';
import {CloseBtn, MainMobileLogo, ModalContent} from './styles';
import {franklinGothicMedium} from '@/modules/core/containers/AppLayout';
import useOverflowControl from '@/modules/core/hooks/useOverflowControl';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const ModalAuth: React.FC<Props> = ({isOpen, onClose, children}) => {
  useOverflowControl(isOpen);

  return (
    <Modal
      className={`${franklinGothicMedium.className}`}
      disableEnforceFocus
      disableAutoFocus
      open={isOpen}
      aria-labelledby="server-modal-title"
      aria-describedby="server-modal-description">
      <ModalContent>
        <CloseBtn onClick={onClose} />
        <MainMobileLogo />
        {children}
      </ModalContent>
    </Modal>
  );
};

export default ModalAuth;
