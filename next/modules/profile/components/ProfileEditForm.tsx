import React, {FC} from 'react';
import {
  ContactContent,
  Contacts,
  Divider,
  EditBtnWrapper,
  FormWrapper,
  TxtBtn,
  Input,
  FormContainer,
} from '../styles';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {
  companyValidationSchema,
  emailValidationSchema,
  nameValidationSchema,
  phoneValidationSchema,
} from '@/modules/core/services';
import {yupResolver} from '@hookform/resolvers/yup';
import PhoneInputNumber from '@/modules/core/components/inputs/PhoneInput';
import {useDispatch, useSelector} from 'react-redux';
import {
  ProfileData,
  Roles,
  selectCountryCode,
  selectProfileData,
  setProfile,
} from '@/modules/auth/authSlice';
import {useUpdateProfileMutation} from '@/modules/core/api/apiSlice';
import {useNotification} from '@/modules/core/hooks/useNotification';
import Spinner from '@/modules/core/components/Spinner';

type Props = {
  setIsEdit: (data: boolean) => void;
};

const ProfileEditForm: FC<Props> = ({setIsEdit}) => {
  const countryCode = useSelector(selectCountryCode);
  const profile = useSelector(selectProfileData);
  const validationSchema = yup.object().shape({
    firstName: nameValidationSchema('Введите ваше имя'),
    lastName: nameValidationSchema('Введите вашу фамилию'),
    email: emailValidationSchema,
    phone: phoneValidationSchema(10 + countryCode.codeNum.length),
    ...(profile?.role === Roles.partner
      ? {company: companyValidationSchema}
      : {}),
  });
  const {
    register,
    handleSubmit,
    formState: {errors, dirtyFields},
    control,
    getValues,
  } = useForm<ProfileData>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {...profile},
  });
  const [updateProfile, {isLoading, isSuccess}] = useUpdateProfileMutation();
  const dispatch = useDispatch();
  const toast = useNotification();

  const handleFormSubmit = async (data: ProfileData) => {
    const {firstName, lastName, phone, email, company, avatar, middleName} =
      data;

    try {
      const updateResponse = await updateProfile({
        phone,
        firstName,
        lastName,
        email,
        company,
        avatar,
        middleName,
      }).unwrap();
      if (updateResponse.success) dispatch(setProfile(updateResponse.data));
      setIsEdit(false);
    } catch (error) {
      toast('Произошла ошибка', 'error');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <Spinner showSpinner={isLoading} />
      <FormContainer>
        <Input
          label="Имя"
          placeholder="Введите ваше имя"
          {...register('firstName')}
          error={errors.firstName?.message}
        />
        <Input
          label="Фамилия"
          placeholder="Введите вашу фамилию"
          {...register('lastName')}
          error={errors.lastName?.message}
        />
      </FormContainer>
      {/* TODO avatar */}
      {/*<AvaContainer>*/}
      {/*<Ava>*/}
      {/*  <Camera />*/}
      {/*  <AddPhotoTxt>Добавить свое фото </AddPhotoTxt>*/}
      {/*</Ava>*/}
      {/*</AvaContainer>*/}
      <Contacts>
        <ContactContent>
          <Input
            label={'Электронная почта'}
            placeholder="Введите ваш email"
            {...register('email')}
            error={errors.email?.message}
          />
        </ContactContent>
        <ContactContent>
          <Controller
            name="phone"
            control={control}
            render={({field}) => {
              return (
                <PhoneInputNumber
                  phoneNumber={getValues('phone')}
                  label={'Контактный телефон'}
                  placeholder="Введите номер телефона"
                  error={errors.phone?.message}
                  from="profile"
                  onChange={field.onChange}
                />
              );
            }}
          />
        </ContactContent>
      </Contacts>
      <Divider />
      {profile?.role === Roles.partner && (
        <Contacts>
          <ContactContent>
            <Input
              label={'Компания'}
              placeholder="Введите название вашей компании"
              {...register('company')}
              error={errors.company?.message}
            />
          </ContactContent>
        </Contacts>
      )}
      <EditBtnWrapper>
        <>
          <TxtBtn type="submit">Сохранить </TxtBtn>
          <TxtBtn style={{color: 'red'}} onClick={() => setIsEdit(false)}>
            Отменить
          </TxtBtn>
        </>
      </EditBtnWrapper>
    </FormWrapper>
  );
};

export default ProfileEditForm;
