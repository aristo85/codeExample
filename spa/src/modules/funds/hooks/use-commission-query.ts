import { useQuery, UseQueryOptions } from 'react-query';
// services
import fundsApiService from 'modules/funds/services/funds-api.service';
// types
import type {
  GetCommissionParams,
  GetCommissionResponse,
} from '../types/funds-api.types';

export const GET_COMMISSION_CACHE_KEY = 'get_commission';

export const useCommissionQuery = (
  params: GetCommissionParams,
  options?: UseQueryOptions<GetCommissionResponse>
) => {
  return useQuery(
    [GET_COMMISSION_CACHE_KEY, params],
    async () => fundsApiService.getCommission(params),
    { ...options, enabled: false }
  );
};
