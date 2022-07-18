import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form } from './wallet-table.styled';
import * as yup from 'yup';
import { useLocalization } from 'modules/localization/hooks/use-localization';
// components
import Select from 'modules/core/components/select';
import Button from 'modules/core/components/button';
import { AddWalletFormValues } from 'modules/wallet/containers/add-wallet-card/add-wallet-card.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCurrencyListQuery } from 'modules/currency/hooks/use-currency-list-query';
import { defaultCountCurrenciessPerPage } from 'modules/core/services/pagination.service';
import { useWalletCreateMutation } from 'modules/wallet/hooks/use-create-wallet-mutation';
import { SelectOption } from 'modules/core/components/select/select.interface';
import {
  AddWalletTableProps,
  AddWalletTableRef,
} from './wallet-table.interface';
import { useBoolean } from 'modules/core/hooks/use-boolean';
import { Currency } from 'modules/currency/types/currency.types';

const validationSchema = yup.object({
  currency: yup.string().required(),
});

const AddWalletTable = forwardRef<AddWalletTableRef, AddWalletTableProps>(
  (props, ref) => {
    // hooks
    const { t } = useLocalization();
    // state
    const [isActive, setIsActive] = useBoolean();
    // queries
    const currencyList = useCurrencyListQuery({
      page: 1,
      per_page: defaultCountCurrenciessPerPage,
    });

    const walletCreateMutation = useWalletCreateMutation();

    const currencyOptions = useMemo<SelectOption[]>(() => {
      if (!currencyList.data?.list) {
        return [];
      }

      const newArray = currencyList.data?.list.filter((cur: Currency) => {
        return !props.myWallets.find((wal) => {
          return cur.code === wal.currency;
        });
      });

      return newArray
        ?.filter((currency) => currency.currency_type !== 'fiat')
        .map((currency) => ({
          value: currency.code,
          title: currency.code,
        }));
    }, [currencyList.data, props.myWallets]);

    // form
    const { handleSubmit, control, setValue } = useForm<AddWalletFormValues>({
      defaultValues: {
        currency: null,
      },
      resolver: yupResolver(validationSchema),
    });

    useImperativeHandle(ref, () => ({
      focus: () => {
        setIsActive.on();
      },
    }));

    const handleFormSubmit = useCallback(
      (data: AddWalletFormValues) => {
        const currency = currencyList?.data?.list?.find(
          (c) => c.code === data.currency
        );

        if (currency) {
          walletCreateMutation.mutate(
            {
              currency: currency.code,
              wallet_type: currency.currency_type,
            },
            {
              onSuccess: () => {
                setIsActive.off();
                props.forceRerender();
                setValue('currency', null);
              },
            }
          );
        }
      },
      [currencyList.data, walletCreateMutation.mutate, setIsActive]
    );

    return isActive ? (
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Controller
          control={control}
          render={({ field, fieldState }) => (
            <Select
              value={field.value}
              onChange={field.onChange}
              options={currencyOptions}
              error={!!fieldState.error?.message}
              label={t('MODALS.BALANCE.LBL.CHOOSE_CURRENCY')}
              style={{ width: '50%' }}
            />
          )}
          name='currency'
        />
        <Button
          text={t('PAGES.BALANCE.ADD_WALLET')}
          type='submit'
          style={{
            alignSelf: 'center',
            marginLeft: '15px',
          }}
          isLoading={walletCreateMutation.isLoading}
        />
      </Form>
    ) : (
      <div> </div>
    );
  }
);

export default AddWalletTable;
