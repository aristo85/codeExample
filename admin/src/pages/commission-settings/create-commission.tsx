import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import NewCommission from 'modules/commission-settings/containers/commission-new-rule/new-commission';

const CreateNewCommission: FC = () => {
  return (
    <>
      <PageLayout title='Create new Commission'>
        <NewCommission />
      </PageLayout>
    </>
  );
};

export default CreateNewCommission;
