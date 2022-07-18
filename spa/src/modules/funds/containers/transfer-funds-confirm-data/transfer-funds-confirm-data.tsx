import { FC, useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
// components
import DataList from 'modules/core/components/data-list';
import Button from 'modules/core/components/button';
// actions
import {
  fundsResetStep,
  fundsTransferGoToPrevStep,
} from 'modules/funds/funds.actions';
// hooks
import { useTransferCreateMutation } from 'modules/funds/hooks/use-transfer-create-mutation';
import { useProfileQuery } from 'modules/user/hooks/use-profile-query';
import { useLocalization } from 'modules/localization/hooks/use-localization';

import type { TransferFundsConfirmDataProps } from './transfer-funds-confirm-data.interface';
import {
  Root,
  Actions,
  ActionWrapper,
} from './transfer-funds-confirm-data.styled';
import { setTimerInternalTransferConfirmForm } from 'modules/funds/services/funds-timer.service';
// import { useHistory } from 'react-router';

const TransferFundsConfirmData: FC<TransferFundsConfirmDataProps> = ({
  data,
}) => {
  // hooks
  const dispatch = useDispatch();
  // const history = useHistory();
  // queries
  const profile = useProfileQuery();
  const transferCreateMutation = useTransferCreateMutation();
  // memo
  const orderId = useMemo(() => v4(), [data]);

  const { t } = useLocalization();

  // console.log(data)

  const handleSubmit = useCallback(() => {
    if (profile.data && data.wallet) {
      transferCreateMutation.mutate(
        {
          from_user_uid: profile.data.user.id,
          to_user_email: data.email,
          currency: data.wallet,
          amount: data.amount,
          description: data.description,
          session_uid: orderId,
        },
        {
          onSuccess: () => {
            dispatch(fundsResetStep());
          },
          onError: () => {
            dispatch(fundsTransferGoToPrevStep());
          },
        }
      );
    }
  }, [dispatch, profile, orderId]);

  const handleGoBackClick = useCallback(() => {
    dispatch(fundsTransferGoToPrevStep());
  }, [dispatch]);

  useEffect(() => {
    const resetTime = 30000;
    const timer = setTimerInternalTransferConfirmForm(resetTime, dispatch);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Root>
      <DataList
        rows={[
          {
            title: t('MODALS.BALANCE.RECIPIENT'),
            value: data.email,
          },
          // {
          //   title: t('FORMS.TRANSFER.INVOICE'),
          //   value: '1234567890-0987654321',
          // },
          {
            title: t('FORMS.ORDER_ID'),
            value: orderId,
          },
          {
            title: t('FORMS.AMOUNT'),
            value: `${data.amount.toLocaleString('fullwide', {
              maximumFractionDigits: 8,
            })} ${data.wallet}`,
          },
          {
            title: t('FORMS.DESCRIPTION'),
            value: data.description,
          },
          {
            title: t('FORMS.FEE'),
            value: `${data.fee.toLocaleString('fullwide', {
              maximumFractionDigits: 8,
            })} ${data.wallet}`,
          },
          {
            title: '',
            value: `${t('FORMS.TOTAL')}: ${(
              +data.amount + data.fee
            ).toLocaleString('fullwide', {
              maximumFractionDigits: 8,
            })} ${data.wallet}`,
          },
        ]}
      />
      <Actions>
        <ActionWrapper>
          <Button
            variant='contained'
            text={t('FORM.BTN.SEND')}
            onClick={handleSubmit}
            isLoading={transferCreateMutation.isLoading}
          />
        </ActionWrapper>
        <ActionWrapper>
          <Button
            variant='text'
            text={t('FORM.BTN.GO_BACK')}
            onClick={handleGoBackClick}
          />
        </ActionWrapper>
      </Actions>
    </Root>
  );
};

export default TransferFundsConfirmData;
