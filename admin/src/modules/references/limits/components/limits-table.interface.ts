import { OptionSelectionTypes } from 'modules/commission-settings/containers/commission-filter/commission-filter.interface';
import { PaginationProps } from 'modules/core/components/pagination/pagination.interface';
import { ResourceObject } from 'modules/core/types/resource.types';
import { Limit } from '../types/limits.types';

export type LimitsProps = {
  limits: ResourceObject<Limit>[];
  paginationProps: PaginationProps;
  isLoading: boolean;
  operationOptions: OptionSelectionTypes[];
  currencyOptions: OptionSelectionTypes[];
  groupOptions: OptionSelectionTypes[];
  forceRerender: () => void;
};
