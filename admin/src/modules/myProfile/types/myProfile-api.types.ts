import { ResourceObject } from 'modules/core/types/resource.types';
import { Avatar, User, UserField } from 'modules/user/types/user.types';

export type GetProfileResponse = {
  kyc: {
    review_status: string;
    verified: boolean;
  };
  user: ResourceObject<User>;
  fields: ResourceObject<UserField>[];
  avatar: Avatar;
};
