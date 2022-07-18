import { FC } from 'react';
import { useForm } from 'react-hook-form';
// components
import FilterBox from 'modules/core/components/filter-box';
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select/select';
import Button from 'modules/core/components/button';
// types
import type {
  CryptoExchangesFilterProps,
  CryptoExchangesFilterValues,
} from './crypto-exchanges-filter.interface';

export const CryptoExchangeFilterInitialValues: CryptoExchangesFilterValues = {
  burse_id: '',
  burse_name: '',
  created_from: '',
  created_to: '',
  updated_from: '',
  updated_to: '',
};

const CryptoExchangeFilter: FC<CryptoExchangesFilterProps> = ({
  isOpen,
  onClose,
}) => {
  // form
  const { register } = useForm<CryptoExchangesFilterValues>({
    defaultValues: CryptoExchangeFilterInitialValues,
  });

  return (
    <FilterBox isOpen={isOpen} onClose={onClose}>
      <form>
        <div className='grid grid-cols-4 gap-6 px-4 py-6 sm:px-6'>
          <Input placeholder='...' label='Burse id' {...register('burse_id')} />
          <Input
            placeholder='...'
            label='Burse name'
            {...register('burse_name')}
          />
          <Select
            value='...'
            onChange={() => {}}
            label={'Is active ?'}
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

export default CryptoExchangeFilter;
