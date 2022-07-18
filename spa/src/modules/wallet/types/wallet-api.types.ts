import type {
  ListData,
  ListPaginationParams,
  ResourceObject,
} from 'modules/core/types/resource.types';
import type { Wallet, WalletTypeInfo } from 'modules/wallet/types/wallet.types';
import type { WithdrawalEstimation } from 'modules/wallet/types/withdrawal.types';

export type GetWalletListParams = ListPaginationParams;

export type GetWalletListResponse = ListData<ResourceObject<Wallet>>;

export type GetWalletTypeInfoListResponse = WalletTypeInfo[];

export type CreateWithdrawalEstimationData = {
  amount: string;
  wallet_id: string;
};

export type CreateWithdrawalEstimationResponse = WithdrawalEstimation;

export type CreateWithdrawalData = {
  wallet_id: string;
  amount: string;
  description: string;
  address: string;
};

export type CreateWithdrawalResponse = {
  transaction_id: string;
};

export type CreateDepositData = {
  wallet_id: string;
};

export type CreateDepositResponse = {
  blockchain_address: string;
};

export type CreateWalletData = {
  currency: string;
  wallet_type: string;
};

export type GetTotalBalance = {
  currency: string;
  value: string;
};

export type CreateWalletResponse = ResourceObject<Wallet>;
