import { FC, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
// components
import ActionsWrapper from 'modules/core/components/actions-wrapper/actions-wrapper';
import Input from 'modules/core/components/input/input';
import Button from 'modules/core/components/button/button';
// import Toggle from 'modules/core/components/toggle/toggle';
import Select from 'modules/core/components/select/select';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  NewCurrencyProps,
  NewCurrencyValues,
} from './currencies-new-currency.interface';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { useCurrencyCreateMutation } from '../../hooks/use-currency-create-mutation';

const NewCurrency: FC<NewCurrencyProps> = () => {
  const currencyCreateMutation = useCurrencyCreateMutation();

  const history = useHistory();
  const validationSchema = useMemo(() => {
    return yup.object().shape({
      code: yup.string().required('Currency code is required'),
      name: yup.string().required('Currency name is required'),
    });
  }, []);
  // form
  const { register, handleSubmit, control } = useForm<NewCurrencyValues>({
    defaultValues: {
      code: '',
      name: '',
      active: 'true',
      default: 'true',
      popular: 'true',
      is_token: 'true',
      currency_type: 'crypto',
      scale: '0',
    },
    resolver: yupResolver(validationSchema),
  });

  // const formValues = watch();
  const { errors } = useFormState({ control });

  const handleFormSubmit = useCallback((data: NewCurrencyValues) => {
    currencyCreateMutation
      .mutateAsync({
        ...data,
        active: JSON.parse(data.active),
        default: JSON.parse(data.default),
        popular: JSON.parse(data.popular),
        is_token: JSON.parse(data.is_token),
        scale: +data.scale,
      })
      .then((res) => {
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
          {/* <div>
            <Toggle
              label='Currency blocked'
              enabled={enabled}
              // @ts-ignore
              onChange={setEnabled}
            />
          </div> */}
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

export default NewCurrency;
