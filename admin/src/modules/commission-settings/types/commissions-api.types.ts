import { Commission } from './commissions.types';
import type {
  FilterParams,
  ListData,
  ListPaginationParams,
  ResourceObject,
} from 'modules/core/types/resource.types';

export type GetCommissionParams = ListPaginationParams & FilterParams;

export type GetCommissionsResponse = ListData<ResourceObject<Commission>>;

export type CreateCommissionData = {
  currency: string;
  transaction_type: string;
  min_amount: number;
  fix_amount: number;
  percent: number;
  user_group_id: string;
  description: string;
};

export type CreateCommissionResponse = ResourceObject<Commission>;

export type UpdateCommissionData = {
  currency: string;
  transaction_type: string;
  min_amount: number;
  fix_amount: number;
  percent: number;
  user_group_id: string;
  description: string;
};
