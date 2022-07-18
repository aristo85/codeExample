export type SendWalletFormValues = {
  destination: string;
  amount: string;
  description?: string;
};

export type SendWalletStep = 'form' | 'submit';
