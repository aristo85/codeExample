import { FC } from 'react';
// components
import Input from 'modules/core/components/input';
import Button from 'modules/core/components/button';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';

import type { TwoStepVerificationFormProps } from './two-step-verification-form.interface';
import {
  Root,
  Title,
  Subtitle,
  Actions,
  ActionWrapper,
} from './two-step-verification-form.styled';

const TwoStepVerificationForm: FC<TwoStepVerificationFormProps> = ({
  onGoBack,
}) => {
  const { t } = useLocalization();

  return (
    <Root>
      <Title>{t('FORMS.TWO_STEP.TITLE')}</Title>
      <Subtitle>{t('FORMS.TWO_STEP.SUBTITLE')}</Subtitle>
      <Input name='code' style={{ maxWidth: 350 }} />
      <Actions>
        <ActionWrapper>
          <Button text={t('FORM.BTN.CONFIRM')} variant='contained' />
        </ActionWrapper>
        {!!onGoBack && (
          <ActionWrapper>
            <Button
              text={t('FORM.BTN.GO_BACK')}
              variant='text'
              onClick={onGoBack}
            />
          </ActionWrapper>
        )}
      </Actions>
    </Root>
  );
};

export default TwoStepVerificationForm;
