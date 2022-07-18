import { useQuery } from 'react-query';
// services
import countryApiService from 'modules/country/services/country-api.service';

const COUNTRY_LIST_CACHE_KEY = 'country_list';

export const useCountryListQuery = () => {
  return useQuery(
    COUNTRY_LIST_CACHE_KEY,
    () => countryApiService.getCountryList(),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );
};
