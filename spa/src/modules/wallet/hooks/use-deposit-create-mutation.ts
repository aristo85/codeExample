import { useMutation } from 'react-query';
// services
import WalletApiService from 'modules/wallet/services/wallet-api.service';
import ApiService from 'modules/core/services/api-service';
// types
import type { CreateDepositData } from 'modules/wallet/types/wallet-api.types';
import type { ApiError } from 'modules/core/types/api.types';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';

const apiService = new ApiService();
const walletApiService = new WalletApiService();

export const useDepositCreateMutation = () => {
  const { t } = useLocalization();

  const mutation = useMutation(
    (data: CreateDepositData) => walletApiService.createDeposit(data),
    {
      onError: (error: ApiError) => {
        apiService.showApiErrorToast(error, t('MODALS.BALANCE.CANT_GET'));
      },
    }
  );

  return mutation;
};
