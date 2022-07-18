import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import SupportBoard from 'modules/support/containers/support-board/support-board';

const Supports: FC = () => (
  <PageLayout title='Supports'>
    <SupportBoard />
  </PageLayout>
);

export default Supports;
