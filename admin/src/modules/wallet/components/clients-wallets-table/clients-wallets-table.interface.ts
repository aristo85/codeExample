import type { PaginationProps } from 'modules/core/components/pagination/pagination.interface';
import type { ResourceObject } from 'modules/core/types/resource.types';
import type { Wallet } from 'modules/wallet/types/wallet.types';

export type ClientsListProps = {
  wallets: ResourceObject<Wallet>[];
  paginationProps: PaginationProps;
};
