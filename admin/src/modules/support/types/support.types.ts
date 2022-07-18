// export type TransactionDirection = 'in' | 'out';

export type Comment = {
  id: string;
  issue_id: string;
  user_uid: string;
  message: string;
  created_at: number;
  updated_at: number;
};

export type Support = {
  id: string;
  name: string;
  description: string;
  status: string;
  user_uid: string;
  created_at: number;
  updated_at: number;
  comments: Comment[];
};
