import React, {FC} from 'react';
import {PageWrapper} from '@/modules/placement/styles';
import {AddPlacement} from '@/modules/profile/AddPlacement';

const AddPlacementPage: FC = () => {
  return (
    <PageWrapper>
      <AddPlacement />
    </PageWrapper>
  );
};

export default AddPlacementPage;
