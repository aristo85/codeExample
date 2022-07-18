import { useQuery } from 'react-query';
// services
import userApiService from 'modules/user/services/user-api.service';
// types

const USER_PROFILE_CACHE_KEY = 'own_profile';

export const useProfileQuery = () => {
  return useQuery(USER_PROFILE_CACHE_KEY, async () => {
    return userApiService.getProfile();
  });
};
