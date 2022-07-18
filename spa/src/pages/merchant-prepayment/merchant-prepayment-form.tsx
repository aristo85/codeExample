import { FC } from 'react';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
// components
import PageLayout from 'modules/core/components/page-layout/page-layout';
import MerchantPayment from 'modules/merchant/containers/merchant-pay-form/merchant-pay-form';

const PrePaymentMerchantForm: FC = () => {
  const { t } = useLocalization();

  return (
    <>
      <PageLayout
        title={t('PAGES.MERCHANT.TITLE')}
        subtitle={t('PAGES.MERCHANT.SUBTITLE')}
      />
      <MerchantPayment />
    </>
  );
};

export default PrePaymentMerchantForm;
