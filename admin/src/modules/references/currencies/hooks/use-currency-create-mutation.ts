import { useMutation } from 'react-query';
// services
import ApiService from 'modules/core/services/api-service';
import currenciesApiService from '../services/currencies.api.service';
// types
import type { ApiError } from 'modules/core/types/api.types';
import { Currency } from '../types/currencies.types';

const apiService = new ApiService();

export const useCurrencyCreateMutation = () => {
  const mutation = useMutation(
    (data: Currency) => currenciesApiService.createCurrency(data),
    {
      onError: (error: ApiError) => {
        apiService.showApiErrorToast(error, 'Unable to create transfer');
      },
    }
  );

  return mutation;
};
