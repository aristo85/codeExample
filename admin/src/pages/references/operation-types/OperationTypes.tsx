import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import OperationsBoard from 'modules/references/operation/containers/operations-board/OperationsBoard';

const OperationTypes: FC = () => {
  return (
    <PageLayout title='Operation Types'>
      <OperationsBoard />
    </PageLayout>
  );
};

export default OperationTypes;
