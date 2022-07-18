export type AddFiatValues = {
  wallet: string;
  amount: number | null;
  commission: number;
  total: number;
};

export type GetByFiatStep = 'form' | 'submit' | 'fiatCard';
