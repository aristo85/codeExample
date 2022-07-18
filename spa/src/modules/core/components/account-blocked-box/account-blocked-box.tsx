import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';

import { AccountBlockedBoxProps } from './account-blocked-box.interface';
import {
  Root,
  Container,
  BlockedTitle,
  BlockedSubTitle,
  SupportButton,
} from './account-blocked-box.styled';

const AccountBlockedBox: FC<AccountBlockedBoxProps> = ({ reason, sumsub }) => {
  const { t } = useLocalization();

  console.log(sumsub);

  return (
    <Root>
      <Container>
        <BlockedTitle>{t('PAGES.BLOCKED.TITLE')}</BlockedTitle>
        <BlockedSubTitle>
          {reason}
          {t(
            sumsub ? 'PAGES.SUMSUB.BLOCKED.SUBTITLE' : 'PAGES.BLOCKED.SUBTITLE'
          )}
        </BlockedSubTitle>
        <NavLink to='/support'>
          <SupportButton text={t('FORM.BTN.CREATE_TOPIC')} />
        </NavLink>
      </Container>
    </Root>
  );
};

export default memo(AccountBlockedBox);
