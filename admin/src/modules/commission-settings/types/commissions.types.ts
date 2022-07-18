// export type TransactionDirection = 'in' | 'out';

export type GroupCommission = {
  name: string;
  id: string;
};

export type Commission = {
  name: string;
  currency: string;
  transaction_type: string;
  direction: string;
  min_amount: number;
  fix_amount: number;
  percent: number;
  group: GroupCommission;
  description: string;
};
