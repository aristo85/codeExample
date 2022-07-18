import React, { FC, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useFormState } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
// components
import Input from 'modules/core/components/input';
import InputNumber from 'modules/core/components/input-number';
import IconButton from 'modules/core/components/icon-button';
import Modal from 'modules/core/components/modal';
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

import type {
  SendWalletFormValues,
  SendWalletStep,
} from './send-wallet-modal.interface';
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
} from './send-wallet-modal.styled';

const walletUrlLocationService = new WalletUrlLocationService();

const SendWalletModal: FC = () => {
  const { t } = useLocalization();
  // hooks
  const dispatch = useDispatch();
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
  const [step, setStep] = useState<SendWalletStep>('form');
  // memo
  const activeWallet = useMemo(
    () => walletList.data?.list?.find((wallet) => wallet.id === activeWalletId),
    [walletList.data, activeWalletId]
  );
  const validationSchema = useMemo(() => {
    return yup.object().shape({
      destination: yup.string().required(t('MODALS.BALANCE.REQ.DESTINATION')),
      amount: yup.string().required(t('MODALS.BALANCE.REQ.AMOUNT')),
    });
  }, [activeWallet]);
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
  } = useForm<SendWalletFormValues>({
    resolver: yupResolver(validationSchema),
  });
  const formValues = watch();
  const { errors } = useFormState({ control });

  const handleModalClose = useCallback(() => {
    dispatch(walletSendCancel());
    reset();
    setStep('form');
  }, [dispatch, reset]);

  const handleFormSubmit = useCallback(
    (data: SendWalletFormValues) => {
      if (activeWallet) {
        withdrawalEstimationCreateMutation.mutate(
          {
            amount: data.amount,
            wallet_id: activeWallet.id,
          },
          {
            onSuccess: () => {
              setStep('submit');
            },
          }
        );
      }
    },
    [withdrawalEstimationCreateMutation, activeWallet]
  );

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
        }
      );
    }
  }, [
    activeWallet,
    withdrawalEstimationCreateMutation.data,
    handleModalClose,
    formValues,
  ]);

  // todo: add support of fiat
  if (activeWallet?.wallet_type === 'fiat') {
    dispatch(walletSendCancel());
    toast('Support for the Fiat wallet will be in the near future');

    return null;
  }

  return (
    <Modal
      isOpen={!!activeWalletId}
      onClose={handleModalClose}
      title={`${t('MODALS.BALANCE.TITLE')} ${activeWallet?.currency}`}
      style={{
        content: {
          minWidth: 472,
        },
      }}
    >
      <Root>
        {step === 'form' && activeWallet && (
          <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <FormRow>
              <Input
                label={t('MODALS.BALANCE.LBL.DESTINATION')}
                placeholder={t('MODALS.BALANCE.PLH.DESTINATION')}
                endAdornment={<IconButton size='small' icon='qrCode' />}
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
                error={errors?.amount?.message}
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
                <div className='form-submition'>
                  <input
                    type='submit'
                    value={t('FORM.BTN.CONTINUE')}
                    className='form-submit'
                    id='form-btn'
                    onClick={handleCreateWithdrawal}
                  />
                </div>
                <GoBackAction
                  onClick={() => {
                    setStep('form');
                  }}
                >
                  {t('FORM.BTN.GO_BACK')}
                </GoBackAction>
              </Actions>
            </>
          )}
      </Root>
    </Modal>
  );
};

export default SendWalletModal;
