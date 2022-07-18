export type TransferFundsFormValues = {
  email: string;
  wallet: string | null;
  amount: number;
  description?: string;
  fee: number;
  total: number;
  value: string;
  paymentSystem: string;
  invoice_number: string;
};

export type TransferFundsFormProps = {
  onSubmit: (data: TransferFundsFormValues) => void;
};

export type TransferFundsSystemProps = {
  onSubmit: (data: TransferFundsFormValues) => void;
  step: string;
};
