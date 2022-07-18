import React, { FC } from 'react';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
// containers
import CreateSupportTopicForm from 'modules/support/containers/create-support-topic-form';
// components
import PageLayout from 'modules/core/components/page-layout/page-layout';

const CreateSupportTopic: FC = () => {
  const { t } = useLocalization();

  return (
    <>
      <PageLayout title={t('PAGES.CREATE_TOPIC.TITLE')} />
      <CreateSupportTopicForm />
    </>
  );
};

export default CreateSupportTopic;
