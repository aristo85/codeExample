import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import NewOperation from 'modules/references/operation/containers/create-new-operation/NewOperation';

const CreateOpration: FC = () => {
  return (
    <>
      <PageLayout title='Create new Operation'>
        <NewOperation />
      </PageLayout>
    </>
  );
};

export default CreateOpration;
