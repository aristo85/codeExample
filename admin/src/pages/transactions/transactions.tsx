import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import TransactionsBoard from 'modules/transaction/containers/transactions-board';

const ClientProfiles: FC = () => {
  return (
    <PageLayout title='Transactions'>
      <TransactionsBoard />
    </PageLayout>
  );
};

export default ClientProfiles;
