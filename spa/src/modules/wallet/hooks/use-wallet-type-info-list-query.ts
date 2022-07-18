import { useQuery, UseQueryOptions } from 'react-query';
// services
import WalletApiService from 'modules/wallet/services/wallet-api.service';
// types
import { GetWalletTypeInfoListResponse } from 'modules/wallet/types/wallet-api.types';

const WALLET_TYPE_INFO_LIST_CACHE_KEY = 'wallet_type_info_list';

const walletApiService = new WalletApiService();

export const useWalletTypeInfoListQuery = (
  options?: UseQueryOptions<GetWalletTypeInfoListResponse>
) => {
  const response = useQuery(
    WALLET_TYPE_INFO_LIST_CACHE_KEY,
    async () => walletApiService.getWalletTypeInfoList(),
    { staleTime: Infinity, ...options }
  );

  return response;
};
