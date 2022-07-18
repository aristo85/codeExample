import { formatDateAsFilterValue } from './../../../utils/data.utils';
import { removeMatchedValues } from './../../../utils/object.utils';
import { addDays } from 'date-fns';
import { WalletsFilterValues } from '../containers/wallets-filter/wallets-filter.interface';

export const onWalletFilters = (filterValues: WalletsFilterValues | null) =>
  filterValues
    ? removeMatchedValues(
        {
          id_eq: filterValues.wallet_id,
          user_uid_eq: filterValues.user_id,
          user_email_cont: filterValues.email,
          wallet_type_eq: filterValues.type,
          amount_eq: filterValues.amount,
          currency_eq: filterValues.currency,
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
        },
        ['', 'all']
      )
    : undefined;
