import { PaginationProps } from 'modules/core/components/pagination/pagination.interface';
import { ResourceObject } from 'modules/core/types/resource.types';
import { Currency } from '../../types/currencies.types';

export type ReferenceCurrenciesListProps = {
  currencies: ResourceObject<Currency>[];
  paginationProps: PaginationProps;
  isLoading: boolean;
  forceRerender: () => void;
};
