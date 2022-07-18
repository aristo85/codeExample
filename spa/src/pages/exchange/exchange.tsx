import React from 'react';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
// containers
import ExchangeFundsBoard from 'modules/funds/containers/exchange-funds-board';
// components
import PageLayout from 'modules/core/components/page-layout/page-layout';

const Exchange = () => {
  const { t } = useLocalization();

  return (
    <div>
      <PageLayout
        title={t('PAGES.EXCHANGE.TITLE')}
        subtitle={t('PAGES.EXCHANGE.SUBTITLE')}
      />
      <ExchangeFundsBoard />
    </div>
  );
};

export default Exchange;
