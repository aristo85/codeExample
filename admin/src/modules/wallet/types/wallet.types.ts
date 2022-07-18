export type WalletType = 'fiat' | 'crypto';

export type Wallet = {
  amount: string;
  hold: number;
  currency: string;
  user_uid: string;
  code: string;
  user: {
    email: string;
  };
  wallet_type: WalletType;
};
