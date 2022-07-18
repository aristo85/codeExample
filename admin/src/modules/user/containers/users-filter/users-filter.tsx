import { FC, useCallback, useRef, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
// components
import FilterBox from 'modules/core/components/filter-box';
import Input from 'modules/core/components/input';
import Button from 'modules/core/components/button';
import Select from 'modules/core/components/select';
import MultiSelect from 'modules/core/components/multi-select';

import type {
  UsersFilterProps,
  UsersFilterValues,
} from './users-filter.interface';
import { useGroupListQuery } from 'modules/references/buisness-groups/hooks/use-group-list-query';
import { useDispatch } from 'react-redux';
import { setUserFilters } from 'modules/user/user.actions';
import { SelectOption } from 'modules/core/components/select/select.interface';

export const usersFilterInitialValues: UsersFilterValues = {
  user_id: '',
  user_email: '',
  user_name: '',
  user_surname: '',
  user_acc_type: 'all',
  user_verification: 'all',
  user_status: 'all',
  created_from: '',
  created_to: '',
  updated_from: '',
  updated_to: '',
  user_group: [],
};

const UsersFilter: FC<UsersFilterProps> = ({
  isOpen,
  onClose,
  profileFilters,
  onApply,
  onReset,
}) => {
  const dispatch = useDispatch();

  const groupOptions = useGroupListQuery({
    page: 1,
    per_page: 50,
  }).data?.list?.map((el) => ({
    value: el.id,
    text: el.name,
  }));

  // form
  const { register, handleSubmit, reset, control } = useForm<UsersFilterValues>(
    {
      defaultValues: profileFilters ?? usersFilterInitialValues,
    }
  );
  // refs
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = useCallback(
    (data: UsersFilterValues) => {
      onApply && onApply(data);
      dispatch(setUserFilters(data));
    },
    [dispatch]
  );

  const handleFormReset = useCallback(() => {
    reset(usersFilterInitialValues);
    dispatch(setUserFilters(usersFilterInitialValues));
    onReset && onReset();
  }, [reset, dispatch]);

  useEffect(() => {
    profileFilters && reset(profileFilters);
  }, [profileFilters]);

  return (
    <FilterBox isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>
        <div className='grid grid-cols-4 gap-6 px-4 py-6 sm:px-6'>
          <Input placeholder='...' label='User id' {...register('user_id')} />
          <Input
            placeholder='...'
            label='User E-mail'
            {...register('user_email')}
          />
          <Input
            placeholder='...'
            label='First name'
            {...register('user_name')}
          />
          <Input
            placeholder='...'
            label='Last name'
            {...register('user_surname')}
          />
          <Controller
            name='user_acc_type'
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
                    value: 'true',
                    text: 'Business',
                  },
                  {
                    value: 'false',
                    text: 'Personal',
                  },
                ]}
              />
            )}
          />
          <Controller
            name='user_verification'
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
                    value: 'Verified',
                    text: 'Verified',
                  },
                  {
                    value: 'Unverified',
                    text: 'Unverified',
                  },
                  {
                    value: 'Blocked',
                    text: 'Blocked',
                  },
                  {
                    value: 'In progress',
                    text: 'In progress',
                  },
                ]}
              />
            )}
          />
          <Controller
            name='user_group'
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
                options={
                  groupOptions
                    ? [{ value: '', text: 'none' }, ...groupOptions]
                    : []
                }
              />
            )}
          />
          <Controller
            name='user_status'
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Account blocked'
                options={[
                  {
                    value: 'all',
                    text: 'All',
                  },
                  {
                    value: 'active',
                    text: 'Active',
                  },
                  {
                    value: 'blocked',
                    text: 'Blocked',
                  },
                ]}
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

export default UsersFilter;
