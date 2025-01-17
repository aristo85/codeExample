import React, {FC} from 'react';

import {createPortal} from 'react-dom';
import {Backdrop, ModalBody} from '@/modules/core/components/CustomModal/style';
import useOverflowControl from '@/modules/core/hooks/useOverflowControl';
interface CustomModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}
const CustomModal: FC<CustomModalProps> = ({children, isOpen}) => {
  const customModalPortal = document.getElementById('custom-modal')!;
  useOverflowControl(isOpen);

  if (!isOpen) return null;

  return createPortal(
    <Backdrop>
      <ModalBody>{children}</ModalBody>
    </Backdrop>,
    customModalPortal,
  );
};

export default CustomModal;
