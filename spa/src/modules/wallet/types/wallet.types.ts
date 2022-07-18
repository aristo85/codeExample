export type WalletCurrency = 'USD' | 'RUB' | 'EUR' | 'BTC' | 'ETH' | 'TON';

export type WalletType = 'fiat' | 'crypto';

export type Wallet = {
  amount: string;
  hold: number;
  currency: WalletCurrency;
  user_uid: string;
  code: string;
  wallet_type: WalletType;
  convertation: Convertation;
  broxus_frozen: string;
};

export type WalletTypeInfo = {
  currency: WalletCurrency;
  popular: boolean;
  isToken: boolean;
};

export type Convertation = {
  currency: string;
  value: string;
};
