import { FC, useCallback } from 'react';
// components
import Icon from 'modules/core/components/icon';

import type { ModalProps } from './modal.interface';
import { Root, Content, Shadow, CloseButton, Title } from './modal.styled';

const Modal: FC<ModalProps> = ({ isOpen, onClose, title, style, children }) => {
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <Root>
      <Content style={style?.content}>
        {!!title && <Title>{title}</Title>}
        {children}
        <CloseButton onClick={handleClose}>
          <Icon name='close' />
        </CloseButton>
      </Content>
      <Shadow onClick={handleClose} />
    </Root>
  );
};

export default Modal;
