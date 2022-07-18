import { OptionSelectionTypes } from 'modules/commission-settings/containers/commission-filter/commission-filter.interface';
import type { ResourceObject } from 'modules/core/types/resource.types';
import { Limit } from '../../types/limits.types';

export type NewLimitValues = {
  name: string;
  currency: string;
  limit_type: string;
  transaction_type: string;
  period: string;
  count: number;
  min_amount: string;
  max_amount: string;
  user_group_id: string;
};

export type LimitEditProps = {
  limit: ResourceObject<Limit>;
  onClose: () => void;
  operationOptions: OptionSelectionTypes[];
  currencyOptions: OptionSelectionTypes[];
  groupOptions: OptionSelectionTypes[];
  forceRerender?: () => void;
};
