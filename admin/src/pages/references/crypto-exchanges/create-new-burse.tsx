import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import CreateNewCryptoBurse from 'modules/references/crypto-exchanges/containers/create-new-burse';

const CreateNewBurse: FC = () => {
  return (
    <>
      <PageLayout title='Create new Burse'>
        <CreateNewCryptoBurse />
      </PageLayout>
    </>
  );
};

export default CreateNewBurse;
