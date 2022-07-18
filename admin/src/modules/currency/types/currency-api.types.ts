import type { Currency } from 'modules/currency/types/currency.types';
import type {
  ListData,
  ListPaginationParams,
  ResourceObject,
} from 'modules/core/types/resource.types';

export type GetCurrenciesParams = ListPaginationParams;

export type GetCurrenciesResponse = ListData<ResourceObject<Currency>>;
