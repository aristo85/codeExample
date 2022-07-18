import { useQuery } from 'react-query';
// services
import countriesApiService from '../services/countries-api.service';
// types
import { GetCountriesParams } from '../types/coutries-api.types';

const COUNTRY_LIST_CACHE_KEY = 'country_list';
const ALL_COUNTRY_CACHE_KEY = 'all_country_list';

export const useCountryListQuery = (params: GetCountriesParams) => {
  return useQuery([COUNTRY_LIST_CACHE_KEY, params], () =>
    countriesApiService.getCountriesList(params)
  );
};

export const getAllCountries = (params: any) => {
  return countriesApiService.getCountriesList(params);
};

export const useAllCountriesQuery = (params: GetCountriesParams) => {
  return useQuery([ALL_COUNTRY_CACHE_KEY, params], () =>
    countriesApiService.getCountriesList(params)
  );
};
