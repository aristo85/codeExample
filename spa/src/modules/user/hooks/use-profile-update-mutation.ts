import { useMutation } from 'react-query';
// services
import UserApiService from 'modules/user/services/user-api.service';
import ApiService from 'modules/core/services/api-service';
// types
import {
  UpdateProfileData,
  UpdateProfileCurrencyData,
} from 'modules/user/types/user-api.types';
// import { ApiError } from './../../core/types/api.types';
import { useTotalBalanceQuery } from 'modules/wallet/hooks/use-balance-query';

const apiService = new ApiService();

const userApiService = new UserApiService();

export const useProfileUpdateMutation = () => {
  return useMutation((data: UpdateProfileData) =>
    userApiService.updateProfile(data)
  );
};

export const useProfileCurrencyUpdateMutation = () => {
  const queryBalance = useTotalBalanceQuery();

  return useMutation(
    (data: UpdateProfileCurrencyData) =>
      userApiService.updateProfileCurrency(data),
    {
      onSuccess: () => {
        queryBalance.refetch();
      },
    }
  );
};

export const useProfilePhotoUpdateMutation = () => {
  return useMutation((data: File) => userApiService.updatePhoto(data), {
    onError: (error: any) => {
      // from axios
      // console.log(error.response.data.message)
      apiService.showApiErrorToast(error, error?.response?.data?.message ?? '');
    },
  });
};
