import { FC, useCallback, useRef, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
// components
import FilterBox from 'modules/core/components/filter-box';
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select/select';
import Button from 'modules/core/components/button';

import type {
  CurrenciesFilterValues,
  CurrenciesFilterProps,
} from 'modules/references/currencies/containers/currencies-filter/currencies-filter.interface';
import { useCurrencyListQuery } from '../../hooks/use-currency-list-query';
import { useDispatch } from 'react-redux';
import { setCurrencyFilters } from '../../currency.action';

export const currenciesFilterInitialValues: CurrenciesFilterValues = {
  id: '',
  code: '',
  default: 'all',
  active: 'all',
  popular: 'all',
  is_token: 'all',
  currency_type: 'all',
  created_from: '',
  created_to: '',
  updated_from: '',
  updated_to: '',
};

const CurrenciesFilter: FC<CurrenciesFilterProps> = ({
  isOpen,
  onClose,
  currencyFilters,
  // onApply,
  // onReset,
}) => {
  const dispatch = useDispatch();
  // form
  const {
    register,
    handleSubmit,
    reset,
    control,
  } = useForm<CurrenciesFilterValues>({
    defaultValues: currencyFilters ?? currenciesFilterInitialValues,
  });
  // refs
  const formRef = useRef<HTMLFormElement>(null);

  const currencyOptions = useCurrencyListQuery({
    page: 1,
    per_page: 50,
  }).data?.list?.map((el) => ({
    value: el.code,
    text: el.code,
  }));

  const handleFormSubmit = useCallback(
    (data: CurrenciesFilterValues) => {
      // onApply && onApply(data);
      dispatch(setCurrencyFilters(data));
    },
    [dispatch]
  );

  const handleFormReset = useCallback(() => {
    reset(currenciesFilterInitialValues);
    dispatch(setCurrencyFilters(currenciesFilterInitialValues));
    // onReset && onReset();
  }, [reset, dispatch]);

  useEffect(() => {
    currencyFilters && reset(currencyFilters);
  }, [currencyFilters]);

  return (
    <FilterBox isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>
        <div className='grid grid-cols-4 gap-6 px-4 py-6 sm:px-6'>
          <Input placeholder='...' label='Currency id' {...register('id')} />
          {/* <Input
            placeholder='...'
            label='Currency'
            {...register('code')}
          /> */}
          <Controller
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Currency code'
                options={
                  currencyOptions
                    ? [{ value: '', text: 'none' }, ...currencyOptions]
                    : []
                }
              />
            )}
            name='code'
            control={control}
          />
          <Controller
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Currency type'
                options={[
                  {
                    value: 'all',
                    text: 'All',
                  },
                  {
                    value: 'fiat',
                    text: 'Fiat',
                  },
                  {
                    value: 'crypto',
                    text: 'Crypto',
                  },
                ]}
              />
            )}
            name='currency_type'
            control={control}
          />
          <Controller
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Is default'
                options={[
                  {
                    value: 'all',
                    text: 'All',
                  },
                  {
                    value: 'true',
                    text: 'Default',
                  },
                  {
                    value: 'false',
                    text: 'Not default',
                  },
                ]}
              />
            )}
            name='default'
            control={control}
          />
          <Controller
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Popularity'
                options={[
                  {
                    value: 'all',
                    text: 'All',
                  },
                  {
                    value: 'true',
                    text: 'Popular',
                  },
                  {
                    value: 'false',
                    text: 'Not popular',
                  },
                ]}
              />
            )}
            name='popular'
            control={control}
          />
          <Controller
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Is active'
                options={[
                  {
                    value: 'all',
                    text: 'All',
                  },
                  {
                    value: 'true',
                    text: 'Active',
                  },
                  {
                    value: 'false',
                    text: 'Blocked',
                  },
                ]}
              />
            )}
            name='active'
            control={control}
          />
          <Controller
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Is token'
                options={[
                  {
                    value: 'all',
                    text: 'All',
                  },
                  {
                    value: 'true',
                    text: 'Token',
                  },
                  {
                    value: 'false',
                    text: 'Not token',
                  },
                ]}
              />
            )}
            name='is_token'
            control={control}
          />

          {/*           
          <Select
            value='is_token'
            onChange={() => {}}
            label={'Is token'}
            options={[
              {
                value: 'all',
                text: 'All',
              },
              {
                value: 'Token',
                text: 'Token',
              },
              {
                value: 'Not token',
                text: 'Not token',
              },
            ]}
          /> */}

          <Input
            label='Created from'
            type='date'
            {...register('created_from')}
          />
          <Input label='Created to' type='date' {...register('created_to')} />
          <Input
            label='Updated from'
            type='date'
            {...register('updated_from')}
          />
          <Input label='Updated to' type='date' {...register('updated_to')} />
        </div>
        <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
          <Button variant='primary' type='submit'>
            Apply
          </Button>
          <Button variant='default' className='mr-3' onClick={handleFormReset}>
            Reset
          </Button>
        </div>
      </form>
    </FilterBox>
  );
};

export default CurrenciesFilter;
