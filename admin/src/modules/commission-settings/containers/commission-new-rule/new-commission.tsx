import { FC, useMemo, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// components
import ActionsWrapper from 'modules/core/components/actions-wrapper/actions-wrapper';
import Input from 'modules/core/components/input/input';
import Button from 'modules/core/components/button/button';
import Select from 'modules/core/components/select';
import {
  NewCommissionProps,
  NewCommissionValues,
} from './new-commission.interface';
import * as yup from 'yup';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCommissionCreateMutation } from '../../hooks/use-commission-create-mutation';
import { useOperationListQuery } from 'modules/references/operation/hooks/use-operation-list-query';
import { useCurrencyListQuery } from 'modules/references/currencies/hooks/use-currency-list-query';
import { useGroupListQuery } from 'modules/references/buisness-groups/hooks/use-group-list-query';

const NewCommission: FC<NewCommissionProps> = () => {
  const commissionCreateMutation = useCommissionCreateMutation();

  const history = useHistory();

  const operationOptions = useOperationListQuery({
    page: 1,
    per_page: 20,
  }).data?.types?.map((el: any) => ({
    value: el,
    text: el,
  }));

  const currencyOptions = useCurrencyListQuery({
    page: 1,
    per_page: 50,
  }).data?.list?.map((el) => ({
    value: el.code,
    text: el.code,
  }));

  const groupOptions = useGroupListQuery({
    page: 1,
    per_page: 50,
  }).data?.list?.map((el) => ({
    value: el.id,
    text: el.name,
  }));

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      name: yup.string().required('Name is required'),
      currency: yup.string().required('Currency is required'),
      direction: yup.string().required('direction is required'),
      transaction_type: yup.string().required('transaction type is required'),
      user_group_id: yup.string().required('user group id is required'),
      min_amount: yup.number().required('min amount is required'),
      fix_amount: yup.number().required('fix amount is required'),
      percent: yup.number().required('percent is required'),
    });
  }, []);
  // form
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
  } = useForm<NewCommissionValues>({
    defaultValues: {
      name: '',
      currency: '',
      transaction_type: '',
      direction: '',
      fix_amount: 0,
      percent: 0,
      min_amount: 0,
      user_group_id: '',
      description: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const formValues = watch();
  const { errors } = useFormState({ control });

  const handleFormSubmit = useCallback((data: NewCommissionValues) => {
    commissionCreateMutation.mutateAsync(data).then((res) => {
      res && history.goBack();
    });
  }, []);

  const handleCancel = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  useEffect(() => {
    switch (formValues.transaction_type) {
      case 'Buy':
      case 'Deposit':
        setValue('direction', 'in');
        break;
      case 'Withdrawal':
      case 'Sell':
      case 'Exchange':
        setValue('direction', 'out');
        break;
      default:
        setValue('direction', '');
    }
  }, [formValues.transaction_type]);

  return (
    <ActionsWrapper>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='w-full grid gap-y-4'
      >
        <div className='md:grid grid-flow-row grid-cols-2 grid-rows-4 gap-4'>
          <div>
            <Input placeholder={'...'} label={'Name'} {...register('name')} />
            <span className='text-red-600'>{errors?.name?.message}</span>
          </div>
          <div>
            <Controller
              name='currency'
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onChange={field.onChange}
                  label='Currency'
                  options={currencyOptions ?? []}
                />
              )}
            />
            <span className='text-red-600'>{errors?.currency?.message}</span>
          </div>
          <div>
            <Controller
              name='transaction_type'
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onChange={field.onChange}
                  label='Transaction type'
                  options={operationOptions ?? []}
                />
              )}
            />
            <span className='text-red-600'>
              {errors?.transaction_type?.message}
            </span>
          </div>
          {formValues.transaction_type === 'Transfer' ? (
            <div>
              <Controller
                name='direction'
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onChange={field.onChange}
                    label='Direction'
                    options={[
                      {
                        text: 'In',
                        value: 'in',
                      },
                      {
                        text: 'Out',
                        value: 'out',
                      },
                    ]}
                  />
                )}
              />
              <span className='text-red-600'>{errors?.direction?.message}</span>
            </div>
          ) : (
            <Input
              disabled
              label={'Direction'}
              placeholder={
                formValues.direction && formValues.direction === 'in'
                  ? 'In'
                  : 'Out'
              }
            />
          )}
          <div>
            <Controller
              name='user_group_id'
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onChange={field.onChange}
                  label='User group'
                  options={groupOptions ?? []}
                />
              )}
            />
            <span className='text-red-600'>
              {errors?.user_group_id?.message}
            </span>
          </div>

          {/* 
          <div>
            <Input
              placeholder={'...'}
              label={'Transaction type'}
              {...register('transaction_type')}
            />
            <span className='text-red-600'>
              {errors?.transaction_type?.message}
            </span>
          </div> */}
          <div>
            <Input
              placeholder={'...'}
              label={'Min amount'}
              {...register('min_amount')}
            />
            <span className='text-red-600'>{errors?.min_amount?.message}</span>
          </div>
          <div>
            <Input
              placeholder={'...'}
              label={'Fix amount'}
              {...register('fix_amount')}
            />
            <span className='text-red-600'>{errors?.fix_amount?.message}</span>
          </div>
          <div>
            <Input
              placeholder={'...'}
              label={'Percent'}
              {...register('percent')}
            />
            <span className='text-red-600'>{errors?.percent?.message}</span>
          </div>
          {/* <div>
            <Input
              placeholder={'...'}
              label={'User group id'}
              {...register('user_group_id')}
            />
            <span className='text-red-600'>
              {errors?.user_group_id?.message}
            </span>
          </div> */}
          <div>
            <Input
              placeholder={'...'}
              label={'Description'}
              {...register('description')}
            />
          </div>
        </div>
        <div className='mt-3'>
          <Button variant='primary' type='submit'>
            Create
          </Button>
          <Button onClick={(e) => handleCancel(e)} className='ml-4'>
            Cancel
          </Button>
        </div>
      </form>
    </ActionsWrapper>
  );
};

export default NewCommission;
