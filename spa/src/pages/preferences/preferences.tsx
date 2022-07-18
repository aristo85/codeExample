import React from 'react';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
// components
import PageLayout from 'modules/core/components/page-layout/page-layout';
import Preferences from 'modules/preferences/containers/preferences-form';

function Profile() {
  const { t } = useLocalization();

  return (
    <div>
      <PageLayout
        title={t('PAGES.PREFERENCES.TITLE')}
        subtitle={t('PAGES.PREFERENCES.SUBTITLE')}
      >
        <Preferences />
      </PageLayout>
    </div>
  );
}

export default Profile;
