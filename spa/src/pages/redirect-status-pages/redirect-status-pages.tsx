import React from 'react';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
// components
import PageLayout from 'modules/core/components/page-layout/page-layout';
import Icon from 'modules/core/components/icon/icon';
import Paper from 'modules/core/components/paper';

const RedirectStatusPages = ({ status }) => {
  const { t } = useLocalization();

  const isSuccessful = status === 'success';

  return (
    <div>
      <PageLayout
        title={
          isSuccessful ? t('PAGES.SUCCESS.TITLE') : t('PAGES.REJECTED.TITLE')
        }
        subtitle={
          isSuccessful
            ? t('PAGES.SUCCESS.SUBTITLE')
            : t('PAGES.REJECTED.SUBTITLE')
        }
      />
      <Paper
        style={{
          maxWidth: 690,
          margin: '0 auto',
          textAlign: 'center',
          padding: 100,
        }}
      >
        <Icon name={isSuccessful ? 'doneAll' : 'reportProblem'} />
        <p style={{ fontWeight: 500, fontSize: 25, marginTop: 40 }}>
          {isSuccessful
            ? t('PAGES.SUCCESS.SUBTITLE')
            : t('PAGES.REJECTED.SUBTITLE')}
        </p>
      </Paper>
    </div>
  );
};

export default RedirectStatusPages;
