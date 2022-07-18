import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import CreateNewStatus from 'modules/references/statuses/containers/create-new-status/create-new-status';

const ClientCreateNewStatus: FC = () => {
  return (
    <>
      <PageLayout title='Create new Status'>
        <CreateNewStatus />
      </PageLayout>
    </>
  );
};

export default ClientCreateNewStatus;
