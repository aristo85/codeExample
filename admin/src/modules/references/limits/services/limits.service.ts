import { LimitsFilterValues } from './../containers/limits-filter/limits-filter.interface';
import { addDays } from 'date-fns';
import { formatDateAsFilterValue } from './../../../../utils/data.utils';
import { removeMatchedValues } from './../../../../utils/object.utils';

export const onLimitFilters = (limitFilters: LimitsFilterValues | null) =>
  limitFilters
    ? removeMatchedValues(
        {
          id_eq: limitFilters.id,
          name_cont: limitFilters.name,
          currency_eq: limitFilters.currency,
          limit_type_eq: limitFilters.limit_type,
          transaction_type_eq: limitFilters.transaction_type,
          user_group_id_eq: limitFilters.user_group_id,
          created_at_gteq: limitFilters.created_from
            ? formatDateAsFilterValue(new Date(limitFilters.created_from))
            : undefined,
          created_at_lteq: limitFilters.created_to
            ? formatDateAsFilterValue(
                addDays(new Date(limitFilters.created_to), 1)
              )
            : undefined,
          updated_at_gteq: limitFilters.updated_from
            ? formatDateAsFilterValue(new Date(limitFilters.updated_from))
            : undefined,
          updated_at_lteq: limitFilters.updated_to
            ? formatDateAsFilterValue(
                addDays(new Date(limitFilters.updated_to), 1)
              )
            : undefined,
        },
        ['', 'all']
      )
    : { sorts: '' };
