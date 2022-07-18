import type { Wallet } from 'modules/wallet/types/wallet.types';
import type { ResourceObject } from 'modules/core/types/resource.types';

export type WalletLinkProps = {
  wallet: ResourceObject<Wallet>;
};
