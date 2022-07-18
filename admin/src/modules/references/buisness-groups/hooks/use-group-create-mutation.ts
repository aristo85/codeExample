import { useMutation } from 'react-query';
// services
import ApiService from 'modules/core/services/api-service';
// import currenciesApiService from '../services/currencies.api.service';
// types
import type { ApiError } from 'modules/core/types/api.types';
import { NewGroupValues } from '../containers/create-new-group/create-new-grpup.interface';
import groupsApiService from '../services/groups.api.service';

const apiService = new ApiService();

export const useGroupCreateMutation = () => {
  const mutation = useMutation(
    (data: NewGroupValues) => groupsApiService.createGroup(data),
    {
      onError: (error: ApiError) => {
        apiService.showApiErrorToast(error, 'Unable to create transfer');
      },
    }
  );

  return mutation;
};
