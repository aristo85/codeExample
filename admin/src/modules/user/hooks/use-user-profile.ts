import { useQuery } from 'react-query';
// services
import userApiService from 'modules/user/services/user-api.service';
// types
import type { ResourceId } from 'modules/core/types/resource.types';

export const USER_PROFILE_CACHE_KEY = 'user_profile';

export const useUserProfile = (idUser: ResourceId) => {
  return useQuery([USER_PROFILE_CACHE_KEY, idUser], async () => {
    const response = await userApiService.getUser(idUser);

    return response;
  });
};
