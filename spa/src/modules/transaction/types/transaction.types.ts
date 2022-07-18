export type TransactionType =
  | 'deposit'
  | 'withdrawal'
  | 'transfer'
  | 'exchange';

export type TransactionDirection = 'in' | 'out';

export type TransactionStatus = string;

export type Transaction = {
  type: TransactionType;
  user_wallet_id: string;
  user_uid: string;
  amount: number;
  currency: string;
  direction: TransactionDirection;
  to_wallet_id: string;
  from_wallet_id: string;
  status: TransactionStatus;
  commission: number;
  commission_currency: string;
  session_uid: string;
};
