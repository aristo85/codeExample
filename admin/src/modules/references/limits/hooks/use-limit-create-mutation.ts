import { useMutation } from 'react-query';
// services
import ApiService from 'modules/core/services/api-service';
// types
import type { ApiError } from 'modules/core/types/api.types';
import { CreateLimitData } from '../types/limits-api.types';
import limitsApiService from '../services/limits.api.service';

const apiService = new ApiService();

export const useLimitCreateMutation = () => {
  const mutation = useMutation(
    (data: CreateLimitData) => limitsApiService.createLimit(data),
    {
      onError: (error: ApiError) => {
        apiService.showApiErrorToast(error, 'Unable to create limit');
      },
    }
  );

  return mutation;
};
