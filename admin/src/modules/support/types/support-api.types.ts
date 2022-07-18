import { Support } from './support.types';
import type {
  FilterParams,
  ListData,
  ListPaginationParams,
  ResourceObject,
} from 'modules/core/types/resource.types';

export type GetSupportsParams = ListPaginationParams & FilterParams;

export type GetSupportsResponse = ListData<ResourceObject<Support>>;

export type UpdateSupportData = {
  status: string;
};
