import { useCurrencyListQuery } from './use-currency-list-query';
import { useMutation } from 'react-query';
// services
import currenciesApiService from '../services/currencies.api.service';
// types
import { UpdateCurrencyData } from '../types/currencies-api.types';

export const useCurrencyUpdateMutation = (code: string) => {
  const currencyListQuery = useCurrencyListQuery({
    page: 1,
    per_page: 10,
    q: { sorts: 'code asc' },
  });

  return useMutation(
    (data: UpdateCurrencyData) =>
      currenciesApiService.updateCUrrency(data, code),
    {
      onSuccess: () => {
        currencyListQuery.refetch();
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
