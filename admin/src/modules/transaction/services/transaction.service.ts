import { TransactionsFilterValues } from './../containers/transactions-filter/transactions-filter.interface';
import { addDays } from 'date-fns';
import { removeMatchedValues } from 'utils/object.utils';
import { formatDateAsFilterValue } from 'utils/data.utils';

export const onTransactionFilters = (
  filterValues: TransactionsFilterValues | null
) =>
  filterValues
    ? removeMatchedValues(
        {
          id_eq: filterValues.transaction_id,
          total_id_eq: filterValues.total_id,
          transaction_external_id_eq: filterValues.transaction_external_id,
          user_uid_eq: filterValues.user_id,
          user_wallet_id_eq: filterValues.user_wallet_id,
          to_wallet_id_eq: filterValues.destination_wallet_id,
          to_wallet_external_id_eq: filterValues.destination_wallet_external_id,
          direction_eq: filterValues.direction,
          status_eq: filterValues.status,
          created_at_gteq: filterValues.created_from
            ? formatDateAsFilterValue(new Date(filterValues.created_from))
            : undefined,
          created_at_lteq: filterValues.created_to
            ? formatDateAsFilterValue(
                addDays(new Date(filterValues.created_to), 1)
              )
            : undefined,
          updated_at_gteq: filterValues.updated_from
            ? formatDateAsFilterValue(new Date(filterValues.updated_from))
            : undefined,
          updated_at_lteq: filterValues.updated_to
            ? formatDateAsFilterValue(
                addDays(new Date(filterValues.updated_to), 1)
              )
            : undefined,
          amount_eq: filterValues.amount,
          currency_in: filterValues.currency,
          commission_eq: filterValues.commission,
          commission_currency_eq: filterValues.commission_currency,
          description_cont: filterValues.description,
          type_in: filterValues.type,
        },
        ['', 'all']
      )
    : undefined;
