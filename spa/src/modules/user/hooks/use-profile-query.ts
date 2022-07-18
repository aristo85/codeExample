import { useQuery, UseQueryOptions } from 'react-query';
import { useRef } from 'react';
// services
import UserApiService from 'modules/user/services/user-api.service';
// types
import { GetProfileResponse } from 'modules/user/types/user-api.types';

const USER_PROFILE_CACHE_KEY = 'user_profile';

export const useProfileQuery = (
  options?: UseQueryOptions<GetProfileResponse>
) => {
  const userApiServiceRef = useRef(new UserApiService());

  const response = useQuery(
    USER_PROFILE_CACHE_KEY,
    async () => userApiServiceRef.current.getProfile(),
    options
  );

  return response;
};
