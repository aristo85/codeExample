import React, { forwardRef, useImperativeHandle, useRef } from 'react';
// components
import WalletCard from 'modules/wallet/components/wallet-card';
// containers
import AddWalletCard from 'modules/wallet/containers/add-wallet-card';
// types
import type { AddWalletCardRef } from 'modules/wallet/containers/add-wallet-card/add-wallet-card.interface';

import type {
  WalletListProps,
  WalletCardsListRef,
} from './wallet-cards-list.interface';
import { Root } from './wallet-cards-list.styled';

const WalletCardsList = forwardRef<WalletCardsListRef, WalletListProps>(
  ({ wallets, walletTypeFilter, forceRerender }, ref) => {
    const addWalletCardRef = useRef<AddWalletCardRef>(null);

    useImperativeHandle(ref, () => ({
      focusNewWalletCard: () => addWalletCardRef.current?.focus(),
    }));

    return (
      <Root>
        {wallets
          .sort((a: any, b: any) => a.convertation.value - b.convertation.value)
          .reverse()
          .map((wallet) => (
            <WalletCard key={wallet.id} wallet={wallet} />
          ))}
        <AddWalletCard
          ref={addWalletCardRef}
          walletTypeFilter={walletTypeFilter}
          myWallets={wallets}
          forceRerender={forceRerender}
        />
      </Root>
    );
  }
);

export default WalletCardsList;
