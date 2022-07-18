import React, { FC, memo, useMemo, useRef, useState } from 'react';
// components
import WalletFilter from 'modules/wallet/components/wallet-filter';
import WalletCardsList from 'modules/wallet/components/wallet-cards-list';
import Spinner from 'modules/core/components/spinner';
import Button from 'modules/core/components/button';
import PageLayout from 'modules/core/components/page-layout/page-layout';
// hooks
import { useAllWalletListQuery } from 'modules/wallet/hooks/use-wallet-list-query';
import { useLocalization } from 'modules/localization/hooks/use-localization';
import { useCurrencyListQuery } from 'modules/currency/hooks/use-currency-list-query';
// types
import type { WalletCardsListRef } from 'modules/wallet/components/wallet-cards-list/wallet-cards-list.interface';
// services
import { defaultCountCurrenciessPerPage } from 'modules/core/services/pagination.service';

import { Root } from './balance-board.styled';
import WalletTableList from 'modules/wallet/components/wallet-table/wallet-table-list';
import { useScroll } from 'modules/core/hooks/use-scrol-to-element';

const walletsPerPage = 20;

const BalanceBoard: FC = () => {
  // hooks
  const { t } = useLocalization();
  // state
  const [activePage] = useState(1);
  // queries
  const walletList = useAllWalletListQuery({
    page: activePage,
    per_page: walletsPerPage,
  });
  const currencyList = useCurrencyListQuery({
    page: 1,
    per_page: defaultCountCurrenciessPerPage,
  });
  // state
  const [walletTypeFilter, setWalletTypeFilter] = useState('all');
  const [activeViewTab, setActiveViewTab] = useState('cards');
  // refs
  const walletsCardsListRef = useRef<WalletCardsListRef>(null);
  const [executeScroll, elRef] = useScroll();
  // memo
  const wallets = useMemo(() => {
    if (!walletList.data?.list) {
      return [];
    }

    if (walletTypeFilter === 'all') {
      return walletList.data.list;
    }

    if (walletTypeFilter === 'popularcrypto') {
      return walletList.data.list.filter((wallet) => {
        const walletCurrency = currencyList.data?.list?.find(
          (currency) => currency.code === wallet.currency
        );

        return (
          walletCurrency?.popular && walletCurrency?.currency_type === 'crypto'
        );
      });
    }

    if (walletTypeFilter === 'crypto') {
      return walletList.data.list.filter(
        (wallet) => wallet.wallet_type === 'crypto'
      );
    }

    if (walletTypeFilter === 'tokens') {
      return walletList.data.list.filter(
        (wallet) =>
          !!currencyList.data?.list?.find(
            (currency) => currency.code === wallet.currency
          )?.is_token
      );
    }

    if (walletTypeFilter === 'fiat') {
      return walletList.data.list.filter(
        (wallet) => wallet.wallet_type === 'fiat'
      );
    }

    return [];
  }, [walletTypeFilter, walletList.data, currencyList.data]);

  const forceRender = () => {
    walletList.refetch();
  };

  return (
    <>
      <PageLayout
        title={t('PAGES.BALANCE.TITLE')}
        rightAction={
          <Button
            text={t('PAGES.BALANCE.ADD_WALLET')}
            onClick={() => {
              walletsCardsListRef.current?.focusNewWalletCard();
              executeScroll();
            }}
          />
        }
      />
      <Root>
        <WalletFilter
          walletTypeFilter={walletTypeFilter}
          onWalletTypeFilterChange={setWalletTypeFilter}
          viewTab={activeViewTab}
          onViewTabChange={setActiveViewTab}
        />
        <Spinner isLoading={walletList.isLoading} isAbsolute>
          {activeViewTab === 'cards' && (
            <WalletCardsList
              walletTypeFilter={walletTypeFilter}
              wallets={wallets}
              ref={walletsCardsListRef}
              forceRerender={forceRender}
            />
          )}
          {activeViewTab === 'list' && (
            <WalletTableList
              walletTypeFilter={walletTypeFilter}
              wallets={wallets}
              ref={walletsCardsListRef}
              forceRerender={forceRender}
            />
          )}
        </Spinner>
      </Root>
      <br />
      <br />
      <div ref={elRef} />
    </>
  );
};

export default memo(BalanceBoard);
