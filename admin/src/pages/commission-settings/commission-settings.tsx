import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import CommissionBoard from 'modules/commission-settings/containers/commission-board/commission-board';

const CommissionSettings: FC = () => (
  <PageLayout title='Commission rules'>
    <CommissionBoard />
  </PageLayout>
);

export default CommissionSettings;
