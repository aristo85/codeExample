import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import CreateNewGroup from 'modules/references/buisness-groups/containers/create-new-group/create-new-group';

const ClientCreateNewGroup: FC = () => {
  return (
    <>
      <PageLayout title='Create new Group'>
        <CreateNewGroup />
      </PageLayout>
    </>
  );
};

export default ClientCreateNewGroup;
