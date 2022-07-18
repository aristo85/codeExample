import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { format, fromUnixTime } from 'date-fns';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
import { useTransactionListQuery } from 'modules/transaction/hooks/use-transaction-list-query';
// components
import Table from 'modules/core/components/table';
// containers
import TransactionInfoModal from 'modules/transaction/containers/transaction-info-modal';
// types
import type { Transaction } from 'modules/transaction/types/transaction.types';
import type { ResourceObject } from 'modules/core/types/resource.types';

import type { TransactionsListProps } from './transactions-list.interface';
import { Root, Credit, Debit, Fee } from './transactions-list.styled';

const TransactionsList: FC<TransactionsListProps> = ({
  filter,
  sortingByDate,
  setsortingByDate,
}) => {
  // hooks
  const { t } = useLocalization();
  // state
  const [
    activeTransaction,
    setActiveTransaction,
  ] = useState<ResourceObject<Transaction> | null>(null);
  const [activePage, setActivePage] = useState(1);
  const [perPage, setperPage] = useState<string | null>(null);
  // queries
  const transactionList = useTransactionListQuery({
    page: activePage,
    per_page: perPage ? +perPage : +'8',
    q: filter,
    // sortingByDate? "created_at asc": "created_at desc"
  });

  // memo
  const tableColumns = useMemo(
    () => [
      'PAGES.HISTORY.TABLE_ID',
      'PAGES.HISTORY.TABLE_TYPE',
      'PAGES.HISTORY.TABLE_DATE',
      'PAGES.HISTORY.TABLE_CREDIT',
      'PAGES.HISTORY.TABLE_DEBIT',
      'PAGES.HISTORY.TABLE_CURRENCY',
      'PAGES.HISTORY.TABLE_FEE',
      'PAGES.HISTORY.TABLE_PS',
      'PAGES.HISTORY.TABLE_STATUS',
      'PAGES.HISTORY.TABLE_TRANSACTION_DESCRIPTION',
    ],
    [t]
  );
  const tableDataKeys = useMemo(
    () => [
      'id',
      'type',
      'created_at',
      'credit',
      'debit',
      'currency',
      'fee',
      'ps',
      'status',
      'description',
    ],
    []
  );

  useEffect(() => {
    setActivePage(1);
  }, [filter]);

  const handleTransactionModalClose = useCallback(() => {
    setActiveTransaction(null);
  }, []);

  const handleTableRowClick = useCallback(
    (transaction: ResourceObject<Transaction>) => {
      setActiveTransaction(transaction);
    },
    []
  );

  const cellRenderer = (data: ResourceObject<Transaction>, key: string) => {
    if (key === 'created_at') {
      return format(fromUnixTime(data.created_at), 'dd MMM yyyy HH:mm');
    }

    if (key === 'credit') {
      return (
        <Credit>{data.direction === 'in' ? `+${data.amount}` : ''}</Credit>
      );
    }

    if (key === 'debit') {
      return <Debit>{data.direction === 'out' ? `-${data.amount}` : ''}</Debit>;
    }

    if (key === 'fee') {
      return <Fee>{`-${data.commission} ${data.commission_currency}`}</Fee>;
    }

    if (key === 'ps') {
      return 'Fruitin';
    }
  };

  return (
    <Root>
      <Table
        columns={tableColumns}
        dataKeys={tableDataKeys}
        data={transactionList.data?.list ?? []}
        onRowClick={handleTableRowClick}
        cellRenderer={cellRenderer}
        isLoading={transactionList.isLoading}
        paginationProps={{
          maxPages: transactionList.data?.pageCount ?? 1,
          currentPage: activePage,
          onChange: setActivePage,
        }}
        setsortingByDate={setsortingByDate}
        sortingByDate={sortingByDate}
        setperPage={setperPage}
        perPage={perPage}
      />
      <TransactionInfoModal
        isOpen={!!activeTransaction}
        onClose={handleTransactionModalClose}
        transaction={activeTransaction}
      />
    </Root>
  );
};

export default TransactionsList;
