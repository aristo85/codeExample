import React from 'react';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
// components
import NotificationsList from 'modules/notification/containers/notifications-list';
import PageLayout from 'modules/core/components/page-layout/page-layout';

function Notifications() {
  const { t } = useLocalization();

  return (
    <div>
      <PageLayout
        title={t('PAGES.NOTIFICATIONS.TITLE')}
        subtitle={t('PAGES.NOTIFICATIONS.SUBTITLE')}
      />
      <NotificationsList />
    </div>
  );
}

export default Notifications;
