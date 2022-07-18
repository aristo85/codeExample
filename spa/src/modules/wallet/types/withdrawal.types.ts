import type { WalletCurrency } from 'modules/wallet/types/wallet.types';

export type WithdrawalEstimation = {
  fee: string;
  amount: string;
  total: string;
  currency: WalletCurrency;
};
