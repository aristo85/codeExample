import { useQuery } from 'react-query';
// services
import walletApiService from 'modules/wallet/services/wallet-api.service';
// types
import type { GetWalletListParams } from 'modules/wallet/types/wallet-api.types';

const WALLET_LIST_CACHE_KEY = 'wallet_list';

export const useWalletListQuery = (params: GetWalletListParams) => {
  return useQuery([WALLET_LIST_CACHE_KEY, params], () =>
    walletApiService.getWalletList(params)
  );
};

export const getAllWallets = (params: any) => {
  return walletApiService.getWalletList(params);
};
