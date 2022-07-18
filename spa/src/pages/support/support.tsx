import React from 'react';
import { Link } from 'react-router-dom';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
// components
import SupportTable from 'modules/support/containers/support-table';
import Button from 'modules/core/components/button';
import PageLayout from 'modules/core/components/page-layout/page-layout';
// styled components
import { Root } from './support.styled';

function Support() {
  const { t } = useLocalization();

  return (
    <div>
      <Root>
        <PageLayout
          title={t('PAGES.SUPPORT.TITLE')}
          subtitle={t('PAGES.SUPPORT.SUBTITLE')}
        />
        <Link to='/create-support-topic'>
          <Button text={t('FORM.BTN.CREATE_TOPIC')} />
        </Link>
      </Root>
      <SupportTable />
    </div>
  );
}

export default Support;
