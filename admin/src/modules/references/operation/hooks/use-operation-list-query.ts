import { useQuery } from 'react-query';
// services
import operationsApiService from '../services/operation-api.service';
// types
import { GetOperationTypeParams } from '../types/operation-api.types';

const OPERATION_LIST_CACHE_KEY = 'operation_list';

export const useOperationListQuery = (params: GetOperationTypeParams) => {
  return useQuery([OPERATION_LIST_CACHE_KEY, params], () =>
    operationsApiService.getOperationsList(params)
  );
};
