import { useQuery, UseQueryOptions } from 'react-query';
import { useRef } from 'react';
// services
import { GetTotalBalance } from '../types/wallet-api.types';
import walletApiService from '../services/wallet-api.service';
// types

const USER_TOTAL_BALANCE_CACHE_KEY = 'user_total_balance';

export const useTotalBalanceQuery = (
  options?: UseQueryOptions<GetTotalBalance>
) => {
  const walletApiServiceRef = useRef(new walletApiService());

  const response = useQuery(
    USER_TOTAL_BALANCE_CACHE_KEY,
    async () => walletApiServiceRef.current.getTotalBalance(),
    options
  );

  return response;
};
