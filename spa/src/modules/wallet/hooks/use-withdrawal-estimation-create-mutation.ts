import { useMutation } from 'react-query';
// services
import WalletApiService from 'modules/wallet/services/wallet-api.service';
import ApiService from 'modules/core/services/api-service';
// types
import type { CreateWithdrawalEstimationData } from 'modules/wallet/types/wallet-api.types';
import type { ApiError } from 'modules/core/types/api.types';

const apiService = new ApiService();
const walletApiService = new WalletApiService();

export const useWithdrawalEstimationCreateMutation = () => {
  const mutation = useMutation(
    (data: CreateWithdrawalEstimationData) =>
      walletApiService.createWithdrawalEstimation(data),
    {
      onError: (error: ApiError) => {
        apiService.showApiErrorToast(error);
      },
    }
  );

  return mutation;
};
