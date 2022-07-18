import { FC, useState, useCallback } from 'react';
// components
import Button from 'modules/core/components/button';
import UsersTable from 'modules/user/components/users-table';
import Select from 'modules/core/components/select/select';
// containers
import UsersFilter from 'modules/user/containers/users-filter';
// hooks
import { useUsersListQuery } from 'modules/user/hooks/use-profile-list-query';
import { useUrlState } from 'modules/core/hooks/use-url-state';
// types
import { UsersFilterValues } from 'modules/user/containers/users-filter/users-filter.interface';
// utils
import CSVAsync from '../csv/csv-async';
import userProfileService from 'modules/user/services/user-profile.service';

const UsersBoard: FC = () => {
  // state
  const [recordsPerPage, setrecordsPerPage] = useState('10');
  const [activePage, setActivePage] = useState(1);

  const [isFilterOpen, setIsFilterOpen] = useUrlState('filter_open', false);
  const [filterValues, setFilterValues] = useState<UsersFilterValues | null>(
    null
  );
  // const profileFilters = useSelector(selectProfileFilters);

  const searchFilters = useCallback(() => {
    return userProfileService.onProfileFilters(filterValues);
  }, [filterValues])();

  // queries
  const usersQuery = useUsersListQuery({
    page: activePage,
    per_page: +recordsPerPage,
    q: searchFilters,
  });

  // const handleFilterClick = () =>
  //   dispatch(setUserFilters(filterValues ? null : usersFilterInitialValues));

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
          listCount={usersQuery.data?.totalCount}
        />
        {/* </Button> */}
        <Button variant='primary' onClick={handleFilterClick}>
          Filter
        </Button>
      </div>
      <UsersFilter
        isOpen={isFilterOpen}
        onClose={() => {}}
        profileFilters={filterValues}
        onApply={setFilterValues}
        onReset={handleFilterReset}
      />
      <div className='px-4 py-6 sm:px-0'>
        <UsersTable
          users={usersQuery.data?.list ?? []}
          isLoading={usersQuery.isLoading}
          paginationProps={{
            activePage,
            onPageChange: setActivePage,
            isLoading: usersQuery.isLoading,
            pagesCount: usersQuery.data?.pageCount ?? 0,
            resultsCount: usersQuery.data?.list?.length,
            allRecordsCount: usersQuery.data?.totalCount,
            recordsPerPageCount: +recordsPerPage,
          }}
        />
      </div>
    </>
  );
};

export default UsersBoard;
