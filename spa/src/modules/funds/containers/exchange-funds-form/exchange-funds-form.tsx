import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 } from 'uuid';
// components
import Select from 'modules/core/components/select';
import Input from 'modules/core/components/input';
import Icon from 'modules/core/components/icon';
import InputNumber from 'modules/core/components/input-number';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
import { useWalletListQuery } from 'modules/wallet/hooks/use-wallet-list-query';
import { useRateCreateMutation } from 'modules/funds/hooks/use-rate-create-mutation';
import { useProfileQuery } from 'modules/user/hooks/use-profile-query';
import { useLocation } from 'react-router';
// types
import type { SelectOption } from 'modules/core/components/select/select.interface';
// utils
import {
  allPairs,
  currencyMetadataMap,
  getDestinationWalletsPairOptions,
  getExchangeWalletsSelectOptions,
} from 'modules/wallet/wallet.utils';
// selectors
import { selectUserId } from 'modules/user/user.selectors';

import type { ExchangeFundsFormValues } from './exchange-funds-form.interface';
import {
  Root,
  FormContent,
  Form,
  Info,
  FormRow,
  FormSubmit,
  InfoBlockText,
  InfoBlockTitle,
  InfoBlock,
  InfoTitle,
} from './exchange-funds-form.styled';
import ExchangeFundsConfirmData from '../exchange-funds-confirm-data';
import { useExchangeOrderCreateMutation } from '../../hooks/use-exchange-order-create-mutation';
import { useCommissionQuery } from 'modules/funds/hooks/use-commission-query';
import { setTimerExchange } from 'modules/funds/services/funds-timer.service';
import { useDebounce } from 'modules/core/hooks/use-debounce';
import {
  defaultCountCurrenciessPerPage,
  defaultCountWalletsPerPage,
} from 'modules/core/services/pagination.service';
import { useCurrencyListQuery } from 'modules/currency/hooks/use-currency-list-query';
import { useWalletCreateMutation } from 'modules/wallet/hooks/use-create-wallet-mutation';
import { toast } from 'react-toastify';
// import { useEchagnePairsListQuery } from 'modules/funds/hooks/use-exchange-trade-pairs-query';

const ExchangeFundsForm: FC = () => {
  const bounceDelay = 500;
  // hooks
  const { t } = useLocalization();
  const params = useLocation();
  const urlState: any = params.state;
  // const history = useHistory();

  // state
  const [step, setStep] = useState<'form' | 'confirm'>('form');
  const [maxValueActiveWalet, setmaxValueActiveWalet] = useState(0);
  // queries
  const wallets = useWalletListQuery({
    page: 1,
    per_page: defaultCountWalletsPerPage,
  });
  const currencyList = useCurrencyListQuery({
    page: 1,
    per_page: defaultCountCurrenciessPerPage,
  });
  const walletCreateMutation = useWalletCreateMutation();
  // const exchangePairs = useEchagnePairsListQuery();

  const rateCreateMutation = useRateCreateMutation();
  const exchangeOrderCreateMutation = useExchangeOrderCreateMutation();
  const profile = useProfileQuery();

  const validationSchema = yup.object().shape({
    targetCurrency: yup.string().required(),
    destinationCurrency: yup.string().required(),
    debit: yup
      .number()
      .required()
      // .min(
      //   minCommission,
      //   `${t('FORMS.MIN_LIMIT')} ${minCommission.toFixed(numberFixed)}`
      // )
      .max(maxValueActiveWalet, `${t('FORMS.EXCHANGE.MAX_LIMIT')}`),
  });

  // form
  const {
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm<ExchangeFundsFormValues>({
    defaultValues: {
      targetCurrency: urlState?.clickedFrom ?? null,
      destinationCurrency: null,
      debit: '',
    },
    resolver: yupResolver(validationSchema),
  });
  const formValues = watch();

  const debounceAmount = useDebounce(formValues.debit, bounceDelay);

  const getAvailableCurrenciesForTargeted = useMemo(
    () =>
      getDestinationWalletsPairOptions(
        // exchangePairs?.data ?? [],
        formValues.targetCurrency
      ),
    [formValues.targetCurrency]
  );

  // query
  const commissionQuery = useCommissionQuery({
    currency: formValues.targetCurrency,
    amount: formValues.debit,
    direction: 'out',
    transaction_type: 'Exchange',
  });

  // memo
  const userId = selectUserId(profile.data);
  const targetWalletOptions = useMemo<SelectOption[]>(
    () =>
      getExchangeWalletsSelectOptions(
        wallets.data?.list?.filter(
          (wallet) => wallet.currency !== formValues.destinationCurrency
        ) ?? []
      ),
    [wallets.data, formValues.destinationCurrency]
  );
  // const destinationWalletOptions = useMemo(
  //   () =>
  //     getWalletsSelectOptions(
  //       wallets.data?.list?.filter(
  //         (wallet) => wallet.currency !== formValues.targetCurrency
  //       ) ?? []
  //     ),
  //   [wallets.data, formValues.targetCurrency]
  // );

  const handleFormSubmit = useCallback(() => {
    setStep('confirm');
  }, []);

  const handleExchangeClick = () => {
    exchangeOrderCreateMutation.mutate(
      {
        user_uid: userId,
        from_currency: formValues.targetCurrency,
        to_currency: formValues.destinationCurrency,
        from_value: formValues.debit,
        session_uid: v4(),
      },
      {
        onSuccess: () => {
          resetForm();
          setStep('form');
        },
      }
    );
  };

  const resetForm = () => {
    rateCreateMutation.reset();
    reset();
  };

  useEffect(() => {
    if (
      formValues.debit &&
      formValues.destinationCurrency &&
      formValues.targetCurrency
    ) {
      commissionQuery.refetch().then((res) => {
        const commission = +res.data?.commission ?? 0;
        const waalletValue = +targetWalletOptions.find(
          (wallet) => wallet.value === formValues.targetCurrency
        ).title;

        setmaxValueActiveWalet(waalletValue - commission);
      });
    }
  }, [debounceAmount, formValues.targetCurrency]);

  useEffect(() => {
    // check if user has this wallet
    if (formValues.destinationCurrency) {
      clearErrors();
      const isOwnWallet = wallets?.data?.list?.find(
        (wallet) => wallet.currency === formValues.destinationCurrency
      );

      if (!isOwnWallet) {
        const isCurrencyExists = currencyList?.data?.list?.find(
          (curr) => curr.code === formValues.destinationCurrency
        );

        if (isCurrencyExists) {
          walletCreateMutation.mutate(
            {
              currency: isCurrencyExists.code,
              wallet_type: isCurrencyExists.currency_type,
            },
            {
              onError: () => {
                setValue('destinationCurrency', null);
              },
            }
          );
        } else {
          setError('destinationCurrency', {
            type: 'manual',
            message: `Currency ${formValues?.destinationCurrency} can't be created!`,
          });
          setValue('destinationCurrency', null);
        }
      }
    }

    // request RATE
    if (
      formValues.debit &&
      formValues.destinationCurrency &&
      formValues.targetCurrency &&
      userId
    ) {
      rateCreateMutation.mutate({
        user_uid: userId,
        from_currency: formValues.targetCurrency,
        to_currency: formValues.destinationCurrency,
        from_value: formValues.debit,
        session_uid: v4(),
      });
    }
  }, [
    debounceAmount,
    formValues.destinationCurrency,
    formValues.targetCurrency,
    userId,
  ]);

  useEffect(() => {
    const resetTime = 60000;
    const resetTimeConfirm = 30000;
    let timer;

    if (rateCreateMutation.isSuccess) {
      () => clearTimeout(timer);
      if (step === 'form') {
        timer = setTimerExchange(resetTime, () => resetForm());
      } else {
        timer = setTimerExchange(resetTimeConfirm, () => {
          resetForm();
          setStep('form');
        });
      }
    }

    return () => clearTimeout(timer);
  }, [rateCreateMutation.isSuccess, step]);

  // urlState validations
  useEffect(() => {
    if (formValues.targetCurrency) {
      const activeWalle = wallets.data.list.find(
        (el) => el.currency === formValues.targetCurrency
      );

      if (!allPairs.includes(formValues.targetCurrency)) {
        toast(
          `${formValues.targetCurrency} ${t(
            'NOT.AVAILABLE.CURRENCY.FOR.EXCHANGE'
          )}`,
          {
            type: 'warning',
          }
        );
        setValue('targetCurrency', null);
      } else if (+activeWalle.amount === 0) {
        toast(`${formValues.targetCurrency} ${t('EMPTY.WALLET')}`, {
          type: 'warning',
        });
        setValue('targetCurrency', null);
      }
    }
  }, [formValues.targetCurrency]);

  return (
    <Root>
      {step === 'form' && (
        <FormContent>
          <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <FormRow>
              <Controller
                name='targetCurrency'
                control={control}
                render={({ field, formState }) => (
                  <Select
                    value={field.value}
                    onChange={field.onChange}
                    options={targetWalletOptions}
                    label={t('FORMS.SELECT.ACCOUNT')}
                    error={!!formState.errors.targetCurrency}
                  />
                )}
              />
            </FormRow>
            <FormRow>
              <Controller
                name='destinationCurrency'
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onChange={field.onChange}
                    options={getAvailableCurrenciesForTargeted}
                    label={t('FORMS.SELECT.ACCOUNT')}
                    error={errors.destinationCurrency?.message}
                  />
                )}
              />
            </FormRow>
            <FormRow>
              <Controller
                control={control}
                name='debit'
                render={({ field, formState }) => (
                  <InputNumber
                    name='debit'
                    value={field.value}
                    onChange={field.onChange}
                    error={formState.errors.debit?.message}
                    label={t('FORMS.DEBIT')}
                    disabled={
                      !formValues.targetCurrency ||
                      !formValues.destinationCurrency ||
                      walletCreateMutation.isLoading
                    }
                    startAdornment={
                      formValues.targetCurrency && (
                        <Icon
                          name={
                            currencyMetadataMap[formValues.targetCurrency]
                              ?.secondaryIconName
                          }
                          width={15}
                        />
                      )
                    }
                  />
                )}
              />
            </FormRow>
            <FormRow>
              <Input
                name='rate'
                value={
                  rateCreateMutation.isSuccess
                    ? rateCreateMutation.data?.rate
                    : ''
                }
                label={t('FORMS.RATE')}
                readOnly
                disabled
              />
            </FormRow>
            <FormRow>
              <Input
                name='fee'
                value={
                  commissionQuery.isSuccess
                    ? commissionQuery.data?.commission
                    : ''
                }
                label={t('FORMS.FEE')}
                readOnly
                disabled
                startAdornment={
                  formValues.targetCurrency && (
                    <Icon
                      name={
                        currencyMetadataMap[formValues.targetCurrency]
                          ?.secondaryIconName
                      }
                      width={15}
                    />
                  )
                }
              />
            </FormRow>
            <FormRow>
              <Input
                name='total'
                value={
                  commissionQuery.isSuccess
                    ? +formValues.debit + +commissionQuery.data?.commission
                    : // + commissionQuery.isSuccess
                      //   ? commissionQuery.data?.commission
                      ''
                }
                label={t('FORMS.TOTAL')}
                readOnly
                disabled
                startAdornment={
                  formValues.targetCurrency && (
                    <Icon
                      name={
                        currencyMetadataMap[formValues.targetCurrency]
                          ?.secondaryIconName
                      }
                      width={15}
                    />
                  )
                }
              />
            </FormRow>
            <FormRow>
              <Input
                name='credit'
                value={
                  rateCreateMutation.isSuccess
                    ? rateCreateMutation.data?.to_value
                    : ''
                }
                label={t('FORMS.CREDIT')}
                disabled
                readOnly
                startAdornment={
                  formValues.destinationCurrency && (
                    <Icon
                      name={
                        currencyMetadataMap[formValues.destinationCurrency]
                          ?.secondaryIconName
                      }
                      width={15}
                    />
                  )
                }
              />
            </FormRow>

            <FormSubmit
              text={t('FORM.BTN.EXCHANGE')}
              type='submit'
              disabled={!rateCreateMutation.isSuccess}
              isLoading={rateCreateMutation.isLoading}
            />
          </Form>
          <Info>
            <InfoTitle>{t('FORMS.EXCHANGE.INFO_TITLE')}</InfoTitle>

            <InfoBlock>
              <InfoBlockTitle>
                {t('FORMS.EXCHANGE.FLOATING.RATE')}
              </InfoBlockTitle>
              <InfoBlockText>
                {t('FORMS.EXCHANGE.FLOATING.RATE.DESCR')}
              </InfoBlockText>
            </InfoBlock>
            <InfoBlock>
              <InfoBlockTitle>{t('FORMS.TERM.EXECUT')}</InfoBlockTitle>
              <InfoBlockText>{t('FORMS.TERM')}</InfoBlockText>
            </InfoBlock>
            <InfoBlock>
              <InfoBlockTitle>
                {t('FORMS.EXCHANGE.FLOATING.PAIRS')}:
              </InfoBlockTitle>
              <InfoBlockText>BTC, ETH, TON, USDC, USDT</InfoBlockText>
            </InfoBlock>
            {/* {formValues.targetCurrency === 'TON' ||
            formValues.destinationCurrency === 'TON' ? (
              <InfoBlock className='error'>
                <InfoBlockTitle>
                  {t('FORMS.EXCHANGE.INFO_TITLE.NOT_USED')}
                </InfoBlockTitle>
              </InfoBlock>
            ) : null} */}
          </Info>
        </FormContent>
      )}
      {step === 'confirm' && (
        <ExchangeFundsConfirmData
          targetAccount={formValues.targetCurrency}
          destinationAccount={formValues.destinationCurrency}
          debit={formValues.debit}
          fee={commissionQuery.data?.commission ?? '0'}
          rate={rateCreateMutation.data?.rate}
          credit={rateCreateMutation.data?.to_value}
          onGoBackClick={() => {
            setStep('form');
          }}
          onExchangeClick={handleExchangeClick}
          isExchangeLoading={exchangeOrderCreateMutation.isLoading}
        />
      )}
    </Root>
  );
};

export default ExchangeFundsForm;
