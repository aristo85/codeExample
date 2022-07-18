import { useQuery } from 'react-query';
import commissionsApiService from '../services/commissions-api.service';
// services
// types
import { GetCommissionParams } from '../types/commissions-api.types';

const COMMISSION_LIST_CACHE_KEY = 'commission_list';

export const useCommissionListQuery = (params: GetCommissionParams) => {
  return useQuery([COMMISSION_LIST_CACHE_KEY, params], () =>
    commissionsApiService.getCommissionList(params)
  );
};

export const getAllCommissions = (params: any) => {
  return commissionsApiService.getCommissionList(params);
};
