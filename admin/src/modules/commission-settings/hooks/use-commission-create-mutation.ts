import { useMutation } from 'react-query';
// services
import ApiService from 'modules/core/services/api-service';
// types
import type { ApiError } from 'modules/core/types/api.types';
import commissionsApiService from '../services/commissions-api.service';
import { CreateCommissionData } from '../types/commissions-api.types';

const apiService = new ApiService();

export const useCommissionCreateMutation = () => {
  const mutation = useMutation(
    (data: CreateCommissionData) =>
      commissionsApiService.createCommission(data),
    {
      onError: (error: ApiError) => {
        apiService.showApiErrorToast(error, 'Unable to create commission');
      },
    }
  );

  return mutation;
};
