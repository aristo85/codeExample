import { FC } from 'react';
import { format, fromUnixTime } from 'date-fns';
// components
import Modal from 'modules/core/components/modal';
import DataList from 'modules/core/components/data-list';
import Button from 'modules/core/components/button';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';

import {
  Root,
  Actions,
  TitleWrapper,
  Title,
} from './transaction-info-modal.styled';
import type { TransactionInfoModalProps } from './transaction-info-modal.interface';

const TransactionInfoModal: FC<TransactionInfoModalProps> = ({
  isOpen,
  onClose,
  transaction,
}) => {
  if (!transaction) {
    return null;
  }

  const { t } = useLocalization();

  console.log('transactionModal==>', transaction);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      style={{
        content: {
          minWidth: 350,
          paddingTop: 100,
        },
      }}
    >
      <Root>
        <TitleWrapper>
          <Title>
            {t('PAGES.HISTORY.TABLE_TYPE_OF')} {transaction.id}
          </Title>
        </TitleWrapper>
        <DataList
          rows={[
            {
              title: t('TRANSACTIONS.TRANSACTION_DATE'),
              value: format(
                fromUnixTime(transaction.created_at),
                'dd MMM yyyy HH:mm'
              ),
            },
            {
              title: t('TRANSACTIONS.TRANSACTION_ID'),
              value: transaction.id,
            },
            {
              title: t('TRANSACTIONS.TRANSACTION_TYPE'),
              value: transaction.type,
            },
            {
              title: t('TRANSACTIONS.TRANSACTION_PAYMENT_SYSTEM'),
              value: 'Fruitin',
            },
            {
              title: t('TRANSACTIONS.TRANSACTION_STATUS'),
              value: transaction.status,
            },
            {
              title: t('TRANSACTIONS.TRANSACTION_AMOUNT'),
              value: `${transaction.direction === 'in' ? '' : '-'} ${
                transaction.amount
              } ${transaction.currency}`,
            },
            {
              title: t('TRANSACTIONS.TRANSACTION_FEE'),
              value: `${transaction.commission} ${transaction.commission_currency}`,
            },
            {
              title: t('TRANSACTIONS.TRANSACTION_SUM'),
              value: `${transaction.direction === 'in' ? '' : '-'} ${
                +transaction.amount + +transaction.commission
              } ${transaction.commission_currency}`,
            },
          ]}
        />
        <Actions>
          <Button text={t('FORM.BTN.CLOSE')} onClick={onClose} />
        </Actions>
      </Root>
    </Modal>
  );
};

export default TransactionInfoModal;
