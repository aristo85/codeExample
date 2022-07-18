import { PaginationProps } from 'modules/core/components/pagination/pagination.interface';
import { ResourceObject } from 'modules/core/types/resource.types';
import { Group } from '../types/groups.types';

export type GroupsPropsListProps = {
  groups: ResourceObject<Group>[];
  paginationProps: PaginationProps;
  isLoading: boolean;
  forceRerender: () => void;
};
