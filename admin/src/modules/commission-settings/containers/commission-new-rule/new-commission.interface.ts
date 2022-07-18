import type { StylizationProps } from 'modules/core/types/stylization.types';
import type { ResourceId } from 'modules/core/types/resource.types';

export type NewCommissionValues = {
  name: string;
  currency: string;
  transaction_type: string;
  direction: string;
  min_amount: number;
  fix_amount: number;
  percent: number;
  user_group_id: string;
  description: string;
};

export type NewCommissionProps = {
  commissionId?: ResourceId;
  onApply?: (value?: NewCommissionValues) => void;
  onCancel?: () => void;
} & StylizationProps;
