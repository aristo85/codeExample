import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import CreateNewLimit from 'modules/references/limits/containers/create-new-limit/create-new-limit';

const ClientCreateNewLimit: FC = () => {
  return (
    <>
      <PageLayout title='Create new Limit'>
        <CreateNewLimit />
      </PageLayout>
    </>
  );
};

export default ClientCreateNewLimit;
