import { FC, useCallback, useRef, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
// components
import FilterBox from 'modules/core/components/filter-box';
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select/select';
import Button from 'modules/core/components/button';
// types
import type {
  GroupFilterProps,
  GroupFilterValues,
} from './group-filter.interface';
import { useDispatch } from 'react-redux';
import { setGroupFilters } from '../../group.action';

export const groupsFilterInitialValues: GroupFilterValues = {
  id: '',
  name: '',
  is_blocked: 'all',
  // description: '',
  created_from: '',
  created_to: '',
  updated_from: '',
  updated_to: '',
};

const GroupsFilter: FC<GroupFilterProps> = ({
  isOpen,
  onClose,
  groupFilters,
  // onApply,
  // onReset,
}) => {
  const dispatch = useDispatch();
  // form
  const { register, handleSubmit, reset, control } = useForm<GroupFilterValues>(
    {
      defaultValues: groupFilters ?? groupsFilterInitialValues,
    }
  );
  // refs
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = useCallback(
    (data: GroupFilterValues) => {
      // onApply && onApply(data);
      dispatch(setGroupFilters(data));
    },
    [dispatch]
  );

  const handleFormReset = useCallback(() => {
    reset(groupsFilterInitialValues);
    dispatch(setGroupFilters(groupsFilterInitialValues));
    // onReset && onReset();
  }, [reset, dispatch]);

  useEffect(() => {
    groupFilters && reset(groupFilters);
  }, [groupFilters]);

  return (
    <FilterBox isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>
        <div className='grid grid-cols-4 gap-6 px-4 py-6 sm:px-6'>
          <Input placeholder='...' label='Group id' {...register('id')} />
          <Input placeholder='...' label='Group name' {...register('name')} />
          <Controller
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='Is blocked'
                options={[
                  {
                    value: 'all',
                    text: 'All',
                  },
                  {
                    value: 'true',
                    text: 'Blocked',
                  },
                  {
                    value: 'false',
                    text: 'Active',
                  },
                ]}
              />
            )}
            name='is_blocked'
            control={control}
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

export default GroupsFilter;
