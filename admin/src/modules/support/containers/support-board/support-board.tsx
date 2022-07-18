import { FC, useState, useCallback } from 'react';
// import { useHistory } from 'react-router-dom';
// components
import Button from 'modules/core/components/button';
import Select from 'modules/core/components/select/select';
import { useSupportListQuery } from '../../hooks/use-support-list-query';
import CSVAsync from '../csv/csv-async';
import { useDispatch, useSelector } from 'react-redux';
import { setSupportFilters } from '../../support.action';
import { selectSupportFilters } from '../../support.selectors';
import { onSupportFilters } from '../../services/support.service';
import SupportFilter, {
  supportsFilterInitialValues,
} from '../support-filter/SupportFilter';
import SupportsTable from 'modules/support/components/reference-countries-table/support-table';

const SupportBoard: FC = () => {
  const [recordsPerPage, setrecordsPerPage] = useState('10');
  // state
  const [activePage, setActivePage] = useState(1);
  // const [rerender, forceRender] = useState({});

  const dispatch = useDispatch();

  const supportFilters = useSelector(selectSupportFilters);

  const searchFilters = useCallback(() => {
    return onSupportFilters(supportFilters);
  }, [supportFilters])();

  // queries
  // const history = useHistory();
  const supportsQuery = useSupportListQuery({
    page: activePage,
    per_page: +recordsPerPage,
    q: searchFilters,
  });

  const handleFilterClick = () =>
    dispatch(
      setSupportFilters(supportFilters ? null : supportsFilterInitialValues)
    );

  const forceRender = () => {
    supportsQuery.refetch();
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
        {/* <Button variant='default'> */}
        <CSVAsync
          filter={searchFilters}
          sortingByDate={false}
          setsortingByDate={() => {}}
          listCount={supportsQuery.data?.totalCount}
          // countriesList={supportsQuery.data?.list}
        />
        {/* </Button> */}
        <Button variant='primary' onClick={handleFilterClick}>
          Filter
        </Button>
      </div>
      <SupportFilter
        isOpen={!!supportFilters}
        onClose={() => {}}
        supportFilters={supportFilters}
        // listCount={supportsQuery.data?.totalCount}
        // onApply={setFilterValues}
        // onReset={handleFilterReset}
      />
      <div className='px-4 py-6 sm:px-0'>
        <SupportsTable
          supports={supportsQuery.data?.list ?? []}
          isLoading={supportsQuery.isLoading}
          forceRerender={forceRender}
          paginationProps={{
            activePage,
            onPageChange: setActivePage,
            isLoading: supportsQuery.isLoading,
            pagesCount: supportsQuery.data?.pageCount ?? 0,
            resultsCount: supportsQuery.data?.list?.length,
            allRecordsCount: supportsQuery.data?.totalCount,
            recordsPerPageCount: +recordsPerPage,
          }}
        />
      </div>
    </>
  );
};

export default SupportBoard;
