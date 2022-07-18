import type { CSSProperties } from 'react';

export type ModalContentStyle = Pick<
  CSSProperties,
  'minWidth' | 'minHeight' | 'paddingTop' | 'paddingBottom'
>;

export type ModalStyle = {
  content?: ModalContentStyle;
};

export type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  style?: ModalStyle;
};
