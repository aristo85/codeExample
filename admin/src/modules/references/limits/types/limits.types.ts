export type limitGroup = {
  id: string;
  name: string;
};

export type Limit = {
  name: string;
  currency: string;
  limit_type: string;
  transaction_type: string;
  period: string;
  count: number;
  min_amount: string;
  max_amount: string;
  user_group_id: string;
  group: limitGroup;
};
