export type TransferFiatValues = {
  card: string;
  wallet: string;
  amount: number | null;
  amountUSD: number | null;
  commission: number;
  total: number;
  totalUSD: number;
};

export type SendByFiatStep = 'form' | 'submit' | 'fiatCard';
