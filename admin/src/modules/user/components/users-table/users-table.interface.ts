import type { User } from 'modules/user/types/user.types';
import type { PaginationProps } from 'modules/core/components/pagination/pagination.interface';

export type UsersListProps = {
  users: User[];
  paginationProps: PaginationProps;
  isLoading: boolean;
};
