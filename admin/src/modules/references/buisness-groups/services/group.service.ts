import { addDays } from 'date-fns';
import { formatDateAsFilterValue } from './../../../../utils/data.utils';
import { removeMatchedValues } from './../../../../utils/object.utils';
import { GroupFilterValues } from './../containers/group-filter/group-filter.interface';

export const onGroupFilters = (groupFilters: GroupFilterValues | null) =>
  groupFilters
    ? removeMatchedValues(
        {
          id_eq: groupFilters.id,
          name_cont: groupFilters.name,
          is_blocked_eq:
            groupFilters.is_blocked !== 'all'
              ? JSON.parse(groupFilters.is_blocked)
              : undefined,
          // description_eq: groupFilters.description,
          created_at_gteq: groupFilters.created_from
            ? formatDateAsFilterValue(new Date(groupFilters.created_from))
            : undefined,
          created_at_lteq: groupFilters.created_to
            ? formatDateAsFilterValue(
                addDays(new Date(groupFilters.created_to), 1)
              )
            : undefined,
          updated_at_gteq: groupFilters.updated_from
            ? formatDateAsFilterValue(new Date(groupFilters.updated_from))
            : undefined,
          updated_at_lteq: groupFilters.updated_to
            ? formatDateAsFilterValue(
                addDays(new Date(groupFilters.updated_to), 1)
              )
            : undefined,
          sorts: 'created-at asc',
        },
        ['', 'all']
      )
    : { sorts: 'created-at asc' };
