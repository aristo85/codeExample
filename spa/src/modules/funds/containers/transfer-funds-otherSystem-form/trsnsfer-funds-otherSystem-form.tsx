import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useFormState } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// components
import Input from 'modules/core/components/input';
import InputNumber from 'modules/core/components/input-number';
// import IconButton from 'modules/core/components/icon-button';
// import Modal from 'modules/core/components/modal';
import Button from 'modules/core/components/button';
// selectors
import { selectWalletIdToSend } from 'modules/wallet/wallet.selectors';
// actions
import { walletSendCancel } from 'modules/wallet/wallet.actions';
// services
import WalletUrlLocationService from 'modules/wallet/services/wallet-url-location.service';
import { defaultCountWalletsPerPage } from 'modules/core/services/pagination.service';
// hooks
import { useWalletListQuery } from 'modules/wallet/hooks/use-wallet-list-query';
import { useWithdrawalCreateMutation } from 'modules/wallet/hooks/use-withdrawal-create-mutation';
import { useWithdrawalEstimationCreateMutation } from 'modules/wallet/hooks/use-withdrawal-estimation-create-mutation';
import { useLocalization } from 'modules/localization/hooks/use-localization';

import {
  SendByOtherSystemStep,
  TransferOtherSystemValues,
} from './transfer-funds-otherSystem-form.interface';
import {
  Root,
  Form,
  FormRow,
  AmountDescription,
  InfoRowsWrapper,
  InfoRow,
  InfoRowName,
  InfoRowValue,
  Actions,
  GoBackAction,
} from './transfer-funds-otherSystem-form.styled';
import { fundsTransferSystemSelectorDisable } from 'modules/funds/funds.actions';
// import { getCryptoPrice } from 'modules/funds/services/get-cryptoPrice.service';
// import { GetCryptoPriceResponse } from 'modules/funds/types/funds-api.types';
import { useHistory } from 'react-router';
import {
  setTimer,
  setTimerExternalTransferConfirmForm,
} from 'modules/funds/services/funds-timer.service';
import { useDebounce } from 'modules/core/hooks/use-debounce';

const walletUrlLocationService = new WalletUrlLocationService();

const TransferFundsOtherSystemForm: FC = () => {
  const { t } = useLocalization();

  const bounceDelay = 500;
  // const numberFixed = 8;

  // hooks
  const dispatch = useDispatch();
  const history = useHistory();
  // queries
  const walletList = useWalletListQuery({
    page: 1,
    per_page: defaultCountWalletsPerPage,
  });
  const withdrawalCreateMutation = useWithdrawalCreateMutation();
  const withdrawalEstimationCreateMutation = useWithdrawalEstimationCreateMutation();
  // selectors
  const activeWalletId = useSelector(selectWalletIdToSend);
  // state
  const [step, setStep] = useState<SendByOtherSystemStep>('form');
  // memo
  const activeWallet = useMemo(
    () => walletList.data?.list?.find((wallet) => wallet.id === activeWalletId),
    [walletList.data, activeWalletId]
  );

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      destination: yup.string().required(t('MODALS.BALANCE.REQ.DESTINATION')),
      amount:
        activeWallet?.amount && withdrawalEstimationCreateMutation?.data
          ? yup
              .number()
              .required(t('FORM.VALIDATION.REQUIRED_AMOUNT'))
              .max(
                +activeWallet.amount -
                  +withdrawalEstimationCreateMutation.data.fee,
                `${t('FORMS.MAX_LIMIT')}`
              )
          : yup.number().required(t('FORM.VALIDATION.REQUIRED_AMOUNT')),
    });
  }, [activeWallet, withdrawalEstimationCreateMutation]);

  const initialWalletDestination = useMemo(
    () =>
      walletUrlLocationService.getWalletSendUrlParams().sendWalletDestination,
    []
  );
  // form
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    clearErrors,
    // setValue,
  } = useForm<TransferOtherSystemValues>({
    defaultValues: {
      destination: '',
      amount: 0,
      description: '',
    },
    resolver: yupResolver(validationSchema),
  });
  const formValues = watch();
  const { errors } = useFormState({ control });

  const debounceAmount = useDebounce(formValues.amount, bounceDelay);

  const handleModalClose = useCallback(() => {
    dispatch(walletSendCancel());
    reset();
    setStep('form');
  }, [dispatch, reset]);

  const handleFormSubmit = () => {
    if (activeWallet && formValues.amount) {
      setStep('submit');
      dispatch(fundsTransferSystemSelectorDisable());
    }
  };

  useEffect(() => {
    if (activeWallet && debounceAmount) {
      withdrawalEstimationCreateMutation.mutate(
        {
          amount: `${formValues.amount}`,
          wallet_id: activeWallet.id,
        },
        {
          // onSuccess: () => {
          //   dispatch(fundsTransferSystemSelectorDisable());
          // },
          // onError: () => {
          //   setStep('form');
          //   dispatch(fundsTransferSystemSelectorDisable());
          // },
        }
      );
    }
  }, [debounceAmount]);

  const handleCreateWithdrawal = useCallback(() => {
    if (activeWallet && withdrawalEstimationCreateMutation.data) {
      withdrawalCreateMutation.mutate(
        {
          wallet_id: activeWallet.id,
          address: formValues.destination,
          amount: withdrawalEstimationCreateMutation.data.amount,
          description: formValues.description,
        },
        {
          onSuccess: () => {
            handleModalClose();
          },
          onError: () => {
            setStep('form');
            dispatch(fundsTransferSystemSelectorDisable());
          },
        }
      );
    }
  }, [
    activeWallet,
    withdrawalEstimationCreateMutation.data,
    handleModalClose,
    formValues,
  ]);

  useEffect(() => {
    clearErrors('amount');
    // if (activeWallet?.currency) {
    //   getCryptoPrice(activeWallet.currency, 'USDT')
    //     // .then((data: GetCryptoPriceResponse) => {
    //     //   setminCommission(
    //     //     +((1 / +data.price) * minCommissionInUSD).toFixed(numberFixed)
    //     //   );
    //     //   // setValue('amount', 0);
    //     // })
    //     .catch((err) => {
    //       history.push('/transfer');
    //       console.log('dataPrice=>', err);
    //     });
    // }
  }, [activeWalletId]);

  useEffect(() => {
    const resetTime = 60000;
    const resetTimeConfirm = 30000;
    let timer;

    if (step === 'form') {
      () => clearTimeout(timer);
      timer = setTimer(resetTime, history);
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
      {step === 'form' && activeWallet && (
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <FormRow>
            <Input
              label={t('MODALS.BALANCE.LBL.DESTINATION')}
              placeholder={t('MODALS.BALANCE.PLH.DESTINATION')}
              // endAdornment={<IconButton size='small' icon='qrCode' />}
              error={errors?.destination?.message}
              defaultValue={initialWalletDestination}
              {...register('destination')}
            />
          </FormRow>
          <FormRow>
            <InputNumber
              label={t('MODALS.BALANCE.LBL.AMOUNT')}
              endAdornment={
                <AmountDescription>{activeWallet.currency}</AmountDescription>
              }
              // error={errors?.amount?.message}
              {...register('amount')}
            />
          </FormRow>
          <FormRow>
            <Input
              label={t('MODALS.BALANCE.LBL.DESCRIPTION')}
              placeholder={t('MODALS.BALANCE.PLH.DESCRIPTION')}
              {...register('description')}
            />
          </FormRow>

          <Input
            name='fee'
            disabled
            label={t('MODALS.BALANCE.FEE')}
            endAdornment={
              <AmountDescription>{activeWallet.currency}</AmountDescription>
            }
            value={withdrawalEstimationCreateMutation.data?.fee}
          />
          <Input
            name='total'
            disabled
            label={t('MODALS.BALANCE.TOTAL')}
            endAdornment={
              <AmountDescription>{activeWallet.currency}</AmountDescription>
            }
            value={withdrawalEstimationCreateMutation.data?.total}
            error={errors?.amount?.message}
          />

          <Actions>
            <Button
              variant='contained'
              text={t('FORM.BTN.CONTINUE')}
              type='submit'
              isLoading={withdrawalEstimationCreateMutation.isLoading}
            />
          </Actions>
        </Form>
      )}
      {step === 'submit' &&
        activeWallet &&
        withdrawalEstimationCreateMutation.data && (
          <>
            <InfoRowsWrapper>
              <InfoRow>
                <InfoRowName>{t('MODALS.BALANCE.FROM')}</InfoRowName>
                <InfoRowValue>
                  {t('MODALS.BALANCE.FROM.MY')} {activeWallet.currency}{' '}
                  {t('MODALS.BALANCE.FROM.MY_WALLET')}
                </InfoRowValue>
              </InfoRow>
              <InfoRow>
                <InfoRowName>{t('MODALS.BALANCE.TO')}</InfoRowName>
                <InfoRowValue>{formValues.destination}</InfoRowValue>
              </InfoRow>
              <InfoRow>
                <InfoRowName>{t('MODALS.BALANCE.LBL.AMOUNT')}</InfoRowName>
                <InfoRowValue>
                  {withdrawalEstimationCreateMutation.data.amount}
                </InfoRowValue>
              </InfoRow>
              <InfoRow>
                <InfoRowName>{t('MODALS.BALANCE.LBL.DESCRIPTION')}</InfoRowName>
                <InfoRowValue>{formValues.description}</InfoRowValue>
              </InfoRow>
              <InfoRow>
                <InfoRowName>{t('MODALS.BALANCE.FEE')}</InfoRowName>
                <InfoRowValue>
                  {withdrawalEstimationCreateMutation.data.fee}
                </InfoRowValue>
              </InfoRow>
              <InfoRow>
                <InfoRowName>{t('MODALS.BALANCE.TOTAL')}</InfoRowName>
                <InfoRowValue>
                  {withdrawalEstimationCreateMutation.data.total}
                </InfoRowValue>
              </InfoRow>
            </InfoRowsWrapper>
            <Actions>
              <Button
                variant='contained'
                text={t('FORM.BTN.SEND')}
                onClick={handleCreateWithdrawal}
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
    </Root>
  );
};

export default TransferFundsOtherSystemForm;
