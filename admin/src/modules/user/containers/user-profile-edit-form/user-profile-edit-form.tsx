import { FC, useMemo, useEffect, useCallback } from 'react';
// components
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select';
import ActionsWrapper from 'modules/core/components/actions-wrapper';
import Button from 'modules/core/components/button';
import PhoneInputNumber from 'modules/core/components/phone-input/phone-input';
import Spinner from 'modules/core/components/spinner';
// containers
import UserBlockField from 'modules/user/containers/user-block-field';
import * as yup from 'yup';

import type {
  ProfileEditFormValues,
  ProfileRuleProps,
} from './user-profile-edit-form.interface';
import { useUserProfile } from 'modules/user/hooks/use-user-profile';
// import { User } from 'modules/user/types/user.types';
import { Controller, useForm, useFormState } from 'react-hook-form';
import userProfileService from 'modules/user/services/user-profile.service';
import { yupResolver } from '@hookform/resolvers/yup';
import { format, fromUnixTime } from 'date-fns';
import { useGroupListQuery } from 'modules/references/buisness-groups/hooks/use-group-list-query';
import { useUserUpdateMutation } from 'modules/user/hooks/use-profile-update-mutation';

const UserProfileEditForm: FC<ProfileRuleProps> = ({ idUser, onClose }) => {
  // queries
  const profile = useUserProfile(idUser);
  const profileUpdateMutation = useUserUpdateMutation(idUser);
  const groupOptions = useGroupListQuery({
    page: 1,
    per_page: 50,
  }).data?.list?.map((el) => ({
    value: el.id,
    text: el.name,
  }));

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      accountType: yup.string().required('Account type is required'),
      firstName: yup.string().required('First name is required'),
      lastName: yup.string().required('Last name is required'),
    });
  }, []);
  // form
  const {
    register,
    handleSubmit,
    control,
    reset,
    // watch,
  } = useForm<ProfileEditFormValues>({
    defaultValues: {
      accountType: null,
      firstName: '',
      lastName: '',
      country: null,
      city: null,
      postalCode: '',
      phone: '',
      birthday: null,
      group: '',
    },
    resolver: yupResolver(validationSchema),
  });
  // const formState = useFormState({ control });
  // const formValues = watch();
  const { errors } = useFormState({ control });
  // const profileGroup = profile.data?.group?.name;
  // const profileVerificationStatus = profile.data?.kyc?.verified;

  useEffect(() => {
    if (profile.data) {
      const userData = userProfileService.getNormalizedProfileData(
        profile.data
      );

      reset(userData);
    }
  }, [profile.data, reset]);

  const handleFormSubmit = useCallback(
    (data: ProfileEditFormValues) => {
      if (profile.data) {
        const newProfileData = userProfileService.getUpdateProfileDataByFormData(
          data,
          profile.data
        );

        profileUpdateMutation
          .mutateAsync(newProfileData)
          .then((res) => res && onClose());
      }
    },
    [profile.data]
  );

  return (
    <div className='grid grid-cols-1 xs:mx-2 gap-y-4 bg-white rounded-lg md:w-full lg:9/12'>
      <Spinner isLoading={profile.isLoading} size='8'>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className='w-full grid gap-y-4'
        >
          <Input
            placeholder={profile.data?.user.id}
            disabled
            label={'Client ID'}
          />
          <div>
            <Input
              placeholder={'...'}
              disabled
              label={'First Name'}
              {...register('firstName')}
            />
            <span className='text-red-600'>{errors?.firstName?.message}</span>
          </div>
          <div>
            <Input
              placeholder={'...'}
              disabled
              label={'Last Name'}
              {...register('lastName')}
            />
            <span className='text-red-600'>{errors?.lastName?.message}</span>
          </div>
          {/* <Input placeholder={fullName?.firstName} label={'First Name'} /> */}
          {/* <Input placeholder={fullName?.lastName} label={'Last Name'} /> */}
          <Input
            placeholder={profile.data?.kyc.verified ? 'Verified' : 'Unverified'}
            disabled
            label={'Varification Status'}
          />
          <div>
            <Input
              placeholder={'...'}
              disabled
              label={'Birth Of Date'}
              type='date'
              {...register('birthday')}
            />
            <span className='text-red-600'>{errors?.birthday?.message}</span>
          </div>
          <Controller
            name='phone'
            control={control}
            render={({ field }) => (
              <PhoneInputNumber
                label='Phone'
                value={field.value}
                onChange={field.onChange}
                isDisabled
              />
            )}
          />
          {/* <Input placeholder={'12 April 1985'} label={'Birth Of Date'} /> */}
          <Input
            placeholder={profile.data?.user.is_company ? 'Busines' : 'Personal'}
            disabled
            label={'Account type'}
          />
          <Input
            value={
              profile.data
                ? format(
                    fromUnixTime(profile.data?.user.created_at),
                    'dd MMM yyyy HH:mm'
                  )
                : ''
            }
            placeholder='...'
            disabled
            label={'Created date'}
          />
          <Controller
            name='group'
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onChange={field.onChange}
                label='User group'
                options={groupOptions ?? []}
              />
            )}
          />
          {/* <Input placeholder={'+38 (099) 023 32 42'} label={'Phone'} /> */}
          {/* <Controller
          name='group'
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onChange={field.onChange}
              label='Default'
              options={[
                {
                  value: 'true',
                  text: 'Default',
                },
                {
                  value: 'false',
                  text: 'Not default',
                },
              ]}
            />
          )}
        />
        <Select
          value={group.name}
          onChange={() => {}}
          label={'User group'}
          options={[
            {
              value: 'Regular',
              text: 'Regular',
            },
            {
              value: 'VIP1',
              text: 'VIP1',
            },
          ]}
        /> */}
          <div>
            <Input
              placeholder={'...'}
              disabled
              label={'City'}
              {...register('city')}
            />
            <span className='text-red-600'>{errors?.city?.message}</span>
          </div>
          <div>
            <Input
              placeholder={'...'}
              disabled
              label={'Postal Code'}
              {...register('postalCode')}
            />
            <span className='text-red-600'>{errors?.postalCode?.message}</span>
          </div>
          <div>
            <Input
              placeholder={'...'}
              disabled
              label={'Address'}
              {...register('address')}
            />
            <span className='text-red-600'>{errors?.address?.message}</span>
          </div>
          {/* <Input placeholder={'Marokko'} label={'City'} /> */}
          {/* <Input placeholder={'Z34-FRTN'} label={'Postal Code'} /> */}
          {/* <Input placeholder={'Address'} label={'Address'} /> */}
          {/* <Select
            value='On'
            onChange={() => {}}
            label={'Authentication'}
            options={[
              {
                value: 'On',
                text: 'On',
              },
              {
                value: 'Off',
                text: 'Off',
              },
            ]}
          /> */}
          <UserBlockField idUser={idUser} className='mb-16' />
          <ActionsWrapper className='absolute left-0 -bottom-6'>
            <Button variant='primary'>Save</Button>
            {/* <Button variant='default'>Discard changes</Button> */}
          </ActionsWrapper>
        </form>
      </Spinner>
    </div>
  );
};

export default UserProfileEditForm;
