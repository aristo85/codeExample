import { FC, useState, useCallback } from 'react';
// import { useHistory } from 'react-router-dom';
// components
import Button from 'modules/core/components/button';
import Select from 'modules/core/components/select/select';
import ReferenceTable from 'modules/references/country/components/reference-countries-table/reference-countries-table';
// containers
import ReferenceFilter, {
  CountriesFilterInitialValues,
} from 'modules/references/country/containers/reference-filter/CountryFilter';
// hooks
// import { useUrlState } from 'modules/core/hooks/use-url-state';
import { useCountryListQuery } from '../../hooks/use-country-list-query';
import CSVAsync from '../csv/csv-async';
import { useDispatch, useSelector } from 'react-redux';
import { setCountryFilters } from '../../country.action';
import { selectCountryFilters } from '../../country.selectors';
import { onCountryFilters } from '../../services/countries.service';

const ReferenceBoard: FC = () => {
  const [recordsPerPage, setrecordsPerPage] = useState('10');
  // state
  const [activePage, setActivePage] = useState(1);
  // const [rerender, forceRender] = useState({});

  const dispatch = useDispatch();

  const countryFilters = useSelector(selectCountryFilters);

  const searchFilters = useCallback(() => {
    return onCountryFilters(countryFilters);
  }, [countryFilters])();

  // queries
  // const history = useHistory();
  const countriesQuery = useCountryListQuery({
    page: activePage,
    per_page: +recordsPerPage,
    q: searchFilters,
  });

  const handleFilterClick = () =>
    dispatch(
      setCountryFilters(countryFilters ? null : CountriesFilterInitialValues)
    );

  const forceRender = () => {
    countriesQuery.refetch();
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
          listCount={countriesQuery.data?.totalCount}
          // countriesList={countriesQuery.data?.list}
        />
        {/* </Button> */}
        <Button variant='primary' onClick={handleFilterClick}>
          Filter
        </Button>
      </div>
      <ReferenceFilter
        isOpen={!!countryFilters}
        onClose={() => {}}
        countryFilters={countryFilters}
        // listCount={countriesQuery.data?.totalCount}
        // onApply={setFilterValues}
        // onReset={handleFilterReset}
      />
      <div className='px-4 py-6 sm:px-0'>
        <ReferenceTable
          countries={countriesQuery.data?.list ?? []}
          isLoading={countriesQuery.isLoading}
          forceRerender={forceRender}
          paginationProps={{
            activePage,
            onPageChange: setActivePage,
            isLoading: countriesQuery.isLoading,
            pagesCount: countriesQuery.data?.pageCount ?? 0,
            resultsCount: countriesQuery.data?.list?.length,
            allRecordsCount: countriesQuery.data?.totalCount,
            recordsPerPageCount: +recordsPerPage,
          }}
        />
      </div>
    </>
  );
};

export default ReferenceBoard;
