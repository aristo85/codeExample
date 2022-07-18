import type { User } from 'modules/user/types/user.types';

export type ClientDetailsProps = {
  profile: User;
  isLoading: boolean;
};
