import { FC, useMemo, useCallback, useEffect } from 'react';
// components
import Input from 'modules/core/components/input';
import ActionsWrapper from 'modules/core/components/actions-wrapper';
import Button from 'modules/core/components/button';
import Select from 'modules/core/components/select/select';
// containers
// import Spinner from 'modules/core/components/spinner';
import { CommissionProps } from './commission-edit-form-interface';
import { useCommissionUpdateMutation } from 'modules/commission-settings/hooks/use-commission-update-mutation';
import * as yup from 'yup';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { NewCommissionValues } from '../commission-new-rule/new-commission.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { convertENumberToPlainString } from 'utils/number.utils';

const CommissionEditForm: FC<CommissionProps> = ({
  commission,
  onClose,
  operationOptions,
  currencyOptions,
  groupOptions,
  forceRerender,
}) => {
  // queries
  const commissionUpdateMutation = useCommissionUpdateMutation(commission.id);

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      name: yup.string().required('Name is required'),
      direction: yup.string().required('direction is required'),
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
      name: commission.name,
      currency: commission.currency,
      transaction_type: commission.transaction_type,
      direction: commission.direction,
      min_amount: commission.min_amount,
      percent: commission.percent,
      fix_amount: commission.fix_amount,
      user_group_id: commission.group.id,
      description: commission.description,
    },
    resolver: yupResolver(validationSchema),
  });

  const formValues = watch();
  const { errors } = useFormState({ control });

  const handleFormSubmit = useCallback((data: NewCommissionValues) => {
    commissionUpdateMutation.mutateAsync(data).then((res) => {
      forceRerender && forceRerender();
      res && onClose();
    });
  }, []);

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
      case 'Transfer':
        setValue('direction', formValues.direction);
        break;
      default:
        setValue('direction', '');
    }
  }, [formValues.transaction_type]);

  return (
    <div className='grid grid-cols-1 xs:mx-2 gap-y-4 bg-white rounded-lg md:w-full lg:9/12'>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='w-full grid gap-y-4'
      >
        <Input
          disabled
          label={'Commission ID'}
          placeholder={`${commission.id}`}
        />
        <div>
          <Input placeholder={'...'} label={'name'} {...register('name')} />
          <span className='text-red-600'>{errors?.name?.message}</span>
        </div>
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
          <Controller
            name='min_amount'
            control={control}
            render={({ field }) => (
              <Input
                placeholder={'...'}
                label={'Min amount'}
                value={convertENumberToPlainString(field.value)}
                onChange={field.onChange}
              />
            )}
          />
          <span className='text-red-600'>{errors?.min_amount?.message}</span>
        </div>
        <div>
          <Controller
            name='fix_amount'
            control={control}
            render={({ field }) => (
              <Input
                placeholder={'...'}
                label={'Fix amount'}
                value={convertENumberToPlainString(field.value)}
                onChange={field.onChange}
              />
            )}
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
        <div>
          <Input
            placeholder={'...'}
            label={'Description'}
            {...register('description')}
          />
        </div>

        <Input
          placeholder={new Date(
            commission.created_at * +`1000`
          ).toLocaleString()}
          disabled
          label={'Crated date'}
        />
        <br />
        <ActionsWrapper className='absolute left-0 -bottom-6'>
          <Button
            variant='primary'
            type='submit'
            disabled={commissionUpdateMutation.isLoading}
          >
            Save
          </Button>
          <Button variant='default'>Discard changes</Button>
        </ActionsWrapper>
      </form>
    </div>
  );
};

export default CommissionEditForm;
