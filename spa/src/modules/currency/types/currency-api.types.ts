import type {
  ListData,
  ListPaginationParams,
  ResourceObject,
} from 'modules/core/types/resource.types';
import type { Currency } from 'modules/currency/types/currency.types';

export type GetCurrencyListParams = ListPaginationParams;

export type GetCurrencyListResponse = ListData<ResourceObject<Currency>>;
