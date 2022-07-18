import { Country } from './countries.types';
import type {
  FilterParams,
  ListData,
  ListPaginationParams,
  ResourceObject,
} from 'modules/core/types/resource.types';

export type GetCountriesParams = ListPaginationParams & FilterParams;

export type GetCountriesResponse = ListData<ResourceObject<Country>>;

export type UpdateCountryData = {
  is_blocked: boolean;
};
