import { forwardRef, useCallback, useImperativeHandle, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// hooks
import { useBoolean } from 'modules/core/hooks/use-boolean';
import { useCurrencyListQuery } from 'modules/currency/hooks/use-currency-list-query';
import { useWalletCreateMutation } from 'modules/wallet/hooks/use-create-wallet-mutation';
import { useLocalization } from 'modules/localization/hooks/use-localization';
// components
import Select from 'modules/core/components/select';
import Button from 'modules/core/components/button';
// types
import type { SelectOption } from 'modules/core/components/select/select.interface';
// services
import { defaultCountCurrenciessPerPage } from 'modules/core/services/pagination.service';

import {
  Root,
  AddContent,
  AddIconWrapper,
  PlusIcon,
  Form,
} from './add-wallet-card.styled';
import type {
  AddWalletFormValues,
  AddWalletCardRef,
  AddWalletCardProps,
} from './add-wallet-card.interface';
import { Currency } from 'modules/currency/types/currency.types';

const validationSchema = yup.object({
  currency: yup.string().required(),
});

const AddWalletCard = forwardRef<AddWalletCardRef, AddWalletCardProps>(
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

      // newArray.filter((wal) => !props.myWallets.includes(wal));

      if (props.walletTypeFilter === 'tokens') {
        return newArray
          ?.filter((currency) => currency.is_token)
          .map((currency) => ({
            value: currency.code,
            title: currency.code,
          }));
      }

      if (
        props.walletTypeFilter === 'popularcrypto' ||
        props.walletTypeFilter === 'crypto'
      ) {
        return newArray
          ?.filter(
            (currency) =>
              currency.currency_type !== 'fiat' &&
              currency.currency_type !== 'tokens'
          )
          .map((currency) => ({
            value: currency.code,
            title: currency.code,
          }));
      }

      return newArray
        ?.filter((currency) => currency.currency_type !== 'fiat')
        .map((currency) => ({
          value: currency.code,
          title: currency.code,
        }));

      // return currencyList.data?.list
      // ?.filter(
      //   (currency) =>
      //     currency.currency_type !== 'fiat'
      // )
      // .map((currency) => ({
      //   value: currency.code,
      //   title: currency.code,
      // }));
    }, [currencyList.data, props.walletTypeFilter, props.myWallets]);

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
        const currency = currencyList.data?.list?.find(
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

    return (
      <div>
        <Root>
          {isActive ? (
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
                  />
                )}
                name='currency'
              />
              <Button
                text={t('PAGES.BALANCE.ADD_WALLET')}
                type='submit'
                style={{ width: '100%' }}
                isLoading={walletCreateMutation.isLoading}
              />
            </Form>
          ) : (
            <AddContent onClick={setIsActive.on}>
              <AddIconWrapper />
              <PlusIcon />
            </AddContent>
          )}
        </Root>
      </div>
    );
  }
);

export default AddWalletCard;
