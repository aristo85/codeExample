import type {
  FilterParams,
  ListData,
  ListPaginationParams,
  ResourceObject,
} from 'modules/core/types/resource.types';
import { Currency } from './currencies.types';

export type GetCurrenciesParams = ListPaginationParams & FilterParams;

export type GetCurrenciesResponse = ListData<ResourceObject<Currency>>;

export type CreateCurrencyResponse = ResourceObject<Currency>;

export type UpdateCurrencyData = Currency;

export type UpdateCurrencyResponse = ResourceObject<Currency>;
