import { FC, useCallback } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router';
// components
import Input from 'modules/core/components/input';
import Textarea from 'modules/core/components/input/textarea';
import Button from 'modules/core/components/button';
// hooks
import { useSupportTopicCreateMutation } from 'modules/support/hooks/use-support-topic-create-mutation';
import { useProfileQuery } from 'modules/user/hooks/use-profile-query';
import { useLocalization } from 'modules/localization/hooks/use-localization';

import type { SupportTopicFormValues } from './create-support-topic-form.interface';
import { Root, Form, FormRow } from './create-support-topic-form.styled';

const CreateSupportTopicForm: FC = () => {
  const { t } = useLocalization();

  const validationSchema = yup.object({
    name: yup.string().required(t('FORM.VALIDATION.REQUIRED')),
    message: yup.string().required(t('FORM.VALIDATION.REQUIRED')),
  });

  // queries
  const supportTopicCreateMutation = useSupportTopicCreateMutation();
  const profile = useProfileQuery();
  // hooks
  const history = useHistory();
  const { register, handleSubmit, control } = useForm<SupportTopicFormValues>({
    defaultValues: {
      name: '',
      message: '',
    },
    resolver: yupResolver(validationSchema),
  });
  const { errors } = useFormState({ control });

  const handleFormSubmit = useCallback(
    (data: SupportTopicFormValues) => {
      if (profile.data) {
        supportTopicCreateMutation.mutate(
          {
            name: data.name,
            description: data.message,
          },
          {
            onSuccess: () => {
              history.push('/support');
            },
          }
        );
      }
    },
    [supportTopicCreateMutation, profile.data]
  );

  return (
    <Root>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormRow>
          <Input
            label={t('PAGES.CREATE_TOPIC.REQ.NAME')}
            {...register('name')}
            error={errors.name?.message}
          />
        </FormRow>
        <FormRow>
          <Textarea
            label={t('PAGES.CREATE_TOPIC.MESSAGE')}
            {...register('message')}
            error={errors.message?.message}
          />
        </FormRow>
        <Button
          text={t('FORM.BTN.SEND')}
          type='submit'
          isLoading={supportTopicCreateMutation.isLoading}
        />
      </Form>
    </Root>
  );
};

export default CreateSupportTopicForm;
