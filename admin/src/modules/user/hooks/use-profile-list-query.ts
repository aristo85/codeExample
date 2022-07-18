import { useQuery } from 'react-query';
// services
import userApiService from 'modules/user/services/user-api.service';
// types
import type { GetUsersParams } from 'modules/user/types/user-api.types';

const USER_LIST_CACHE_KEY = 'users_list';

export const useUsersListQuery = (data: GetUsersParams) => {
  return useQuery([USER_LIST_CACHE_KEY, data], () =>
    userApiService.getUsersList(data)
  );
};

export const getAllProfiles = (params: any) => {
  return userApiService.getUsersList(params);
};
