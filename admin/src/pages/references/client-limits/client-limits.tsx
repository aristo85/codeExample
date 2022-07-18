import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
// import RolesBoard from 'modules/references/roles/containers/roles-board';
import LimitBoard from 'modules/references/limits/containers/limits-board/limits-board';

const ClientLimits: FC = () => {
  return (
    <PageLayout title='Client Limits'>
      {/* <RolesBoard /> */}
      <LimitBoard />
    </PageLayout>
  );
};

export default ClientLimits;
