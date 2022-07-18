import { FC } from 'react';
// containers
import TransferFundsBoard from 'modules/funds/containers/transfer-funds-board';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
// components
import PageLayout from 'modules/core/components/page-layout/page-layout';

const Transfer: FC = () => {
  const { t } = useLocalization();

  return (
    <>
      <PageLayout
        title={t('PAGES.TRANSFER.TITLE')}
        subtitle={t('PAGES.TRANSFER.SUBTITLE')}
      />
      <TransferFundsBoard />
    </>
  );
};

export default Transfer;
