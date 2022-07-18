import { FC, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
// components
import FilterBox from 'modules/core/components/filter-box';
import Input from 'modules/core/components/input';
import Button from 'modules/core/components/button';
import Select from 'modules/core/components/select';
// import InputCurrency from 'modules/currency/components/input-currency';

import type {
  TransactionsFilterProps,
  WalletsFilterValues,
} from './wallets-filter.interface';
import { useCurrencyListQuery } from 'modules/references/currencies/hooks/use-currency-list-query';

export const transactionsFilterInitialValues: WalletsFilterValues = {
  wallet_id: '',
  user_id: '',
  type: 'all',
  amount: '',
  amount_currency: '',
  created_from: '',
  created_to: '',
  updated_from: '',
  updated_to: '',
  currency: '',
  email: '',
  name: '',
  surname: '',
  account_type: '',
  verification: '',
};

const WalletsFilter: FC<TransactionsFilterProps> = ({
  isOpen,
  onClose,
  onApply,
  onReset,
}) => {
  const currencyOptions = useCurrencyListQuery({
    page: 1,
    per_page: 50,
  }).data?.list?.map((el) => ({
    value: el.code,
    text: el.code,
  }));

  // form
  const {
    register,
    handleSubmit,
    reset,
    control,
  } = useForm<WalletsFilterValues>({
    defaultValues: transactionsFilterInitialValues,
  });

  const handleFormSubmit = useCallback(
    (data: WalletsFilterValues) => {
      onApply(data);
    },
    [onApply]
  );

  const handleFormReset = useCallback(() => {
    reset();
    onReset();
  }, [reset, onReset]);

  return (
    <FilterBox isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className='grid grid-cols-4 gap-6 px-4 py-6 sm:px-6'>
          <Input
            placeholder='...'
            label='Wallet id'
            {...register('wallet_id')}
          />
          <Input placeholder='...' label='User id' {...register('user_id')} />
          <Input placeholder='...' label='User Email' {...register('email')} />
          {/* <Controller
            name='type'
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Type'
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
          /> */}
          <Controller
            name='currency'
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Wallet currency'
                options={
                  currencyOptions
                    ? [{ value: '', text: 'none' }, ...currencyOptions]
                    : []
                }
              />
            )}
          />
          <Input label='Amount' {...register('amount')} />
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
          {/* <Input placeholder='...' label='User E-mail' />
          <Input placeholder='...' label='Name' />
          <Input placeholder='...' label='Surname' />
          <Controller
            name='type'
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Account type'
                options={[
                  {
                    value: 'all',
                    text: 'All',
                  },
                  {
                    value: 'private',
                    text: 'Private',
                  },
                  {
                    value: 'business',
                    text: 'Business',
                  },
                ]}
              />
            )}
          /> */}
          {/* <Controller
            name='type'
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Verification'
                options={[
                  {
                    value: 'all',
                    text: 'All',
                  },
                  {
                    value: 'verified',
                    text: 'Verified',
                  },
                  {
                    value: 'Unverified',
                    text: 'Unverified',
                  },
                ]}
              />
            )}
          /> */}
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

export default WalletsFilter;
