import { addDays } from 'date-fns';
import { SupportFilterValues } from '../containers/support-filter/support-filter.interface';
import { formatDateAsFilterValue } from './../../../utils/data.utils';
import { removeMatchedValues } from './../../../utils/object.utils';

export const onSupportFilters = (supportFilters: SupportFilterValues | null) =>
  supportFilters
    ? removeMatchedValues(
        {
          id_eq: supportFilters.id,
          name_cont: supportFilters.name,
          user_uid_eq: supportFilters.user_uid,
          status_eq: supportFilters.status,
          created_at_gteq: supportFilters.created_from
            ? formatDateAsFilterValue(new Date(supportFilters.created_from))
            : undefined,
          created_at_lteq: supportFilters.created_to
            ? formatDateAsFilterValue(
                addDays(new Date(supportFilters.created_to), 1)
              )
            : undefined,
          updated_at_gteq: supportFilters.updated_from
            ? formatDateAsFilterValue(new Date(supportFilters.updated_from))
            : undefined,
          updated_at_lteq: supportFilters.updated_to
            ? formatDateAsFilterValue(
                addDays(new Date(supportFilters.updated_to), 1)
              )
            : undefined,
          sorts: 'updated_at desc',
        },
        ['', 'all']
      )
    : { sorts: 'updated_at desc' };
