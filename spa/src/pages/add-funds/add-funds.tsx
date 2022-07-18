import React from 'react';
// containers
import AddFundsBoard from 'modules/funds/containers/add-funds-board';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
// components
import PageLayout from 'modules/core/components/page-layout/page-layout';

function AddFunds() {
  const { t } = useLocalization();

  return (
    <>
      <PageLayout
        title={t('PAGES.ADD_FUNDS.TITLE')}
        subtitle={t('PAGES.ADD_FUNDS.SUBTITLE')}
      />
      <AddFundsBoard />
    </>
  );
}

export default AddFunds;
