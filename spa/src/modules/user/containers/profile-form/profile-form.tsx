import { FC, useCallback, useEffect } from 'react';
import { useForm, Controller, useFormState } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// components
import Input from 'modules/core/components/input';
import Button from 'modules/core/components/button';
import AvatarSelect from 'modules/user/components/avatar-select';
// import Select from 'modules/core/components/select';
import CountryInput from 'modules/country/components/country-input';
import CityInput from 'modules/country/components/cities-input';
import Spinner from 'modules/core/components/spinner';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
import { useProfileQuery } from 'modules/user/hooks/use-profile-query';
import { useProfileUpdateMutation } from 'modules/user/hooks/use-profile-update-mutation';
// services
import userProfileService from 'modules/user/services/user-profile.service';

import type {
  ProfileFormProps,
  ProfileFormValues,
} from './profile-form.interface';
import { Root, InputFieldsWrapper, Form } from './profile-form.styled';
import DateInput from '../../../core/components/date-input';
import PhoneInputNumber from 'modules/core/components/phone-input';

const validationSchema = yup.object().shape({
  accountType: yup.string().required('Account type is required'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
});

const formDefaultValues: ProfileFormValues = {
  accountType: null,
  firstName: '',
  lastName: '',
  country: null,
  city: null,
  postalCode: '',
  phone: '',
  birthday: null,
};

const ProfileForm: FC<ProfileFormProps> = () => {
  // hooks
  const { t } = useLocalization();
  // queries
  const profile = useProfileQuery();
  const profileUpdateMutation = useProfileUpdateMutation();
  // form
  const {
    control,
    handleSubmit,
    register,
    watch,
    reset,
  } = useForm<ProfileFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: formDefaultValues,
  });
  const formState = useFormState({ control });
  const formValues = watch();

  useEffect(() => {
    if (profile.data) {
      const userData = userProfileService.getNormalizedProfileData(
        profile.data
      );

      reset(userData);
    }
  }, [profile.data, reset]);

  const handleFormSubmit = useCallback(
    (data: ProfileFormValues) => {
      if (profile.data) {
        const newProfileData = userProfileService.getUpdateProfileDataByFormData(
          data,
          profile.data
        );

        profileUpdateMutation.mutate(newProfileData);
      }
    },
    [profile.data]
  );

  return (
    <Root>
      <Spinner isLoading={profile.isLoading} isAbsolute>
        <Form autoComplete='off' onSubmit={handleSubmit(handleFormSubmit)}>
          <AvatarSelect />
          <InputFieldsWrapper>
            {/* <Controller
              name='accountType'
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  value={field.value}
                  onChange={field.onChange}
                  error={!!fieldState.error?.message}
                  label={t('FORMS.PROFILE.TYPE_OF_ACC')}
                  options={[
                    {
                      value: 'personal',
                      title: t('FORMS.PROFILE.TYPE_OF_ACC.INDIVIDUAL'),
                    },
                    {
                      value: 'business',
                      title: t('FORMS.PROFILE.TYPE_OF_ACC.BUSINESS'),
                    },
                  ]}
                />
              )}
            /> */}
            <Input
              label={t('FORMS.PROFILE.TYPE_OF_ACC')}
              name='accountType'
              value={
                profile.data?.user?.is_company
                  ? t('FORMS.PROFILE.TYPE_OF_ACC.BUSINESS')
                  : t('FORMS.PROFILE.TYPE_OF_ACC.INDIVIDUAL')
              }
              disabled
            />
            <Input
              label={t('FORMS.EMAIL')}
              name='email'
              value={profile.data?.user?.email}
              disabled
            />
            <Input
              label={t('FORMS.PROFILE.FIRST_NAME')}
              {...register('firstName')}
              error={formState.errors.firstName?.message}
            />
            <Input
              label={t('FORMS.PROFILE.LAST_NAME')}
              {...register('lastName')}
              error={formState.errors.lastName?.message}
            />
            <Controller
              name='birthday'
              control={control}
              render={({ field }) => (
                <DateInput
                  label={t('FORMS.PROFILE.BIRTH_DATE')}
                  value={profile?.data?.kyc?.verified ? field.value : null}
                  onChange={field.onChange}
                  format='dd.MM.yyyy'
                  disabled={!profile?.data?.kyc?.verified ?? true}
                />
              )}
            />

            <Controller
              name='phone'
              control={control}
              render={({ field }) => (
                <PhoneInputNumber
                  label={t('FORMS.PROFILE.PHONE')}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />

            <Controller
              name='country'
              control={control}
              render={({ field }) => (
                <CountryInput
                  name='country'
                  label={t('FORMS.PROFILE.COUNTRY')}
                  value={field.value || ''}
                  onChange={field.onChange}
                />
              )}
            />
            <Controller
              name='city'
              control={control}
              render={({ field }) => (
                <CityInput
                  name='city'
                  label={t('FORMS.PROFILE.CITY')}
                  value={field.value || ''}
                  onChange={field.onChange}
                  country={formValues.country}
                  disabled={!formValues.country}
                />
              )}
            />
            <Input
              label={t('FORMS.PROFILE.POSTAL_CODE')}
              {...register('postalCode')}
            />
            <Input
              label={t('FORMS.PROFILE.ADDRESS')}
              {...register('address')}
            />
          </InputFieldsWrapper>
          <Button
            text={t('FORM.BTN.SAVE')}
            type='submit'
            isLoading={profileUpdateMutation.isLoading}
          />
        </Form>
      </Spinner>
    </Root>
  );
};

export default ProfileForm;
