import { useQuery } from 'react-query';
// services
import supportsApiService from '../services/supports-api.service';
// types
import { GetSupportsParams } from '../types/support-api.types';

const SUPPORT_LIST_CACHE_KEY = 'support_list';
const ALL_SUPPORT_CACHE_KEY = 'all_support_list';

export const useSupportListQuery = (params: GetSupportsParams) => {
  return useQuery([SUPPORT_LIST_CACHE_KEY, params], () =>
    supportsApiService.getSupportList(params)
  );
};

export const getAllSupports = (params: any) => {
  return supportsApiService.getSupportList(params);
};

export const useAllSupportsQuery = (params: GetSupportsParams) => {
  return useQuery([ALL_SUPPORT_CACHE_KEY, params], () =>
    supportsApiService.getSupportList(params)
  );
};
