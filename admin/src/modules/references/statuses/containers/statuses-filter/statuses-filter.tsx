import { FC } from 'react';
import { useForm } from 'react-hook-form';
// components
import FilterBox from 'modules/core/components/filter-box';
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select/select';
import Button from 'modules/core/components/button';
// types
import type {
  StatusFilterProps,
  StatusFilterValues,
} from './statuses-filter.interface';

export const StatusesFilterInitialValues: StatusFilterValues = {
  status_id: '',
  status_type: '',
  created_from: '',
  created_to: '',
  updated_from: '',
  updated_to: '',
};

const StatusFilter: FC<StatusFilterProps> = ({ isOpen, onClose }) => {
  // form
  const { register } = useForm<StatusFilterValues>({
    defaultValues: StatusesFilterInitialValues,
  });

  return (
    <FilterBox isOpen={isOpen} onClose={onClose}>
      <form>
        <div className='grid grid-cols-4 gap-6 px-4 py-6 sm:px-6'>
          <Input
            placeholder='...'
            label='Status id'
            {...register('status_id')}
          />
          <Input
            placeholder='...'
            label='Status type'
            {...register('status_type')}
          />
          <Select
            value='Balance'
            onChange={() => {}}
            label={'Is active'}
            options={[
              {
                value: 'true',
                text: 'Active',
              },
              {
                value: 'false',
                text: 'Not active',
              },
            ]}
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
          <Button variant='default' className='mr-3'>
            Reset
          </Button>
        </div>
      </form>
    </FilterBox>
  );
};

export default StatusFilter;
