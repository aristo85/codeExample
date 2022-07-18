import { useMutation } from 'react-query';
// services
import userApiService from 'modules/user/services/user-api.service';
// types
import { UpdateUserData } from 'modules/user/types/user-api.types';
import { useUserProfile } from './use-user-profile';

export const useUserUpdateMutation = (id: string) => {
  const profile = useUserProfile(id);

  return useMutation(
    (data: UpdateUserData) => userApiService.updateUser(data, id),
    {
      onSuccess: () => {
        profile.refetch();
      },
    }
  );
};

// export const useUserUpdateMutation = () => {
//   return useMutation((data: UpdateUserData) =>
//     userApiService.updateUser(data)
//   );
// };
