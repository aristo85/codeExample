import { FC, useCallback, useState } from 'react';
// components
import ClientsWalletsTable from 'modules/wallet/components/clients-wallets-table';
import Button from 'modules/core/components/button';
import Select from 'modules/core/components/select/select';
// containers
import WalletsFilter from 'modules/wallet/containers/wallets-filter';
// hooks
import { useWalletListQuery } from 'modules/wallet/hooks/use-wallet-list-query';
import { useUrlState } from 'modules/core/hooks/use-url-state';
// utils
import type { WalletsFilterValues } from 'modules/wallet/containers/wallets-filter/wallets-filter.interface';
import CSVAsync from '../csv/csv-async';
import { onWalletFilters } from 'modules/wallet/services/wallet.service';

const WalletsBoard: FC = () => {
  // state
  const [isFilterOpen, setIsFilterOpen] = useUrlState('filter_open', false);
  const [recordsPerPage, setrecordsPerPage] = useState('10');
  const [activePage, setActivePage] = useState(1);
  const [filterValues, setFilterValues] = useState<WalletsFilterValues | null>(
    null
  );

  const searchFilters = useCallback(() => {
    return onWalletFilters(filterValues);
  }, [filterValues])();

  // queries
  const walletsQuery = useWalletListQuery({
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
          listCount={walletsQuery.data?.totalCount}
        />
        {/* </Button> */}
        <Button variant='primary' onClick={handleFilterClick}>
          Filter
        </Button>
      </div>
      <WalletsFilter
        onApply={setFilterValues}
        onReset={handleFilterReset}
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
      <div className='px-4 py-6 sm:px-0'>
        <ClientsWalletsTable
          wallets={walletsQuery.data?.list ?? []}
          paginationProps={{
            activePage,
            onPageChange: setActivePage,
            isLoading: walletsQuery.isLoading,
            pagesCount: walletsQuery.data?.pageCount ?? 0,
            resultsCount: walletsQuery.data?.list?.length,
            allRecordsCount: walletsQuery.data?.totalCount,
            recordsPerPageCount: +recordsPerPage,
          }}
        />
      </div>
    </>
  );
};

export default WalletsBoard;
