// import { useCountryListQuery } from './use-country-list-query';
import { useMutation } from 'react-query';
// services
import countriesApiService from '../services/countries-api.service';
// types
import { UpdateCountryData } from '../types/coutries-api.types';

export const useCountryUpdateMutation = (code: string) => {
  // const countryList = useCountryListQuery({
  //   page: 1,
  //   per_page: 10,
  //   q: { sorts: 'name asc' },
  // });

  return useMutation(
    (data: UpdateCountryData) => countriesApiService.updateCountry(data, code),
    {
      onSuccess: () => {
        // countryList.refetch();
      },
    }
  );
};

// export const useProfileCurrencyUpdateMutation = () => {
//   const queryBalance = useTotalBalanceQuery();

//   return useMutation((data: UpdateProfileCurrencyData) =>
//     userApiService.updateProfileCurrency(data),{
//       onSuccess : () => {
//         queryBalance.refetch()
//       }
//     }
//   );
// };
