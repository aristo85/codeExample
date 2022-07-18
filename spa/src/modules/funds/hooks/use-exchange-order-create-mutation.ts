import { useMutation } from 'react-query';
// services
import fundsApiService from 'modules/funds/services/funds-api.service';
import ApiService from 'modules/core/services/api-service';
// types
import type { CreateExchangeOrderData } from 'modules/funds/types/funds-api.types';
import type { ApiError } from 'modules/core/types/api.types';

const apiService = new ApiService();

export const useExchangeOrderCreateMutation = () => {
  return useMutation(
    (data: CreateExchangeOrderData) =>
      fundsApiService.createExchangeOrder(data),
    {
      onError: (error: ApiError) => {
        apiService.showApiErrorToast(error, 'Unable to create exchange');
      },
    }
  );
};
