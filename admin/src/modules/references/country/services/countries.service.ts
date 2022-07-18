import { addDays } from 'date-fns';
import { CoountryFilterValues } from '../containers/reference-filter/country-filter.interface';
import { formatDateAsFilterValue } from './../../../../utils/data.utils';
import { removeMatchedValues } from './../../../../utils/object.utils';

export const onCountryFilters = (countryFilters: CoountryFilterValues | null) =>
  countryFilters
    ? removeMatchedValues(
        {
          name_cont: countryFilters.name,
          code_cont: countryFilters.code,
          is_blocked_eq:
            countryFilters.is_blocked !== 'all'
              ? JSON.parse(countryFilters.is_blocked)
              : undefined,
          updated_at_gteq: countryFilters.updated_from
            ? formatDateAsFilterValue(new Date(countryFilters.updated_from))
            : undefined,
          updated_at_lteq: countryFilters.updated_to
            ? formatDateAsFilterValue(
                addDays(new Date(countryFilters.updated_to), 1)
              )
            : undefined,
          sorts: 'name asc',
        },
        ['', 'all']
      )
    : { sorts: 'name asc' };
