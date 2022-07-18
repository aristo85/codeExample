import { FC } from 'react';
// components
import PageLayout from 'modules/core/components/page-layout';
import NewCountryDetails from 'modules/references/country/containers/reference-new-country/reference-new-country';

const CreateNewCountry: FC = () => {
  return (
    <>
      <PageLayout title='Create new Country'>
        <NewCountryDetails />
      </PageLayout>
    </>
  );
};

export default CreateNewCountry;
