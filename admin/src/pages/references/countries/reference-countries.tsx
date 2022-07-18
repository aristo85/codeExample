import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import ReferenceBoard from 'modules/references/country/containers/reference-board/reference-board';

const ReferenceCountries: FC = () => (
  <PageLayout title='Countries'>
    <ReferenceBoard />
  </PageLayout>
);

export default ReferenceCountries;
