import type {
  FilterParams,
  ListData,
  ListPaginationParams,
  ResourceObject,
} from 'modules/core/types/resource.types';
import { Limit } from './limits.types';

export type GetLimitsParams = ListPaginationParams & FilterParams;

export type GetLimitsResponse = ListData<ResourceObject<Limit>>;

export type CreateLimitData = {
  name: string;
  currency: string;
  limit_type: string;
  transaction_type: string;
  period: string;
  count: number;
  min_amount: string;
  max_amount: string;
  user_group_id: string;
};

export type CreateLimitResponse = ResourceObject<Limit>;

export type UpdateLimitData = {
  name: string;
  currency: string;
  limit_type: string;
  transaction_type: string;
  period: string;
  count: number;
  min_amount: string;
  max_amount: string;
  user_group_id: string;
};

export type UpdateLimitResponse = ResourceObject<Limit>;
