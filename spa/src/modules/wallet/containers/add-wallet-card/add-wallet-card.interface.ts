import { ResourceObject } from 'modules/core/types/resource.types';
import { Wallet } from 'modules/wallet/types/wallet.types';

export type AddWalletFormValues = {
  currency: string | null;
};

export type AddWalletCardRef = {
  focus: () => void;
};

export type AddWalletCardProps = {
  walletTypeFilter: string;
  myWallets: ResourceObject<Wallet>[];
  forceRerender: () => void;
};
