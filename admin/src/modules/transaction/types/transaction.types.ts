export type TransactionDirection = 'in' | 'out';

export type TransactionStatus = string;

export type Transaction = {
  type: string;
  user_wallet_id: string;
  user_uid: string;
  amount: string;
  currency: string;
  direction: TransactionDirection;
  to_wallet_id: string;
  from_wallet_id: string;
  status: TransactionStatus;
  commission: string;
  commission_currency: string;
  session_uid: string;
  provider_commission_fix: string;
  provider_commission_min: string;
  provider_commission_rate: string;
  commission_rate: string;
  commission_min: string;
  commission_fix: string;
  provider_commission: string;
  provider_commission_currency: string;
  transaction_external_id: string;
  to_wallet_external_id: string;
  from_wallet_external_id: string;
  parent_transaction_id: string;
  source_service: string;
};
