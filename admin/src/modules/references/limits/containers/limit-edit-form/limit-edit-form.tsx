import { FC, useMemo, useCallback } from 'react';
// components
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select';
import ActionsWrapper from 'modules/core/components/actions-wrapper';
import Button from 'modules/core/components/button';

import { LimitEditProps, NewLimitValues } from './limit-edit-form-interface';
import { useLimitUpdateMutation } from '../../hooks/use-limit-update-mutation';
import * as yup from 'yup';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const LimitEditForm: FC<LimitEditProps> = ({
  limit,
  onClose,
  operationOptions,
  currencyOptions,
  groupOptions,
  forceRerender,
}) => {
  // queries
  const limitUpdateMutation = useLimitUpdateMutation(limit.id);

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      name: yup.string().required('Name is required'),
      // limit_type: yup.string().required('limit type is required'),
      // period: yup.string().required('period is required'),
      min_amount: yup.number().required('min amount is required'),
      max_amount: yup.number().required('max amount is required'),
      count: yup.number().required('count is required'),
    });
  }, []);
  // form
  const { register, handleSubmit, control } = useForm<NewLimitValues>({
    defaultValues: {
      name: limit.name,
      currency: limit.currency,
      limit_type: limit.limit_type,
      transaction_type: limit.transaction_type,
      period: limit.period,
      count: limit.count,
      min_amount: limit.min_amount,
      max_amount: limit.max_amount,
      user_group_id: limit.group.id,
    },
    resolver: yupResolver(validationSchema),
  });

  const { errors } = useFormState({ control });

  const handleFormSubmit = useCallback((data: NewLimitValues) => {
    limitUpdateMutation.mutateAsync(data).then((res) => {
      forceRerender && forceRerender();
      res && onClose();
    });
  }, []);

  return (
    <div className='grid grid-cols-1 xs:mx-2 gap-y-4 bg-white rounded-lg md:w-full lg:9/12'>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='w-full grid gap-y-4'
      >
        <Input disabled label={'Limit ID'} placeholder={`${limit.id}`} />
        <div>
          <Input placeholder={'...'} label={'Name'} {...register('name')} />
          <span className='text-red-600'>{errors?.name?.message}</span>
        </div>
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
            label={'Max amount'}
            {...register('max_amount')}
          />
          <span className='text-red-600'>{errors?.max_amount?.message}</span>
        </div>
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
                  {
                    value: '1w',
                    text: '1 week',
                  },
                  {
                    value: '1m',
                    text: '1 month',
                  },
                  {
                    value: '1y',
                    text: '1 year',
                  },
                ]}
              />
            )}
          />
        </div>
        <div>
          <Input placeholder={'...'} label={'Count'} {...register('count')} />
          <span className='text-red-600'>{errors?.count?.message}</span>
        </div>

        <Input
          placeholder={new Date(limit.created_at * +`1000`).toLocaleString()}
          disabled
          label={'Crated date'}
        />
        <br />
        <ActionsWrapper className='absolute left-0 -bottom-6'>
          <Button
            variant='primary'
            type='submit'
            disabled={limitUpdateMutation.isLoading}
          >
            Save
          </Button>
          <Button variant='default'>Discard changes</Button>
        </ActionsWrapper>
      </form>
    </div>
  );
};

export default LimitEditForm;
