import { FC, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
// components
import Button from 'modules/core/components/button';
import CurrenciesTable from 'modules/references/currencies/components/currencies-table/reference-currencies-table';
import Select from 'modules/core/components/select/select';
// containers
import CurrenciesFilter, {
  currenciesFilterInitialValues,
} from 'modules/references/currencies/containers/currencies-filter/currencies-filter';
// hooks
import { useCurrencyListQuery } from '../../hooks/use-currency-list-query';
import CSVAsync from '../csv/csv-async';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrencyFilters } from '../../currency.selectors';
import { setCurrencyFilters } from '../../currency.action';
import { onCurrencyFilters } from '../../services/currencies.service';

const CurrenciesBoard: FC = () => {
  // state
  const [recordsPerPage, setrecordsPerPage] = useState('10');
  const [activePage, setActivePage] = useState(1);

  const dispatch = useDispatch();
  const history = useHistory();

  const currencyFilters = useSelector(selectCurrencyFilters);

  const searchFilters = useCallback(() => {
    return onCurrencyFilters(currencyFilters);
  }, [currencyFilters])();

  const currenciesQuery = useCurrencyListQuery({
    page: activePage,
    per_page: +recordsPerPage,
    q: searchFilters,
  });

  const handleFilterClick = () =>
    dispatch(
      setCurrencyFilters(currencyFilters ? null : currenciesFilterInitialValues)
    );

  const forceRender = () => {
    currenciesQuery.refetch();
  };

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
        <Button
          variant='default'
          onClick={() =>
            history.push('/reference-currencies/create-new-currency')
          }
        >
          Create currency
        </Button>
        <CSVAsync
          filter={searchFilters}
          sortingByDate={false}
          setsortingByDate={() => {}}
          listCount={currenciesQuery.data?.totalCount}
          // currenciesList={currenciesQuery.data?.list}
        />
        <Button variant='primary' onClick={handleFilterClick}>
          Filter
        </Button>
      </div>
      <CurrenciesFilter
        isOpen={!!currencyFilters}
        onClose={() => {}}
        currencyFilters={currencyFilters}
        // onApply={setFilterValues}
        // onReset={handleFilterReset}
      />
      <div className='px-4 py-6 sm:px-0'>
        <CurrenciesTable
          currencies={currenciesQuery.data?.list ?? []}
          isLoading={currenciesQuery.isLoading}
          forceRerender={forceRender}
          paginationProps={{
            activePage,
            onPageChange: setActivePage,
            isLoading: currenciesQuery.isLoading,
            pagesCount: currenciesQuery.data?.pageCount ?? 0,
            resultsCount: currenciesQuery.data?.list?.length,
            allRecordsCount: currenciesQuery.data?.totalCount,
            recordsPerPageCount: +recordsPerPage,
          }}
        />
      </div>
    </>
  );
};

export default CurrenciesBoard;
