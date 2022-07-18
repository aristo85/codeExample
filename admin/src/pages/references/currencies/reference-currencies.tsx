import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import CurrenciesBoard from 'modules/references/currencies/containers/currencies-board';

const ReferenceCurrencies: FC = () => (
  <PageLayout title='Currencies'>
    <CurrenciesBoard />
  </PageLayout>
);

export default ReferenceCurrencies;
