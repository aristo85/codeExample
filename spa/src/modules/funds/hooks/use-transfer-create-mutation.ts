import { useMutation } from 'react-query';
// services
import ApiService from 'modules/core/services/api-service';
import fundsApiService from 'modules/funds/services/funds-api.service';
// types
import type { CreateTransferData } from 'modules/funds/types/funds-api.types';
import type { ApiError } from 'modules/core/types/api.types';

const apiService = new ApiService();

export const useTransferCreateMutation = () => {
  const mutation = useMutation(
    (data: CreateTransferData) => fundsApiService.transfer(data),
    {
      onError: (error: ApiError) => {
        apiService.showApiErrorToast(error, 'Unable to create transfer');
      },
    }
  );

  return mutation;
};
