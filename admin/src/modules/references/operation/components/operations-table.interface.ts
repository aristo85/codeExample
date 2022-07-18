import { PaginationProps } from 'modules/core/components/pagination/pagination.interface';
import { Operation } from '../types/operation.types';
// import { ResourceObject } from 'modules/core/types/resource.types';

export type OperationsListProps = {
  operations: Operation[];
  paginationProps?: PaginationProps;
  isLoading: boolean;
};
