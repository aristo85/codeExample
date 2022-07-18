import { formatDateAsFilterValue } from './../../../utils/data.utils';
import { removeMatchedValues } from './../../../utils/object.utils';
import { addDays } from 'date-fns';
import { CommissionFilterValues } from '../containers/commission-filter/commission-filter.interface';

export const onCommissionFilters = (
  commissionFilters: CommissionFilterValues | null
) =>
  commissionFilters
    ? removeMatchedValues(
        {
          id_eq: commissionFilters.id,
          name_cont: commissionFilters.name,
          currency_in: commissionFilters.currency,
          transaction_type_in: commissionFilters.transaction_type,
          fix_amount_eq: commissionFilters.fix_amount ?? undefined,
          min_amount_eq: commissionFilters.min_amount ?? undefined,
          percent_eq: commissionFilters.percent ?? undefined,
          user_group_id_in: commissionFilters.user_group_id,
          updated_at_gteq: commissionFilters.updated_from
            ? formatDateAsFilterValue(new Date(commissionFilters.updated_from))
            : undefined,
          updated_at_lteq: commissionFilters.updated_to
            ? formatDateAsFilterValue(
                addDays(new Date(commissionFilters.updated_to), 1)
              )
            : undefined,
          created_at_gteq: commissionFilters.created_from
            ? formatDateAsFilterValue(new Date(commissionFilters.created_from))
            : undefined,
          created_at_lteq: commissionFilters.created_to
            ? formatDateAsFilterValue(
                addDays(new Date(commissionFilters.created_to), 1)
              )
            : undefined,
          sorts: 'created_at asc',
        },
        ['', 'all']
      )
    : { sorts: 'created_at asc' };
