import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import FiatProvidersBoard from 'modules/references/fiat-providers/containers/fiat-providers-board';

const FiatProviders: FC = () => {
  return (
    <PageLayout title='Fiat Providers'>
      <FiatProvidersBoard />
    </PageLayout>
  );
};

export default FiatProviders;
