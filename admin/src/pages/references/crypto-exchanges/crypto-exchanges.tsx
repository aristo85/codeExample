import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import CryptoExchangesBoard from 'modules/references/crypto-exchanges/containers/crypto-exchanges-board';

const CryptoExchanges: FC = () => {
  return (
    <PageLayout title='Crypto Exchanges'>
      <CryptoExchangesBoard />
    </PageLayout>
  );
};

export default CryptoExchanges;
