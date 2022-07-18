import type { ResourceObject } from 'modules/core/types/resource.types';

export type User = {
  user: ResourceObject<{
    id: string;
    email: string;
    created_at: number;
    updated_at: number;
    currency: string;
    is_company: boolean;
    status: 'blocked' | 'active';
  }>;
  group: {
    name: string;
    id: string;
  };
  kyc: {
    review_status: string;
    verified: boolean;
  };
  fields: UserField[];
};

export type UserField = {
  active: boolean;
  code: string;
  name: string;
  value: any;
};

export type KYCStatus = {
  review: string | null;
  verified: boolean | null;
};

export type Avatar = {
  url: string;
  thumb_url: string;
};
