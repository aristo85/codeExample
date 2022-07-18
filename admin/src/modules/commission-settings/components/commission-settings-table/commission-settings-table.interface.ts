import { OptionSelectionTypes } from 'modules/commission-settings/containers/commission-filter/commission-filter.interface';
import { Commission } from 'modules/commission-settings/types/commissions.types';
import { PaginationProps } from 'modules/core/components/pagination/pagination.interface';
import { ResourceObject } from 'modules/core/types/resource.types';

export type CommissionSettingsListProps = {
  commissions: ResourceObject<Commission>[];
  paginationProps: PaginationProps;
  isLoading: boolean;
  operationOptions: OptionSelectionTypes[];
  currencyOptions: OptionSelectionTypes[];
  groupOptions: OptionSelectionTypes[];
  forceRerender: () => void;
};
