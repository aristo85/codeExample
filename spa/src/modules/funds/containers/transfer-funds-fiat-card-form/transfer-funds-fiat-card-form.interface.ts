export type TransferFundsFiatCardFormValues = {
  wallet: string | null;
  amount: number;
  total: number;
  value: string;
  paymentSystem: string;
};

export type TransferFundsFiatCardFormProps = {
  onSubmit: (data: TransferFundsFiatCardFormValues) => void;
};
