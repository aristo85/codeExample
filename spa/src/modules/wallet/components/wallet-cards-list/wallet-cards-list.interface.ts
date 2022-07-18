import type { Wallet } from 'modules/wallet/types/wallet.types';
import type { ResourceObject } from '../../../core/types/resource.types';

export type WalletListProps = {
  wallets: ResourceObject<Wallet>[];
  walletTypeFilter: string;
  forceRerender: () => void;
};

export type WalletCardsListRef = {
  focusNewWalletCard: () => void;
};
