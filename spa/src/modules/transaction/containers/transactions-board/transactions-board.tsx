import React, { FC, useCallback, useMemo, useState } from 'react';
import { addDays } from 'date-fns';
// components
import Tabs from 'modules/core/components/tabs';
// containers
import TransactionsList from 'modules/transaction/containers/transactions-list';
import TransactionsListFilter from 'modules/transaction/containers/transactions-list-filter';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
import { useWalletListQuery } from 'modules/wallet/hooks/use-wallet-list-query';
import { useBoolean } from 'modules/core/hooks/use-boolean';
// types
import type { TransactionsListFilterData } from 'modules/transaction/containers/transactions-list/transactions-list.interface';
import type { TransactionsListFilterValues } from 'modules/transaction/containers/transactions-list-filter/transactions-list-filter.interface';
// utils
import { formatDateAsFilterValue } from 'utils/date.uitls';
// services
import { defaultCountWalletsPerPage } from 'modules/core/services/pagination.service';
// styled components
import {
  Actions,
  Action,
  AdditionalTopLine,
  HistoryFilterContainer,
  AdditionalLinks,
} from './transactions-board.styled';
import CSVAsync from './csv-async';

const defaultFilterValues: TransactionsListFilterValues = {
  operationId: '',
  from: null,
  to: null,
  type: null,
  status: null,
};

const TransactionsBoard: FC = () => {
  const { t } = useLocalization();
  // queries
  const wallets = useWalletListQuery({
    page: 1,
    per_page: defaultCountWalletsPerPage,
  });
  // state
  const [currency, setCurrency] = useState<string>('all');
  const [isFilterActive, setIsFilterActive] = useBoolean();
  const [
    filterValues,
    setFilterValues,
  ] = useState<TransactionsListFilterValues>(defaultFilterValues);
  const [sortingByDate, setsortingByDate] = useState(false);
  // memo
  const currencyOptions = useMemo(() => {
    if (!wallets.data?.list) {
      return [];
    }

    return wallets.data.list.map((wallet) => ({
      value: wallet.currency,
      name: wallet.currency,
    }));
  }, [wallets]);

  const transactionsListFilter = useMemo<TransactionsListFilterData>(() => {
    const filter: TransactionsListFilterData = {
      sorts: sortingByDate ? 'created_at asc' : 'created_at desc',
    };

    if (currency !== 'all') {
      filter.currency_eq = currency;
    }

    if (filterValues.operationId) {
      filter.id_eq = `${filterValues.operationId}`;
    }

    if (filterValues.from !== null && !isNaN(+filterValues.from)) {
      filter.created_at_gteq = formatDateAsFilterValue(filterValues.from);
    }

    if (filterValues.to !== null && !isNaN(+filterValues.to)) {
      filter.created_at_lteq = formatDateAsFilterValue(
        addDays(filterValues.to, 1)
      );
    }

    if (filterValues.type !== null) {
      filter.type_eq = filterValues.type;
    }

    if (filterValues.status !== null) {
      filter.status_eq = filterValues.status;
    }

    return filter;
  }, [currency, filterValues, sortingByDate]);

  const handleFilterApply = useCallback(
    (data: TransactionsListFilterValues) => {
      setFilterValues(data);
    },
    []
  );

  return (
    <>
      <AdditionalTopLine>
        <HistoryFilterContainer>
          <Tabs
            activeTab={currency}
            onChange={setCurrency}
            tabs={[
              {
                value: 'all',
                name: t('TABS.PANE.ALL_ACCOUNTS'),
              },
              ...currencyOptions,
            ]}
          />
        </HistoryFilterContainer>
        <AdditionalLinks>
          <Actions>
            <CSVAsync
              filter={transactionsListFilter}
              setsortingByDate={setsortingByDate}
              sortingByDate={sortingByDate}
            />
            <Action
              onClick={setIsFilterActive.toggle}
              isActive={isFilterActive}
            >
              {isFilterActive
                ? t('PAGES.HISTORY.HIDE_FILTER')
                : t('PAGES.HISTORY.SHOW_FILTER')}
            </Action>
          </Actions>
        </AdditionalLinks>
      </AdditionalTopLine>
      <TransactionsListFilter
        isOpen={isFilterActive}
        onApply={handleFilterApply}
      />
      <TransactionsList
        filter={transactionsListFilter}
        setsortingByDate={setsortingByDate}
        sortingByDate={sortingByDate}
      />
    </>
  );
};

export default TransactionsBoard;
