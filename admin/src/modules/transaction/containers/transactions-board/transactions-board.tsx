import { FC, useCallback, useState } from 'react';
// components
import TransactionsTable from 'modules/transaction/components/transactions-table';
import Button from 'modules/core/components/button';
import Select from 'modules/core/components/select/select';
// containers
import TransactionsFilter from 'modules/transaction/containers/transactions-filter';
import CSVAsync from '../csv/csv-async';
// hooks
import { useTransactionListQuery } from 'modules/transaction/hooks/use-transaction-list-query';
import { useUrlState } from 'modules/core/hooks/use-url-state';
// types
import type { TransactionsFilterValues } from 'modules/transaction/containers/transactions-filter/transactions-filter.interface';
// utils
import { onTransactionFilters } from 'modules/transaction/services/transaction.service';

const TransactionsBoard: FC = () => {
  // state
  const [recordsPerPage, setrecordsPerPage] = useState('10');
  const [isFilterOpen, setIsFilterOpen] = useUrlState('filter_open', false);
  const [activePage, setActivePage] = useState(1);
  const [
    filterValues,
    setFilterValues,
  ] = useState<TransactionsFilterValues | null>(null);

  const searchFilters = useCallback(() => {
    return onTransactionFilters(filterValues);
  }, [filterValues])();

  // queries
  const transactionsQuery = useTransactionListQuery({
    page: activePage,
    per_page: +recordsPerPage,
    q: searchFilters,
  });

  const handleFilterClick = useCallback(() => {
    setIsFilterOpen(!isFilterOpen);
  }, [isFilterOpen]);

  const handleFilterReset = useCallback(() => {
    setFilterValues(null);
  }, []);

  return (
    <>
      <div className='flex justify-end space-x-4 px-4 sm:px-0'>
        <Select
          value={recordsPerPage}
          onChange={(value) => setrecordsPerPage(value)}
          label={''}
          options={[
            {
              value: '10',
              text: '10 per page',
            },
            {
              value: '20',
              text: '20 per page',
            },
            {
              value: '50',
              text: '50 per page',
            },
          ]}
        />
        {/* <Button variant='default'> */}
        <CSVAsync
          filter={searchFilters}
          sortingByDate={false}
          setsortingByDate={() => {}}
          listCount={transactionsQuery.data?.totalCount}
        />
        {/* </Button> */}
        <Button variant='primary' onClick={handleFilterClick}>
          Filter
        </Button>
      </div>
      <TransactionsFilter
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={setFilterValues}
        onReset={handleFilterReset}
      />
      <div className='px-4 py-6 sm:px-0'>
        <TransactionsTable
          transactions={transactionsQuery.data?.list ?? []}
          isLoading={transactionsQuery.isLoading}
          paginationProps={{
            activePage,
            onPageChange: setActivePage,
            isLoading: transactionsQuery.isLoading,
            pagesCount: transactionsQuery.data?.pageCount ?? 0,
            resultsCount: transactionsQuery.data?.list?.length,
            allRecordsCount: transactionsQuery.data?.totalCount,
            recordsPerPageCount: +recordsPerPage,
          }}
        />
      </div>
    </>
  );
};

export default TransactionsBoard;
