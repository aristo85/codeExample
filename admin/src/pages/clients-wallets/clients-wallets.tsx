import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
// containers
import WalletsBoard from 'modules/wallet/containers/wallets-board';

const ClientWallets: FC = () => (
  <PageLayout title='Client Wallets'>
    <WalletsBoard />
  </PageLayout>
);

export default ClientWallets;
