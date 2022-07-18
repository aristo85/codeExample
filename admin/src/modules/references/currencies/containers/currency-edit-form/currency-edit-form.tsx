import { FC, useMemo, useCallback } from 'react';
// components
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select';
import ActionsWrapper from 'modules/core/components/actions-wrapper';
import Button from 'modules/core/components/button';
// containers
import { CurrencyProps } from '../currency-edit-form/currency-edit-form.interface';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { UpdateCurrencyValues } from '../currencies-new-currency/currencies-new-currency.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCurrencyUpdateMutation } from '../../hooks/use-currency-update-mutation';

const CurrencyEditForm: FC<CurrencyProps> = ({
  currency,
  onClose,
  forceRerender,
}) => {
  const currencyUpdateMutation = useCurrencyUpdateMutation(currency.code);

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      code: yup.string().required('Currency code is required'),
      name: yup.string().required('Currency name is required'),
    });
  }, []);
  // form
  const { register, handleSubmit, control } = useForm<UpdateCurrencyValues>({
    defaultValues: {
      code: currency.code,
      name: currency.name,
      active: currency.active.toString(),
      default: currency.default.toString(),
      popular: currency.popular.toString(),
      is_token: currency.is_token.toString(),
      currency_type: currency.currency_type.toString(),
      scale: currency.scale.toString(),
    },
    resolver: yupResolver(validationSchema),
  });

  const { errors } = useFormState({ control });

  const handleFormSubmit = useCallback((data: UpdateCurrencyValues) => {
    currencyUpdateMutation
      .mutateAsync({
        ...data,
        active: JSON.parse(data.active),
        default: JSON.parse(data.default),
        popular: JSON.parse(data.popular),
        is_token: JSON.parse(data.is_token),
        scale: +data.scale,
      })
      .then((res) => {
        forceRerender && forceRerender();
        res && onClose();
      });
  }, []);

  return (
    <div className='grid grid-cols-1 xs:mx-2 gap-y-4 bg-white rounded-lg md:w-full lg:9/12'>
      <Input disabled label={'Currency ID'} placeholder={`${currency.id}`} />
      {/* <ActionsWrapper> */}
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='w-full grid gap-y-4'
      >
        <div>
          <Input
            placeholder={'...'}
            label={'Currency Code'}
            {...register('code')}
          />
          <span className='text-red-600'>{errors?.code?.message}</span>
        </div>

        <div>
          <Input placeholder={'...'} label={'Name'} {...register('name')} />
          <span className='text-red-600'>{errors?.name?.message}</span>
        </div>

        <Controller
          name='active'
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onChange={field.onChange}
              label='Active'
              options={[
                {
                  value: 'true',
                  text: 'Active',
                },
                {
                  value: 'false',
                  text: 'Blocked',
                },
              ]}
            />
          )}
        />
        <Controller
          name='default'
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onChange={field.onChange}
              label='Default'
              options={[
                {
                  value: 'true',
                  text: 'Default',
                },
                {
                  value: 'false',
                  text: 'Not default',
                },
              ]}
            />
          )}
        />
        <Controller
          name='popular'
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onChange={field.onChange}
              label='Popular'
              options={[
                {
                  value: 'true',
                  text: 'Popular',
                },
                {
                  value: 'false',
                  text: 'Not Popular',
                },
              ]}
            />
          )}
        />
        <Controller
          name='is_token'
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onChange={field.onChange}
              label='Is token'
              options={[
                {
                  value: 'true',
                  text: 'Token',
                },
                {
                  value: 'false',
                  text: 'Not Token',
                },
              ]}
            />
          )}
        />
        <Controller
          name='currency_type'
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onChange={field.onChange}
              label='Currency Type'
              options={[
                {
                  value: 'fiat',
                  text: 'Fiat',
                },
                {
                  value: 'crypto',
                  text: 'Crypto',
                },
              ]}
            />
          )}
        />
        <Controller
          name='scale'
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onChange={field.onChange}
              label='Scale'
              options={[...Array(+'10').keys()].map((el) => ({
                value: `${el}`,
                text: `${el}`,
              }))}
            />
          )}
        />

        <Input
          placeholder={new Date(currency.created_at * +`1000`).toLocaleString()}
          disabled
          label={'Crated date'}
        />
        <br />
        <ActionsWrapper className='absolute left-0 -bottom-6'>
          <Button variant='primary' type='submit'>
            Save
          </Button>
          <Button variant='default'>Discard changes</Button>
        </ActionsWrapper>
      </form>
    </div>
  );
};

export default CurrencyEditForm;
