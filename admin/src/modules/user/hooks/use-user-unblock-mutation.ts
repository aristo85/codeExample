import { useMutation, useQueryClient } from 'react-query';
// services
import userApiService from 'modules/user/services/user-api.service';
// keys
import { USER_PROFILE_CACHE_KEY } from 'modules/user/hooks/use-user-profile';

export const useUserUnblockMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((idUser: string) => userApiService.unblockUser(idUser), {
    onSuccess: () => {
      queryClient.refetchQueries(USER_PROFILE_CACHE_KEY);
    },
  });
};
