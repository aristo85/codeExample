import { useRef } from 'react';
import { useQuery, UseQueryOptions } from 'react-query';
// services
import WalletApiService from 'modules/wallet/services/wallet-api.service';
// types
import type {
  GetWalletListParams,
  GetWalletListResponse,
} from 'modules/wallet/types/wallet-api.types';

export const WALLET_LIST_CACHE_KEY = 'wallet_list';
export const WALLET_ALL_LIST_CACHE_KEY = 'wallet_all_list';

export const useWalletListQuery = (
  params: GetWalletListParams,
  options?: UseQueryOptions<GetWalletListResponse>
) => {
  const walletApiServiceRef = useRef(new WalletApiService());

  return useQuery(
    WALLET_LIST_CACHE_KEY,
    async () => walletApiServiceRef.current.getWalletList(params),
    options
  );
};

export const useAllWalletListQuery = (
  params: GetWalletListParams,
  options?: UseQueryOptions<GetWalletListResponse>
) => {
  const walletApiServiceRef = useRef(new WalletApiService());

  return useQuery(
    WALLET_ALL_LIST_CACHE_KEY,
    async () => walletApiServiceRef.current.getWalletList(params),
    options
  );
};
