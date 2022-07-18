import { useMutation, useQueryClient } from 'react-query';
// services
import WalletApiService from 'modules/wallet/services/wallet-api.service';
import ApiService from 'modules/core/services/api-service';
// types
import type { CreateWalletData } from 'modules/wallet/types/wallet-api.types';
import type { ApiError } from 'modules/core/types/api.types';
// keys
import { WALLET_LIST_CACHE_KEY } from 'modules/wallet/hooks/use-wallet-list-query';

const apiService = new ApiService();
const walletApiService = new WalletApiService();

export const useWalletCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (data: CreateWalletData) => walletApiService.createWallet(data),
    {
      onError: (error: ApiError) => {
        apiService.showApiErrorToast(error);
      },
      onSuccess: () => {
        queryClient.refetchQueries(WALLET_LIST_CACHE_KEY);
      },
    }
  );
};
