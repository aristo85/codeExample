import { useQuery, UseQueryOptions } from 'react-query';
// services
import fundsApiService from 'modules/funds/services/funds-api.service';
// types
import type {
  GetCryptoPriceParams,
  GetCryptoPriceResponse,
} from '../types/funds-api.types';

export const CRYPTO_PRICE_CACHE_KEY = 'crypto_price';

export const useCryptoPriceQuery = (
  params: GetCryptoPriceParams,
  options?: UseQueryOptions<GetCryptoPriceResponse>
) => {
  return useQuery(
    [CRYPTO_PRICE_CACHE_KEY, params],
    async () => fundsApiService.getCryptoPrice(params),
    options
  );
};
