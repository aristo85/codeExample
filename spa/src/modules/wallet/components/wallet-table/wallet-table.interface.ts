import type { Wallet } from 'modules/wallet/types/wallet.types';
import type { ResourceObject } from 'modules/core/types/resource.types';

export type WalletTableProps = {
  wallets: ResourceObject<Wallet>[];
};

export type WalletTableRef = {
  focusNewWalletCard: () => void;
};

export type AddWalletTableRef = {
  focus: () => void;
};

export type AddWalletTableProps = {
  forceRerender: () => void;
  // walletTypeFilter: string;
  myWallets: ResourceObject<Wallet>[];
};
