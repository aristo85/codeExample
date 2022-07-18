import { FC, useMemo } from 'react';
// hooks
import { useCurrenciesListQuery } from 'modules/currency/hooks/use-currencies-list-query';

import type { InputCurrencyProps } from './input-currency.interface';

const currenciesCountPerPage = 10;

const InputCurrency: FC<InputCurrencyProps> = ({
  label,
  amountInputRegister,
  currencyInputRegister,
}) => {
  // queries
  const currenciesList = useCurrenciesListQuery({
    page: 1,
    per_page: currenciesCountPerPage,
  });
  // memo
  const options = useMemo(
    () =>
      currenciesList.data?.list?.map((currency) => ({
        value: currency.code,
        name: currency.code,
      })) ?? [],
    []
  );

  return (
    <div>
      <label className='block text-sm font-medium text-gray-700'>{label}</label>
      <div className='mt-1 relative rounded-md shadow-sm'>
        <input
          type='text'
          className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md'
          placeholder='0.00'
          {...amountInputRegister}
        />
        <div className='absolute inset-y-0 right-0 flex items-center'>
          <select
            {...currencyInputRegister}
            className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputCurrency;
