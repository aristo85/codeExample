import { AddWalletCardRef } from 'modules/wallet/containers/add-wallet-card/add-wallet-card.interface';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import {
  WalletCardsListRef,
  WalletListProps,
} from '../wallet-cards-list/wallet-cards-list.interface';
// import { Root } from '../wallet-cards-list/wallet-cards-list.styled';
import WalletTable from 'modules/wallet/components/wallet-table/wallet-table';
import { RootListView } from './wallet-table.styled';
import AddWalletTable from './add-wallet';

const WalletTableList = forwardRef<WalletCardsListRef, WalletListProps>(
  ({ wallets, forceRerender }, ref) => {
    const addWalletCardRef = useRef<AddWalletCardRef>(null);

    useImperativeHandle(ref, () => ({
      focusNewWalletCard: () => addWalletCardRef.current?.focus(),
    }));

    return (
      <RootListView>
        <WalletTable
          wallets={wallets
            .sort(
              (a: any, b: any) => a.convertation.value - b.convertation.value
            )
            .reverse()}
        />
        <AddWalletTable
          ref={addWalletCardRef}
          myWallets={wallets}
          forceRerender={forceRerender}
        />
      </RootListView>
    );
  }
);

export default WalletTableList;
