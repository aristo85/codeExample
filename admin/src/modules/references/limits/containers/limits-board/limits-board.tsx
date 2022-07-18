import { FC, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
// components
import Button from 'modules/core/components/button';
import LimitsTable from '../../components/limits-table';
import Select from 'modules/core/components/select/select';
// containers
// hooks
// import { useUrlState } from 'modules/core/hooks/use-url-state';
import { useDispatch, useSelector } from 'react-redux';
import { selectLimityFilters } from '../../limit.selectors';
import { useLimitListQuery } from '../../hooks/use-limit-list-query';
import { setLimitFilters } from '../../limit.action';
import CSVAsync from '../csv/csv-async';
import LimitFilter, {
  limitsFilterInitialValues,
} from '../limits-filter/limits-filter';
import { useOperationListQuery } from 'modules/references/operation/hooks/use-operation-list-query';
import { useCurrencyListQuery } from 'modules/references/currencies/hooks/use-currency-list-query';
import { useGroupListQuery } from 'modules/references/buisness-groups/hooks/use-group-list-query';
import { onLimitFilters } from '../../services/limits.service';

const LimitBoard: FC = () => {
  // state
  const [recordsPerPage, setrecordsPerPage] = useState('10');
  // const [isFilterOpen, setIsFilterOpen] = useUrlState('filter_open', false);
  const [activePage, setActivePage] = useState(1);

  const dispatch = useDispatch();
  const history = useHistory();

  const limitFilters = useSelector(selectLimityFilters);

  const searchFilters = useCallback(() => {
    return onLimitFilters(limitFilters);
  }, [limitFilters])();

  const limitsQuery = useLimitListQuery({
    page: activePage,
    per_page: +recordsPerPage,
    q: searchFilters,
  });

  const operationOptions = useOperationListQuery({
    page: 1,
    per_page: 20,
  }).data?.types?.map((el: any) => ({
    value: el,
    text: el,
  }));

  const currencyOptions = useCurrencyListQuery({
    page: 1,
    per_page: 50,
  }).data?.list?.map((el) => ({
    value: el.code,
    text: el.code,
  }));

  const groupOptions = useGroupListQuery({
    page: 1,
    per_page: 50,
  }).data?.list?.map((el) => ({
    value: el.id,
    text: el.name,
  }));

  const handleFilterClick = () =>
    dispatch(setLimitFilters(limitFilters ? null : limitsFilterInitialValues));

  const forceRender = () => {
    limitsQuery.refetch();
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
            history.push('/reference-client-limits/create-new-limit')
          }
        >
          Create Limit
        </Button>
        {/* <Button variant='default'> */}
        <CSVAsync
          filter={searchFilters}
          sortingByDate={false}
          setsortingByDate={() => {}}
          listCount={limitsQuery.data?.totalCount}
          // currenciesList={currenciesQuery.data?.list}
        />
        {/* </Button> */}
        <Button variant='primary' onClick={handleFilterClick}>
          Filter
        </Button>
      </div>
      <LimitFilter
        isOpen={!!limitFilters}
        onClose={() => {}}
        limitFilters={limitFilters}
        operationOptions={operationOptions ?? []}
        currencyOptions={currencyOptions ?? []}
        groupOptions={groupOptions ?? []}
      />
      <div className='px-4 py-6 sm:px-0'>
        <LimitsTable
          limits={limitsQuery.data?.list ?? []}
          isLoading={limitsQuery.isLoading}
          forceRerender={forceRender}
          paginationProps={{
            activePage,
            onPageChange: setActivePage,
            isLoading: limitsQuery.isLoading,
            pagesCount: limitsQuery.data?.pageCount ?? 0,
            resultsCount: limitsQuery.data?.list?.length,
            allRecordsCount: limitsQuery.data?.totalCount,
            recordsPerPageCount: +recordsPerPage,
          }}
          operationOptions={operationOptions ?? []}
          currencyOptions={currencyOptions ?? []}
          groupOptions={groupOptions ?? []}
        />
      </div>
    </>
  );
};

export default LimitBoard;
