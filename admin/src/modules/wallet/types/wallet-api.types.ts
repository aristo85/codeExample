import type {
  ResourceObject,
  ListData,
  ListPaginationParams,
  FilterParams,
} from 'modules/core/types/resource.types';
import type { Wallet } from 'modules/wallet/types/wallet.types';

export type GetWalletListParams = ListPaginationParams & FilterParams;

export type GetWalletListResponse = ListData<ResourceObject<Wallet>>;
