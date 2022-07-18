// import { useUrlState } from 'modules/core/hooks/use-url-state';
import React, { useState, FC, useCallback } from 'react';
import { useHistory } from 'react-router';
import { useGroupListQuery } from '../../hooks/use-group-list-query';
// import { GroupFilterValues } from '../group-filter/group-filter.interface';
import Button from 'modules/core/components/button';
import GroupsFilter, {
  groupsFilterInitialValues,
} from '../group-filter/group-filter';
import GroupsTable from '../../components/group-table';
import Select from 'modules/core/components/select/select';
import CSVAsync from '../csv';
import { useDispatch, useSelector } from 'react-redux';
import { selectGroupFilters } from '../../group.selectors';
import { setGroupFilters } from '../../group.action';
import { onGroupFilters } from '../../services/group.service';

const GroupBoard: FC = () => {
  // state
  const [recordsPerPage, setrecordsPerPage] = useState('10');
  const [activePage, setActivePage] = useState(1);

  const dispatch = useDispatch();
  const history = useHistory();

  const groupFilters = useSelector(selectGroupFilters);

  const searchFilters = useCallback(() => {
    return onGroupFilters(groupFilters);
  }, [groupFilters])();

  const groupListQuery = useGroupListQuery({
    page: activePage,
    per_page: +recordsPerPage,
    q: searchFilters,
  });

  const handleFilterClick = () =>
    dispatch(setGroupFilters(groupFilters ? null : groupsFilterInitialValues));

  const forceRender = () => {
    groupListQuery.refetch();
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
          listCount={groupListQuery.data?.totalCount}
          // countriesList={countriesQuery.data?.list}
        />
        {/* </Button> */}
        <Button
          variant='default'
          onClick={() =>
            history.push('/reference-client-groups/create-new-group')
          }
        >
          Create Group
        </Button>
        {/* <Button variant='default'>Export</Button> */}
        <Button variant='primary' onClick={handleFilterClick}>
          Filter
        </Button>
      </div>
      <GroupsFilter
        isOpen={!!groupFilters}
        onClose={() => {}}
        groupFilters={groupFilters}
        // onApply={setFilterValues}
        // onReset={handleFilterReset}
      />
      <div className='px-4 py-6 sm:px-0'>
        <GroupsTable
          groups={groupListQuery.data?.list ?? []}
          isLoading={groupListQuery.isLoading}
          forceRerender={forceRender}
          paginationProps={{
            activePage,
            onPageChange: setActivePage,
            isLoading: groupListQuery.isLoading,
            pagesCount: groupListQuery.data?.pageCount ?? 0,
            resultsCount: groupListQuery.data?.list?.length,
            allRecordsCount: groupListQuery.data?.totalCount,
            recordsPerPageCount: +recordsPerPage,
          }}
        />
      </div>
    </>
  );
};

export default GroupBoard;
