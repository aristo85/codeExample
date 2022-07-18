import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import StatusesBoard from 'modules/references/statuses/containers/statuses-board';

const ClientStatuses: FC = () => {
  return (
    <PageLayout title='Client Statuses'>
      <StatusesBoard />
    </PageLayout>
  );
};

export default ClientStatuses;
