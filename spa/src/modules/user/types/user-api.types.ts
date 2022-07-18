import type { ResourceObject } from 'modules/core/types/resource.types';
import type { Avatar, User, UserField } from 'modules/user/types/user.types';

export type GetProfileResponse = {
  kyc: {
    review_status: string;
    verified: boolean;
  };
  user: ResourceObject<User>;
  fields: ResourceObject<UserField>[];
  avatar: Avatar;
};

export type UpdateProfileData = {
  email: string;
  is_company: boolean;
  fields: {
    user_field_id: string;
    value: any;
  }[];
};

export type UpdateProfileAvatar = {
  avatar: File;
};

export type UpdateProfileCurrencyData = {
  email: string;
  currency: string;
};
