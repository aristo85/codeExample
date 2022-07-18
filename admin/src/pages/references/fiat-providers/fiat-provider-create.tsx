import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import CreateNewFiatProvider from 'modules/references/fiat-providers/containers/create-new-provider/create-new-provider';

const CreateNewProvider: FC = () => {
  return (
    <>
      <PageLayout title='Create new Provider'>
        <CreateNewFiatProvider />
      </PageLayout>
    </>
  );
};

export default CreateNewProvider;
