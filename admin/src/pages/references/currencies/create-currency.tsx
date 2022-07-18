import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import NewCurrencyDetails from 'modules/references/currencies/containers/currencies-new-currency/currencies-new-currency';

const CreateNewCurrency: FC = () => {
  return (
    <>
      <PageLayout title='Create new Currency'>
        <NewCurrencyDetails />
      </PageLayout>
    </>
  );
};

export default CreateNewCurrency;
