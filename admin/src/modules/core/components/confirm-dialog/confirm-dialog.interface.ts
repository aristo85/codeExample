export type ConfirmDialogVariant = 'danger';

export type ConfirmDialogProps = {
  variant: ConfirmDialogVariant;
  isActive: boolean;
  title: string;
  onClose: (isActive: boolean) => void;
  onSubmit?: () => void;
  onCancel?: () => void;
  description?: string;
  submitText?: string;
  cancelText?: string;
  focusOnAction?: 'cancel' | 'submit';
};
