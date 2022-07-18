import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import ClientGroupsBoard from 'modules/references/buisness-groups/containers/group-board/group-board';

const ClientGroups: FC = () => {
  return (
    <PageLayout title='Client Groups'>
      <ClientGroupsBoard />
    </PageLayout>
  );
};

export default ClientGroups;
