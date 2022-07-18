import { Commission } from 'modules/commission-settings/types/commissions.types';
import { ResourceObject } from 'modules/core/types/resource.types';
import { OptionSelectionTypes } from '../commission-filter/commission-filter.interface';

export type CommissionProps = {
  commission: ResourceObject<Commission>;
  onClose: () => void;
  operationOptions: OptionSelectionTypes[];
  currencyOptions: OptionSelectionTypes[];
  groupOptions: OptionSelectionTypes[];
  forceRerender?: () => void;
};
