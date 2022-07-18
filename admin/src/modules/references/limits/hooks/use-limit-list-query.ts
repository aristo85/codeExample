import { useQuery } from 'react-query';
import limitsApiService from '../services/limits.api.service';
// services
// types
import { GetLimitsParams } from './../types/limits-api.types';

const LIMIT_LIST_CACHE_KEY = 'limit_list';

export const useLimitListQuery = (params: GetLimitsParams) => {
  return useQuery([LIMIT_LIST_CACHE_KEY, params], () =>
    limitsApiService.getLimitsList(params)
  );
};

export const getAllLimits = (params: any) => {
  return limitsApiService.getLimitsList(params);
};
