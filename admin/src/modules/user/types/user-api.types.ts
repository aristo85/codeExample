import type {
  FilterParams,
  ListData,
  ListPaginationParams,
  ResourceObject,
} from 'modules/core/types/resource.types';
import type { Avatar, User, UserField } from 'modules/user/types/user.types';

export type GetUserResponse = {
  kyc: {
    review_status: string;
    verified: boolean;
  };
  user: {
    id: string;
    email: string;
    created_at: number;
    updated_at: number;
    currency: string;
    is_company: boolean;
    status: 'blocked' | 'active';
  };
  fields: ResourceObject<UserField>[];
  group: {
    name: string;
    id: string;
  };
  avatar: Avatar;
};

export type UpdateUserData = {
  email: string;
  group_id: string;
  is_company: boolean;
  fields: {
    user_field_id: string;
    value: any;
  }[];
};

export type GetUsersParams = ListPaginationParams & FilterParams;

export type GetUsersResponse = ListData<User>;

export type GetOneUserResponse = ResourceObject<User>;

export type GetUsersTypesResponse = {
  types: string[];
};
