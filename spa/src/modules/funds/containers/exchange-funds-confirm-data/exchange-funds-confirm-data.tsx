import { FC } from 'react';
// components
import DataList from 'modules/core/components/data-list';
import Button from 'modules/core/components/button';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
import type { ExchangeFundsConfirmDataProps } from './exchange-funds-confirm-data.interface';
import { Root, Actions } from './exchange-funds-confirm-data.styled';

const ExchangeFundsConfirmData: FC<ExchangeFundsConfirmDataProps> = ({
  targetAccount,
  destinationAccount,
  debit,
  rate,
  credit,
  fee,
  onGoBackClick,
  onExchangeClick,
  isExchangeLoading,
}) => {
  const { t } = useLocalization();

  return (
    <Root>
      <DataList
        rows={[
          {
            title: t('FORMS.TARGET_ACCOUNT'),
            value: targetAccount,
          },
          {
            title: t('FORMS.DESTINATION_ACCOUNT'),
            value: destinationAccount,
          },
          {
            title: t('FORMS.DEBIT'),
            value: `${debit} ${targetAccount}`,
          },
          {
            title: t('FORMS.FEE'),
            value: `${fee} ${targetAccount}`,
          },
          {
            title: t('FORMS.TOTAL'),
            value: `${+fee + +debit} ${targetAccount}`,
          },
          {
            title: t('FORMS.RATE'),
            value: `${rate} ${destinationAccount}`,
          },
          {
            title: t('FORMS.CREDIT'),
            value: `${credit} ${destinationAccount}`,
          },
        ]}
      />
      <Actions>
        <Button text={t('FORM.BTN.EXCHANGE')} onClick={onExchangeClick} />
        <Button
          text={t('FORM.BTN.GO_BACK')}
          variant='text'
          onClick={onGoBackClick}
          isLoading={isExchangeLoading}
          style={{ margin: 'auto' }}
        />
      </Actions>
    </Root>
  );
};

export default ExchangeFundsConfirmData;
