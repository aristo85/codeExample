import type { ResourceId } from 'modules/core/types/resource.types';

export type CreateTransferData = {
  from_user_uid: ResourceId;
  to_user_email: string;
  currency: string;
  amount: number;
  description: string;
  session_uid: string;
};

export type CreateTransferResponse = unknown;

export type CreateRateData = {
  user_uid: string;
  from_currency: string;
  to_currency: string;
  from_value: string;
  session_uid: string;
};

export type CreateRateResponse = {
  from: string;
  form_value: string;
  rate: string;
  to: string;
  to_value: string;
};

export type CreateExchangeOrderData = {
  user_uid: string;
  from_currency: string;
  to_currency: string;
  from_value: string;
  session_uid: string;
};

export type CreateExchangeOrderResponse = {
  user_uid: string;
  from_currency: string;
  to_currency: string;
  from_value: string;
  session_uid: string;
  withdraw_transaction_id: string;
  deposit_transaction_id: string;
};

export type GetCryptoPriceParams = {
  currency: string;
  currency_target: string;
};

export type GetCryptoPriceResponse = {
  price: string;
};

export type GetCommissionParams = {
  currency: string;
  // user_uid: string;
  transaction_type: string;
  amount: string;
  direction: string;
};

export type GetCommissionResponse = {
  commission: string;
};

export type CreateLinkToPaycosData = {
  email: string;
  currency: string;
  target_currency: string;
  quantity: string;
  amount: number;
  product: string;
  redirect_success_url: string;
  redirect_fail_url: string;
};

export type CreateLinkToPaycosResponse = {
  payment_url: string;
};

export type CreateSellCurrencyToFiatData = {
  email: string;
  currency: string;
  target_currency: string;
  quantity: string;
  amount: number;
  card: string;
  redirect_success_url: string;
  redirect_fail_url: string;
};

export type CreateSellCurrencyToFiatResponse = {
  waiting_url: string;
};

export type GetExchangePairsResponse = {
  base: string;
  counter: string;
  min: string;
  max: string;
  base_scale: number;
  counter_scale: number;
};
