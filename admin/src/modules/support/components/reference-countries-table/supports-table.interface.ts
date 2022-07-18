import { PaginationProps } from 'modules/core/components/pagination/pagination.interface';
import { ResourceObject } from 'modules/core/types/resource.types';
import { Support } from '../../types/support.types';

export type SupportListProps = {
  supports: ResourceObject<Support>[];
  paginationProps: PaginationProps;
  isLoading: boolean;
  forceRerender: () => void;
};
