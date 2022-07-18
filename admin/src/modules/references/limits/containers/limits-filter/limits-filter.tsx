import { FC, useRef, useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
// components
import FilterBox from 'modules/core/components/filter-box';
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select/select';
import Button from 'modules/core/components/button';
// types
import type {
  LimitsFilterProps,
  LimitsFilterValues,
} from './limits-filter.interface';
import { useDispatch } from 'react-redux';
import { setLimitFilters } from '../../limit.action';

export const limitsFilterInitialValues: LimitsFilterValues = {
  id: '',
  name: '',
  currency: '',
  limit_type: '',
  transaction_type: '',
  user_group_id: '',
  created_from: '',
  created_to: '',
  updated_from: '',
  updated_to: '',
};

const LimitFilter: FC<LimitsFilterProps> = ({
  isOpen,
  onClose,
  limitFilters,
  operationOptions,
  currencyOptions,
  groupOptions,
}) => {
  const dispatch = useDispatch();
  // form
  const {
    register,
    handleSubmit,
    reset,
    control,
  } = useForm<LimitsFilterValues>({
    defaultValues: limitFilters ?? limitsFilterInitialValues,
  });
  // refs
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = useCallback(
    (data: LimitsFilterValues) => {
      // onApply && onApply(data);
      dispatch(setLimitFilters(data));
    },
    [dispatch]
  );

  const handleFormReset = useCallback(() => {
    reset(limitsFilterInitialValues);
    dispatch(setLimitFilters(limitsFilterInitialValues));
    // onReset && onReset();
  }, [reset, dispatch]);

  useEffect(() => {
    limitFilters && reset(limitFilters);
  }, [limitFilters]);

  return (
    <FilterBox isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>
        <div className='grid grid-cols-4 gap-6 px-4 py-6 sm:px-6'>
          <Input placeholder='...' label='Id' {...register('id')} />
          <Input placeholder='...' label='Name' {...register('name')} />
          <Controller
            name='limit_type'
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Limit type'
                options={[
                  {
                    value: '',
                    text: 'All',
                  },
                  {
                    value: 'by_period',
                    text: 'By period count max qantity of transactions',
                  },
                  {
                    value: 'by_amount',
                    text: 'By period set & count max amount',
                  },
                  {
                    value: 'by_transaction',
                    text: 'BY TRANSACTION SET min and max amounts',
                  },
                ]}
              />
            )}
          />
          <Controller
            name='currency'
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Currency'
                options={
                  currencyOptions
                    ? [{ value: '', text: 'All' }, ...currencyOptions]
                    : []
                }
              />
            )}
          />

          <Controller
            name='transaction_type'
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Transaction type'
                options={
                  operationOptions
                    ? [{ value: '', text: 'All' }, ...operationOptions]
                    : []
                }
              />
            )}
          />

          <Controller
            name='user_group_id'
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='User group'
                options={
                  groupOptions
                    ? [{ value: '', text: 'All' }, ...groupOptions]
                    : []
                }
              />
            )}
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

export default LimitFilter;
