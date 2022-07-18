import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
// services
import WalletApiService from 'modules/wallet/services/wallet-api.service';
import ApiService from 'modules/core/services/api-service';
// types
import type { CreateWithdrawalData } from 'modules/wallet/types/wallet-api.types';
import type { ApiError } from 'modules/core/types/api.types';

const apiService = new ApiService();
const walletApiService = new WalletApiService();

export const useWithdrawalCreateMutation = () => {
  const mutation = useMutation(
    (data: CreateWithdrawalData) => walletApiService.createWithdrawal(data),
    {
      onSuccess: () => {
        // todo: add better success message
        toast('Success', { type: 'success' });
      },
      onError: (error: ApiError) => {
        apiService.showApiErrorToast(error);
      },
    }
  );

  return mutation;
};
