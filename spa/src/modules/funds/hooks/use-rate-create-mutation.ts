import { useMutation } from 'react-query';
// import { toast } from 'react-toastify';
// services
import fundsApiService from 'modules/funds/services/funds-api.service';
import ApiService from 'modules/core/services/api-service';
// types
import type { CreateRateData } from 'modules/funds/types/funds-api.types';
import type { ApiError } from 'modules/core/types/api.types';

const apiService = new ApiService();

export const useRateCreateMutation = () => {
  return useMutation(
    (data: CreateRateData) => fundsApiService.createRate(data),
    {
      // onSuccess: () => {
      //   // todo: add better success message
      //   toast('Your choice is successful', { type: 'success' });
      // },
      onError: (error: ApiError) => {
        if (
          error.body.error === 'rate_info' ||
          error.body.error === 'standard_error'
        ) {
          apiService.showApiErrorToast(error);
        }
        // else{
        //   apiService.showApiErrorToast(error);
        // }
      },
    }
  );
};
