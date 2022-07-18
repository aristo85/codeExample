import React from 'react';
// containers
import TransactionsBoard from 'modules/transaction/containers/transactions-board';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
// components
import PageLayout from 'modules/core/components/page-layout/page-layout';

function History() {
  const { t } = useLocalization();

  return (
    <>
      <PageLayout
        title={t('PAGES.HISTORY.TITLE')}
        subtitle={t('PAGES.HISTORY.SUBTITLE')}
      />
      <TransactionsBoard />
    </>
  );
}

export default History;
