import { Operation } from './operation.types';
import type {
  ListData,
  ListPaginationParams,
  ResourceObject,
} from 'modules/core/types/resource.types';

export type GetOperationTypeParams = ListPaginationParams;

export type GetOperationTypeResponse = ListData<ResourceObject<Operation>>;
