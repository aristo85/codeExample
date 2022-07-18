import { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
// components
import FilterBox from 'modules/core/components/filter-box';
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select';
import Button from 'modules/core/components/button';
import MultiSelect from 'modules/core/components/multi-select';
// import InputCurrency from 'modules/currency/components/input-currency';
// services
import urlSearchService from 'modules/core/services/url-search.service';
import { getHistory } from 'modules/core/services/history.service';
// utils
import { transactionStatuses } from 'modules/transaction/transaction.utils';
// hooks
import { useTransactionTypesListQuery } from 'modules/transaction/hooks/use-transaction-types-list-query';

import type {
  TransactionsFilterProps,
  TransactionsFilterValues,
} from './transactions-filter.interface';
import { useCurrencyListQuery } from 'modules/references/currencies/hooks/use-currency-list-query';
import { SelectOption } from 'modules/core/components/select/select.interface';

export const transactionsFilterInitialValues: TransactionsFilterValues = {
  transaction_id: '',
  total_id: '',
  transaction_external_id: '',
  user_id: '',
  user_wallet_id: '',
  destination_wallet_id: '',
  destination_wallet_external_id: '',
  direction: 'all',
  status: 'all',
  created_from: '',
  created_to: '',
  updated_from: '',
  updated_to: '',
  amount: '',
  currency: [],
  commission: '',
  commission_currency: '',
  description: '',
  type: [],
};

const TransactionsFilter: FC<TransactionsFilterProps> = ({
  isOpen,
  onClose,
  onApply,
  onReset,
}) => {
  // queries
  const transactionTypes = useTransactionTypesListQuery();

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
  } = useForm<TransactionsFilterValues>({
    defaultValues: transactionsFilterInitialValues,
  });
  // memo
  const transactionTypesOptions = useMemo(
    () =>
      transactionTypes.data?.types?.map((transactionType) => ({
        value: transactionType,
        text: transactionType,
      })) ?? [],
    [transactionTypes.data]
  );
  // refs
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = useCallback(
    (data: TransactionsFilterValues) => {
      onApply(data);
    },
    [onApply]
  );

  const handleFormReset = useCallback(() => {
    reset(transactionsFilterInitialValues);
    onReset();
  }, [reset, onReset]);

  useEffect(() => {
    const params = urlSearchService.getUrlSearchParam<
      Partial<TransactionsFilterValues>
    >('transactions_filter');

    if (params) {
      reset({
        ...transactionsFilterInitialValues,
        ...params,
      });

      getHistory().push({
        search: urlSearchService.getClearedUrlSearchParam(
          'transactions_filter'
        ),
      });

      const submitDelay = 100;

      setTimeout(() => {
        handleSubmit(handleFormSubmit)();
      }, submitDelay);
    }
  }, [reset, handleSubmit, handleFormSubmit]);

  return (
    <FilterBox isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>
        <div className='grid grid-cols-4 gap-6 px-4 py-6 sm:px-6'>
          <Input
            placeholder='...'
            label='Transaction id'
            {...register('transaction_id')}
          />
          <Input placeholder='...' label='Total id' {...register('total_id')} />
          <Input
            placeholder='...'
            label='Transaction external id'
            {...register('transaction_external_id')}
          />
          <Input placeholder='...' label='User id' {...register('user_id')} />
          <Input
            placeholder='...'
            label='User wallet id'
            {...register('user_wallet_id')}
          />
          <Input
            placeholder='...'
            label='Destination wallet id'
            {...register('destination_wallet_id')}
          />
          <Input
            placeholder='...'
            label='Destination wallet external id'
            {...register('destination_wallet_external_id')}
          />
          {/* <MultiSelect /> */}
          <Controller
            name='type'
            control={control}
            render={({ field }) => (
              <MultiSelect
                placeholder='All'
                value={
                  transactionTypesOptions
                    ? transactionTypesOptions.filter((el) =>
                        field.value.includes(el.value)
                      )
                    : []
                }
                onChange={(a) => {
                  const newArr = a.map((el: SelectOption) => el.value);

                  field.onChange(newArr);
                }}
                label='Type'
                options={transactionTypesOptions}
              />
            )}
          />
          <Controller
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Direction'
                options={[
                  {
                    value: 'all',
                    text: 'All',
                  },
                  {
                    value: 'in',
                    text: 'In',
                  },
                  {
                    value: 'out',
                    text: 'Out',
                  },
                ]}
              />
            )}
            name='direction'
            control={control}
          />
          <Controller
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Status'
                options={[
                  {
                    value: 'all',
                    text: 'All',
                  },
                  ...transactionStatuses.map((status) => ({
                    value: status,
                    text: status,
                  })),
                ]}
              />
            )}
            name='status'
            control={control}
          />
          <Input placeholder='...' label='Amount' {...register('amount')} />
          {/* <InputCurrency
            label='Amount'
            amountInputRegister={register('amount')}
            currencyInputRegister={register('currency')}
          /> */}
          <Controller
            name='currency'
            control={control}
            render={({ field }) => (
              <MultiSelect
                placeholder='All'
                value={
                  currencyOptions
                    ? currencyOptions.filter((el) =>
                        field.value.includes(el.value)
                      )
                    : []
                }
                onChange={(a) => {
                  const newArr = a.map((el: SelectOption) => el.value);

                  field.onChange(newArr);
                }}
                label='Currency'
                options={currencyOptions ?? []}
              />
            )}
          />
          <Input
            placeholder='...'
            label='Commission'
            {...register('commission')}
          />
          {/* <InputCurrency
            label='Commission'
            amountInputRegister={register('commission')}
            currencyInputRegister={register('commission_currency')}
          /> */}
          <Input
            placeholder='...'
            label='Description'
            {...register('description')}
          />
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

export default TransactionsFilter;
