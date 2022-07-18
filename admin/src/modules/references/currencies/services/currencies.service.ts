import { CurrenciesFilterValues } from './../containers/currencies-filter/currencies-filter.interface';
import { addDays } from 'date-fns';
import { formatDateAsFilterValue } from './../../../../utils/data.utils';
import { removeMatchedValues } from './../../../../utils/object.utils';

export const onCurrencyFilters = (
  currencyFilters: CurrenciesFilterValues | null
) =>
  currencyFilters
    ? removeMatchedValues(
        {
          id_eq: currencyFilters.id,
          currency_type_eq:
            currencyFilters.currency_type !== 'all'
              ? currencyFilters.currency_type
              : undefined,
          code_eq: currencyFilters.code,
          active_eq:
            currencyFilters.active !== 'all'
              ? currencyFilters.active
              : undefined,
          default_eq:
            currencyFilters.default !== 'all'
              ? currencyFilters.default
              : undefined,
          popular_eq:
            currencyFilters.popular !== 'all'
              ? currencyFilters.popular
              : undefined,
          is_token_eq:
            currencyFilters.is_token !== 'all'
              ? currencyFilters.is_token
              : undefined,
          created_at_gteq: currencyFilters.created_from
            ? formatDateAsFilterValue(new Date(currencyFilters.created_from))
            : undefined,
          created_at_lteq: currencyFilters.created_to
            ? formatDateAsFilterValue(
                addDays(new Date(currencyFilters.created_to), 1)
              )
            : undefined,
          updated_at_gteq: currencyFilters.updated_from
            ? formatDateAsFilterValue(new Date(currencyFilters.updated_from))
            : undefined,
          updated_at_lteq: currencyFilters.updated_to
            ? formatDateAsFilterValue(
                addDays(new Date(currencyFilters.updated_to), 1)
              )
            : undefined,
          sorts: 'code asc',
        },
        ['', 'all']
      )
    : { sorts: 'code asc' };
