export type TransferOtherSystemValues = {
  destination: string;
  amount: number;
  fee: number;
  total: number;
  description?: string;
};

export type SendByOtherSystemStep = 'form' | 'submit';

export type TransferOtherSystemFormProps = {
  paymentSystem: string;
};
