import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
// components
import Button from 'modules/core/components/button';

import { NotVerifiedBoxProps } from './not-verified-box.interface';
import {
  Root,
  Container,
  NotVerifiedTitle,
  NotVerifiedParagraph,
  NotVerifiedReason,
} from './not-verified-box.styled';

const NotVerifiedBox: FC<NotVerifiedBoxProps> = ({ reason }) => {
  const { t } = useLocalization();

  return (
    <Root>
      <Container elevation={1}>
        <NotVerifiedTitle>{t('PAGES.NOT_VERIFIED.TITLE')}</NotVerifiedTitle>
        <NotVerifiedReason>{reason}</NotVerifiedReason>
        <NotVerifiedParagraph>
          {t('PAGES.NOT_VERIFIED.SUBTITLE')}
        </NotVerifiedParagraph>
        <NavLink to='/verification'>
          <div className='form-submition'>
            <Button text={t('FORM.BTN.START_VERIFICATION')} />
          </div>
        </NavLink>
      </Container>
    </Root>
  );
};

export default memo(NotVerifiedBox);
