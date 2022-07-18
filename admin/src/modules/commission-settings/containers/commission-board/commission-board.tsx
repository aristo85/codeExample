import { FC, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
// components
import Button from 'modules/core/components/button';
import Select from 'modules/core/components/select/select';
// containers
// hooks
import CSVAsync from '../csv/csv-async';
import { useCommissionListQuery } from 'modules/commission-settings/hooks/use-commission-list-query';
import CommissionFilter, {
  commissionsFilterInitialValues,
} from '../commission-filter/CommissionFilter';
import CommissionSettingsTable from 'modules/commission-settings/components/commission-settings-table/commission-settings-table';
import { useOperationListQuery } from 'modules/references/operation/hooks/use-operation-list-query';
import { useCurrencyListQuery } from 'modules/references/currencies/hooks/use-currency-list-query';
import { useGroupListQuery } from 'modules/references/buisness-groups/hooks/use-group-list-query';
import { useDispatch, useSelector } from 'react-redux';
import { selectCommissionFilters } from 'modules/commission-settings/commission.selectors';
import { setCommissionFilters } from 'modules/commission-settings/commission.action';
import { onCommissionFilters } from 'modules/commission-settings/services/commission.service';

const CommissionBoard: FC = () => {
  const [recordsPerPage, setrecordsPerPage] = useState('10');
  // state
  const [activePage, setActivePage] = useState(1);

  const dispatch = useDispatch();
  const commissionFilters = useSelector(selectCommissionFilters);

  // queries
  const history = useHistory();

  const searchFilters = useCallback(() => {
    return onCommissionFilters(commissionFilters);
  }, [commissionFilters])();

  const commissionsQuery = useCommissionListQuery({
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
    dispatch(
      setCommissionFilters(
        commissionFilters ? null : commissionsFilterInitialValues
      )
    );

  const forceRender = () => {
    commissionsQuery.refetch();
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
            history.push('/commission-settings/create-new-commission')
          }
        >
          Create rule
        </Button>
        {/* <Button variant='default'> */}
        <CSVAsync
          filter={searchFilters}
          listCount={commissionsQuery.data?.totalCount}
          sortingByDate={false}
          setsortingByDate={() => {}}
        />
        {/* </Button> */}
        <Button variant='primary' onClick={handleFilterClick}>
          Filter
        </Button>
      </div>
      <CommissionFilter
        isOpen={!!commissionFilters}
        onClose={() => {}}
        // onApply={setFilterValues}
        // onReset={handleFilterReset}
        commissionFilters={commissionFilters}
        operationOptions={operationOptions ?? []}
        currencyOptions={currencyOptions ?? []}
        groupOptions={groupOptions ?? []}
      />
      <div className='px-4 py-6 sm:px-0'>
        <CommissionSettingsTable
          commissions={commissionsQuery.data?.list ?? []}
          isLoading={commissionsQuery.isLoading}
          forceRerender={forceRender}
          paginationProps={{
            activePage,
            onPageChange: setActivePage,
            isLoading: commissionsQuery.isLoading,
            pagesCount: commissionsQuery.data?.pageCount ?? 0,
            resultsCount: commissionsQuery.data?.list?.length,
            allRecordsCount: commissionsQuery.data?.totalCount,
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

export default CommissionBoard;
