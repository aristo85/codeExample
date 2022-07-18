import { useQuery } from 'react-query';
// services
import countryApiService from 'modules/country/services/country-api.service';

const CITY_LIST_CACHE_KEY = 'city_list';

export const useCityListByCountryNameQuery = (country: string | null) => {
  return useQuery(
    [CITY_LIST_CACHE_KEY, country],
    () => countryApiService.getCityListByCountryName(country ?? ''),
    { enabled: !!country }
  );
};
