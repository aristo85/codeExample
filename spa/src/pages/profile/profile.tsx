import React from 'react';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
// containers
import ProfileForm from 'modules/user/containers/profile-form';
// components
import PageLayout from 'modules/core/components/page-layout/page-layout';

import { FormWrapper } from './profile.styled';

function Profile() {
  const { t } = useLocalization();

  return (
    <div>
      <PageLayout
        title={t('PAGES.PROFILE.TITLE')}
        subtitle={t('PAGES.PROFILE.SUBTITLE')}
      />
      <FormWrapper>
        <ProfileForm />
      </FormWrapper>
    </div>
  );
}

export default Profile;
