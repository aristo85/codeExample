import { FC, useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
// components
import ActionsWrapper from 'modules/core/components/actions-wrapper/actions-wrapper';
import Input from 'modules/core/components/input/input';
import Button from 'modules/core/components/button/button';
import * as yup from 'yup';
import Select from 'modules/core/components/select/select';

import { CreateNewLimitProps } from './create-new-limit.interface';
import { useLimitCreateMutation } from '../../hooks/use-limit-create-mutation';
import { useOperationListQuery } from 'modules/references/operation/hooks/use-operation-list-query';
import { useCurrencyListQuery } from 'modules/references/currencies/hooks/use-currency-list-query';
import { useGroupListQuery } from 'modules/references/buisness-groups/hooks/use-group-list-query';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { NewLimitValues } from '../limit-edit-form/limit-edit-form-interface';
import { yupResolver } from '@hookform/resolvers/yup';

const CreateNewLimit: FC<CreateNewLimitProps> = () => {
  const history = useHistory();
  // query
  const limitCreateMutation = useLimitCreateMutation();

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
      // limit_type: yup.string().required('limit type is required'),
      // period: yup.string().required('period is required'),
      min_amount: yup.number().required('min amount is required'),
      max_amount: yup.number().required('max amount is required'),
      count: yup.number().required('count is required'),
      currency: yup.string().required('Currency is required'),
      transaction_type: yup.string().required('transaction type is required'),
      user_group_id: yup.string().required('user group id is required'),
    });
  }, []);
  // form
  const { register, handleSubmit, control, watch } = useForm<NewLimitValues>({
    defaultValues: {
      name: '',
      currency: '',
      limit_type: '',
      transaction_type: '',
      period: '',
      count: 0,
      min_amount: '0',
      max_amount: '0',
      user_group_id: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const formValues = watch();
  const { errors } = useFormState({ control });

  const handleFormSubmit = useCallback((data: NewLimitValues) => {
    limitCreateMutation.mutateAsync(data).then((res) => {
      res && history.goBack();
    });
  }, []);

  const handleCancel = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <ActionsWrapper>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='w-full grid gap-y-4'
      >
        <div className='md:grid grid-flow-row grid-cols-2 grid-rows-4 gap-4'>
          <div>
            <Input
              placeholder={'...'}
              label={'Limit name'}
              {...register('name')}
            />
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
              name='limit_type'
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onChange={field.onChange}
                  label='Limit type'
                  options={[
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

          {formValues.limit_type === 'by_transaction' ? (
            <Input disabled label={'Period'} placeholder='...' />
          ) : (
            <div>
              <Controller
                name='period'
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onChange={field.onChange}
                    label='Period'
                    options={[
                      {
                        value: '1d',
                        text: '1 day',
                      },
                      // {
                      //   value: '1w',
                      //   text: '1 week',
                      // },
                      {
                        value: '1m',
                        text: '1 month',
                      },
                      // {
                      //   value: '1y',
                      //   text: '1 year',
                      // },
                    ]}
                  />
                )}
              />
            </div>
          )}

          <div>
            <Input
              disabled={
                formValues.limit_type === 'by_amount' ||
                formValues.limit_type === 'by_transaction'
              }
              placeholder={'...'}
              label={'Count transaction  qantity'}
              {...register('count')}
            />
            <span className='text-red-600'>{errors?.count?.message}</span>
          </div>

          <div>
            <Input
              disabled={
                formValues.limit_type === 'by_period' ||
                formValues.limit_type === 'by_amount'
              }
              placeholder={'...'}
              label={'Min amount'}
              {...register('min_amount')}
            />
            <span className='text-red-600'>{errors?.min_amount?.message}</span>
          </div>

          <div>
            <Input
              disabled={formValues.limit_type === 'by_period'}
              placeholder={'...'}
              label={'Max amount'}
              {...register('max_amount')}
            />
            <span className='text-red-600'>{errors?.max_amount?.message}</span>
          </div>

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

export default CreateNewLimit;
