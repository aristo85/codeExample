import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, useFormState, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Select from 'modules/core/components/select';
// components
import Input from 'modules/core/components/input';
import InputNumber from 'modules/core/components/input-number';
import CreditCard from 'modules/core/components/credit-card';
import Button from 'modules/core/components/button';
// services
import { defaultCountWalletsPerPage } from 'modules/core/services/pagination.service';
// hooks
import { useWalletListQuery } from 'modules/wallet/hooks/use-wallet-list-query';
import { useLocalization } from 'modules/localization/hooks/use-localization';
import { GetByFiatStep, AddFiatValues } from './add-funds-fiat-form.interface';
import {
  Root,
  Form,
  FormRow,
  Content,
  InfoRowsWrapper,
  InfoRow,
  InfoRowName,
  InfoRowValue,
  Actions,
  GoBackAction,
  Info,
  InfoTitle,
  InfoBlock,
  InfoBlockText,
  InfoBlockTitle,
  RootBaseForm,
  InfoContainer,
  InfoContainerBlock,
  CardsContainerBlock,
  OrderID,
  InfoContainerBlockSpan,
  // OrderComments,
  OrderTotal,
  InfoContainerBlockParagraph,
  Recalculating,
} from './add-funds-fiat-form.styled';
import { fundsTransferSystemSelectorDisable } from 'modules/funds/funds.actions';
import { SelectOption } from 'modules/core/components/select/select.interface';
import { useBuyCryptoByFiatMutation } from 'modules/funds/hooks/use-buy-crypto-by-fiat-mutation';
import { useProfileQuery } from 'modules/user/hooks/use-profile-query';
import { useHistory } from 'react-router';
import { getCryptoPrice } from 'modules/funds/services/get-cryptoPrice.service';
import { GetCryptoPriceResponse } from 'modules/funds/types/funds-api.types';
import { useCommissionQuery } from 'modules/funds/hooks/use-commission-query';
import {
  setTimerAddFunds,
  setTimerExternalTransferConfirmForm,
} from 'modules/funds/services/funds-timer.service';
import { useDebounce } from 'modules/core/hooks/use-debounce';

const AddFundsFiatForm: FC = () => {
  const numberFixed = 8;
  const bounceDelay = 500;

  const { t } = useLocalization();
  // hooks
  const dispatch = useDispatch();
  const history = useHistory();
  // queries
  const walletList = useWalletListQuery({
    page: 1,
    per_page: defaultCountWalletsPerPage,
  });
  const profile = useProfileQuery();
  const createLinkToPaycos = useBuyCryptoByFiatMutation();
  // state
  const [step, setStep] = useState<GetByFiatStep>('form');
  const [total, setTotal] = useState<number>(0);
  const [fee, setFee] = useState<number>(0);
  const [payRate, setpayRate] = useState(0);
  const [paymentURL, setpaymentURL] = useState(null);

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      wallet: yup.string().required(t('FORM.VALIDATION.REQUIRED_WALLET')),
      amount: yup.number().required(t('FORM.VALIDATION.REQUIRED_AMOUNT')),
    });
  }, []);

  // memo
  const walletSelectOptions = useMemo<SelectOption[]>(() => {
    if (!walletList.data?.list) {
      return [];
    }

    return walletList.data.list.map((wallet) => ({
      value: wallet.currency,
      title: wallet.currency,
    }));
  }, [walletList]);
  // form
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    clearErrors,
    // reset,
  } = useForm<AddFiatValues>({
    defaultValues: {
      wallet: null,
      amount: 0,
      // commission: 0,
      // total: 0,
    },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const formValues = watch();

  const { errors } = useFormState({ control });

  const debounceAmount = useDebounce(formValues.amount, bounceDelay);

  const commissionQuery = useCommissionQuery({
    currency: formValues.wallet,
    amount: `${formValues.amount}`,
    direction: 'in',
    transaction_type: 'Buy',
  });

  // memo
  const activeWallet = useMemo(() => {
    const activeW = walletList.data?.list?.find(
      (wallet) => wallet.currency === formValues.wallet
    );

    return activeW;
  }, [walletList, formValues]);

  const handleFormSubmit = useCallback(() => {
    const inCent = 100;

    if (profile) {
      createLinkToPaycos.mutate(
        {
          email: profile.data.user.email,
          currency: 'RUB',
          target_currency: formValues.wallet,
          quantity: `${formValues.amount}`,
          amount: +(total * payRate * inCent).toFixed(2),
          product: 'payment cryptocurrency',
          redirect_success_url: 'https://spa.fruitin.dev/success',
          redirect_fail_url: 'https://spa.fruitin.dev/fail',
        },
        {
          onSuccess: (data) => {
            setpaymentURL(data.payment_url);
            setStep('submit');
            dispatch(fundsTransferSystemSelectorDisable());
          },
        }
      );
    }
  }, [createLinkToPaycos, profile]);

  const redirectToPaycos = () => {
    window.location.href = paymentURL;
  };

  useEffect(() => {
    clearErrors('amount');
    if (formValues.wallet) {
      getCryptoPrice(formValues.wallet, 'RUB')
        .then((data: GetCryptoPriceResponse) => {
          setpayRate(+data.price);
          setValue('amount', 0);
        })
        .catch((err) => {
          history.push('/funds');
          console.log('dataPrice=>', err);
        });
    }
  }, [formValues.wallet]);

  useEffect(() => {
    if (formValues.amount && formValues.wallet) {
      commissionQuery.refetch().then((res) => {
        const commission = +res.data?.commission ?? 0;

        setFee(commission);
      });
    }
  }, [debounceAmount, formValues.wallet]);

  useEffect(() => {
    formValues.amount && setTotal(+formValues.amount ?? 0 + fee ?? 0);
  }, [fee, debounceAmount, step]);

  useEffect(() => {
    const resetTime = 60000;
    const resetTimeConfirm = 30000;
    let timer;

    if (step === 'form') {
      () => clearTimeout(timer);
      timer = setTimerAddFunds(resetTime, history);
    } else {
      () => clearTimeout(timer);
      timer = setTimerExternalTransferConfirmForm(
        resetTimeConfirm,
        history,
        dispatch
      );
    }

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <Root>
      {step === 'form' && (
        <RootBaseForm>
          <Content>
            <Form onSubmit={handleSubmit(handleFormSubmit)}>
              <FormRow>
                <Controller
                  control={control}
                  render={({ field }) => (
                    <Select
                      label={t('FORMS.TRANSFER.CHOOSE_CURRENCY')}
                      options={walletSelectOptions}
                      {...field}
                      error={!!errors?.wallet?.message}
                      onChange={(value) => {
                        setValue('amount', 0);
                        setValue('wallet', value);
                      }}
                    />
                  )}
                  name='wallet'
                />
              </FormRow>
              <FormRow>
                <InputNumber
                  label={t('FORMS.AMOUNT')}
                  disabled={formValues.wallet === null}
                  error={errors?.amount?.message}
                  {...register('amount')}
                  // value={activeWallet ? `${formValues.amount}` : ''}
                />
              </FormRow>
              <FormRow>
                <Input
                  disabled
                  name='fee'
                  label={t('FORMS.FEE')}
                  {...register}
                  value={fee.toFixed(numberFixed)}
                />
              </FormRow>
              <FormRow>
                <Input
                  disabled
                  name='total'
                  label={t('FORMS.TOTAL')}
                  {...register}
                  value={`${(total * payRate).toFixed(2)} ₽`}
                />
              </FormRow>
              <Recalculating>{t('FORMS.TRANSFER_RECALCULATION')}</Recalculating>
              <Actions>
                <Button
                  variant='contained'
                  text={t('FORM.BTN.COUNT')}
                  type='submit'
                  isLoading={createLinkToPaycos.isLoading}
                />
              </Actions>
            </Form>
            <Info>
              {activeWallet && (
                <InfoTitle>
                  {t('FORMS.TRANSFER_FROM')} {activeWallet.currency}
                  {' to '}
                  {t('FORMS.TRANSFER_FIAT')}
                </InfoTitle>
              )}
              <InfoBlock>
                {/* <InfoBlockTitle>${minCommissionInUSD}</InfoBlockTitle> */}
                {/* <InfoBlockText>{t('FORMS.MIN_PER_ONE')}</InfoBlockText> */}
              </InfoBlock>
              <InfoBlock>
                <InfoBlockTitle>{t('FORMS.TERM')}</InfoBlockTitle>
                <InfoBlockText>{t('FORMS.TERM.EXECUT')}</InfoBlockText>
              </InfoBlock>
            </Info>
          </Content>
        </RootBaseForm>
      )}
      {step === 'submit' && activeWallet && (
        <>
          <InfoRowsWrapper>
            <InfoRow>
              <InfoRowName>{t('MODALS.BALANCE.LBL.AMOUNT')}</InfoRowName>
              <InfoRowValue>
                {formValues.amount} {activeWallet.currency}
              </InfoRowValue>
            </InfoRow>
            <InfoRow>
              <InfoRowName>{t('MODALS.BALANCE.FEE')}</InfoRowName>
              <InfoRowValue>
                {activeWallet ? `${fee.toFixed(numberFixed)}` : ''}{' '}
                {activeWallet.currency}
              </InfoRowValue>
            </InfoRow>
            <InfoRow>
              <InfoRowName>{t('MODALS.BALANCE.TOTAL')} ₽</InfoRowName>
              <InfoRowValue>{(+total * payRate).toFixed(2)}</InfoRowValue>
            </InfoRow>
          </InfoRowsWrapper>
          <Actions>
            <Button
              text={t('FORM.BTN.CONFIRM')}
              variant='contained'
              onClick={() => redirectToPaycos()}
            />
            <GoBackAction
              onClick={() => {
                setStep('form');
                dispatch(fundsTransferSystemSelectorDisable());
              }}
            >
              {t('FORM.BTN.GO_BACK')}
            </GoBackAction>
          </Actions>
        </>
      )}
      {step === 'fiatCard' && (
        <>
          <InfoRowsWrapper>
            <InfoContainer>
              <InfoContainerBlock>
                <OrderID>
                  <InfoContainerBlockParagraph>
                    {t('FORMS.ORDER_ID')}
                  </InfoContainerBlockParagraph>
                  <InfoContainerBlockSpan>
                    {t('FORMS.ADD_FUNDS_TO')} P1029204682 [a.bykov@paycos.com]
                  </InfoContainerBlockSpan>
                </OrderID>
                {/* <OrderComments>
                  <InfoContainerBlockParagraph>
                    {t('FORMS.COMMENTS')}
                  </InfoContainerBlockParagraph>
                  <InfoContainerBlockSpan>1234555213</InfoContainerBlockSpan>
                </OrderComments> */}
                <OrderTotal>
                  <InfoContainerBlockParagraph>
                    {t('FORMS.TOTAL')}
                  </InfoContainerBlockParagraph>
                  <InfoContainerBlockParagraph>
                    1.06 <span className='currency-sign'>$</span>
                  </InfoContainerBlockParagraph>
                </OrderTotal>
              </InfoContainerBlock>
            </InfoContainer>
            <CardsContainerBlock>
              <CreditCard variant='visa' />
            </CardsContainerBlock>
          </InfoRowsWrapper>
          <Actions>
            <Button text={t('FORM.BTN.CONFIRM')} variant='contained' />
            <GoBackAction
              onClick={() => {
                setStep('submit');
              }}
            >
              {t('FORM.BTN.GO_BACK')}
            </GoBackAction>
          </Actions>
        </>
      )}
    </Root>
  );
};

export default AddFundsFiatForm;
