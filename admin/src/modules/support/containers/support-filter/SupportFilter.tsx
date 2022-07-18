import { FC, useCallback, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// components
import FilterBox from 'modules/core/components/filter-box';
import Input from 'modules/core/components/input';
// import Select from 'modules/core/components/select/select';
import Button from 'modules/core/components/button';
import {
  SupportFilterProps,
  SupportFilterValues,
} from './support-filter.interface';
import { useDispatch } from 'react-redux';
import { setSupportFilters } from '../../support.action';

export const supportsFilterInitialValues: SupportFilterValues = {
  id: '',
  name: '',
  description: '',
  status: '',
  user_uid: '',
  created_from: '',
  created_to: '',
  updated_from: '',
  updated_to: '',
};

const SupportFilter: FC<SupportFilterProps> = ({
  isOpen,
  onClose,
  supportFilters,
  // onApply,
  // onReset,
}) => {
  const dispatch = useDispatch();

  // form
  const {
    register,
    handleSubmit,
    reset,
    // watch,
  } = useForm<SupportFilterValues>({
    defaultValues: supportFilters ?? supportsFilterInitialValues,
  });
  // const formValues = watch();

  // refs
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = useCallback(
    (data: SupportFilterValues) => {
      // onApply && onApply(data);
      dispatch(setSupportFilters(data));
    },
    [dispatch]
  );

  const handleFormReset = useCallback(() => {
    reset(supportsFilterInitialValues);
    dispatch(setSupportFilters(supportsFilterInitialValues));
    // onReset && onReset();
  }, [reset, dispatch]);

  useEffect(() => {
    supportFilters && reset(supportFilters);
  }, [supportFilters]);

  return (
    <FilterBox isOpen={isOpen} onClose={onClose}>
      {isOpen && (
        <form onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>
          <div className='grid grid-cols-4 gap-6 px-4 py-6 sm:px-6'>
            <Input placeholder='...' label='ID' {...register('id')} />
            <Input
              placeholder='...'
              label='User Id'
              {...register('user_uid')}
            />
            <Input placeholder='...' label='Name' {...register('name')} />
            <Input
              placeholder='...'
              label='Status'
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
            <Button
              variant='default'
              className='mr-3'
              onClick={handleFormReset}
            >
              Reset
            </Button>
          </div>
        </form>
      )}
    </FilterBox>
  );
};

export default SupportFilter;
