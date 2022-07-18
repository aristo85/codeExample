import { FC, useCallback, useRef, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
// components
import FilterBox from 'modules/core/components/filter-box';
import Input from 'modules/core/components/input';
import Button from 'modules/core/components/button';
import MultiSelect from 'modules/core/components/multi-select';
import {
  CommissionFilterProps,
  CommissionFilterValues,
} from './commission-filter.interface';
import { setCommissionFilters } from 'modules/commission-settings/commission.action';
import { useDispatch } from 'react-redux';
import { SelectOption } from 'modules/core/components/select/select.interface';

export const commissionsFilterInitialValues: CommissionFilterValues = {
  id: '',
  name: '',
  currency: [],
  transaction_type: [],
  fix_amount: null,
  percent: null,
  min_amount: null,
  user_group_id: [],
  created_from: '',
  created_to: '',
  updated_from: '',
  updated_to: '',
};

const CommissionFilter: FC<CommissionFilterProps> = ({
  isOpen,
  onClose,
  // onApply,
  // onReset,
  operationOptions,
  currencyOptions,
  groupOptions,
  commissionFilters,
}) => {
  const dispatch = useDispatch();
  // form
  const {
    register,
    handleSubmit,
    reset,
    control,
  } = useForm<CommissionFilterValues>({
    defaultValues: commissionFilters ?? commissionsFilterInitialValues,
  });
  // refs
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = useCallback(
    (data: CommissionFilterValues) => {
      // onApply && onApply(data);
      dispatch(setCommissionFilters(data));
    },
    [dispatch]
  );

  const handleFormReset = useCallback(() => {
    reset(commissionsFilterInitialValues);
    dispatch(setCommissionFilters(commissionsFilterInitialValues));
    // onReset && onReset();
  }, [reset, dispatch]);

  useEffect(() => {
    commissionFilters && reset(commissionFilters);
  }, [commissionFilters]);

  return (
    <FilterBox isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>
        <div className='grid grid-cols-4 gap-6 px-4 py-6 sm:px-6'>
          <Input placeholder='...' label='Commission ID' {...register('id')} />
          <Input placeholder='...' label='Name' {...register('name')} />
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

          <Controller
            name='transaction_type'
            control={control}
            render={({ field }) => (
              <MultiSelect
                placeholder='All'
                value={
                  operationOptions
                    ? operationOptions.filter((el) =>
                        field.value.includes(el.value)
                      )
                    : []
                }
                onChange={(a) => {
                  const newArr = a.map((el: SelectOption) => el.value);

                  field.onChange(newArr);
                }}
                label='Transaction type'
                options={operationOptions ?? []}
              />
            )}
          />

          <Controller
            name='user_group_id'
            control={control}
            render={({ field }) => (
              <MultiSelect
                placeholder='All'
                value={
                  groupOptions
                    ? groupOptions.filter((el) =>
                        field.value.includes(el.value)
                      )
                    : []
                }
                onChange={(a) => {
                  const newArr = a.map((el: SelectOption) => el.value);

                  field.onChange(newArr);
                }}
                label='User group'
                options={groupOptions ?? []}
              />
            )}
          />

          <Input
            placeholder='...'
            label='Fix amount'
            {...register('fix_amount')}
          />
          <Input
            placeholder='...'
            label='Min amount'
            {...register('min_amount')}
          />
          <Input placeholder='...' label='Percent' {...register('percent')} />

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

export default CommissionFilter;
