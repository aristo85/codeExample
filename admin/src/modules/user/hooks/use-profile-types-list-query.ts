import { useQuery } from 'react-query';
// services
import userApiService from 'modules/user/services/user-api.service';

const USER_TYPES_LIST_CACHE_KEY = 'profile_types_list';

export const useUserTypesListQuery = () => {
  return useQuery(
    USER_TYPES_LIST_CACHE_KEY,
    () => userApiService.getUserTypesList(),
    { staleTime: Infinity }
  );
};
  