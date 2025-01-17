import InputStyled from '@/modules/core/components/inputs/InputStyled';
import React, {useEffect, useState} from 'react';
import {Controller, FieldErrors, useForm} from 'react-hook-form';
import {AuthType, RegistrationValues} from '../../types';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  FooterInfo,
  FooterLink,
  FooterTxt,
  FooterWrapper,
  ConfirmBtn,
  FormWrapper,
  ModalTitle,
  CondLink,
  CondTxt,
  RegFormSentTxt,
  RegFormSentEmail,
  ConfirmEamilSuccessBtn,
  RegPartnerTxt,
} from '../styles';
import {useAppDispatch} from '@/modules/core/hooks';
import {selectCountryCode, setAuthModal} from '../../authSlice';
import {
  useRegisterMutation,
  useResendEmailMutation,
} from '@/modules/core/api/apiSlice';
import Checkbox from '@/modules/core/components/Checkbox';
import PhoneInputNumber from '@/modules/core/components/inputs/PhoneInput';
import {
  companyValidationSchema,
  emailValidationSchema,
  nameValidationSchema,
  passValidationSchema,
  phoneValidationSchema,
} from '@/modules/core/services';
import EyeIcon from '@/modules/core/components/icons/EyeIcon';
import {useSelector} from 'react-redux';
import Spinner from '@/modules/core/components/Spinner';

const touristValidationSchema = yup.object().shape({
  email: emailValidationSchema,
  password: passValidationSchema,
  passwordRepeat: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
  firstName: nameValidationSchema('Введите ваше имя'),
  lastName: nameValidationSchema('Введите вашу фамилию'),
});

const partnerValidationSchema = (phoneLen: number) =>
  yup.object().shape({
    email: emailValidationSchema,
    password: passValidationSchema,
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают'),
    firstName: nameValidationSchema('Введите ваше имя'),
    lastName: nameValidationSchema('Введите вашу фамилию'),
    phone: phoneValidationSchema(phoneLen),
    company: companyValidationSchema,
  });

type Props = {
  authModalType: AuthType;
};

const RegistrationForm: React.FC<Props> = ({authModalType}) => {
  const countryCode = useSelector(selectCountryCode);
  const isTur = authModalType === AuthType.REG_TUR;
  const validationSchema = isTur
    ? touristValidationSchema
    : partnerValidationSchema(10 + countryCode.codeNum.length);
  const dispatch = useAppDispatch();
  const [
    registeration,
    {isLoading: isRegistering, isError: isRegisterError, error: registerError},
  ] = useRegisterMutation();
  const [
    resendEmail,
    {isLoading: isResendingEmail, isError: isResendError, error: resendError},
  ] = useResendEmailMutation();

  const [isAgreed, setIsAgreed] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
    getValues,
    watch,
    trigger,
    setError,
  } = useForm<RegistrationValues<typeof isTur>>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const handleFormSubmit = async (data: RegistrationValues<typeof isTur>) => {
    const bodyData = isTur
      ? {...data, role: 'TOURIST'}
      : {
          ...data,
          role: 'PARTNER',
        };
    try {
      const result = await registeration(bodyData).unwrap();
      result.success && setIsFormSent(true);
    } catch (error: any) {
      error?.data?.data?.forEach((item: any) => {
        setError(item.field, item);
      });
    }
  };

  const handleFormSwitch = (authType: AuthType) => {
    dispatch(setAuthModal(authType));
  };

  const handleResendEmail = async () => {
    try {
      const result = await resendEmail({email: getValues('email')}).unwrap();
      result.success && setIsFormSent(true);
    } catch (error) {}
  };

  const password = watch('password');

  useEffect(() => {
    trigger('passwordRepeat');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  return isFormSent ? (
    <>
      <Spinner showSpinner={isResendingEmail} />
      <ModalTitle>Подтверждение аккаунта</ModalTitle>
      <RegFormSentTxt>
        Мы отправили вам письмо на{' '}
        <RegFormSentEmail>{getValues().email}</RegFormSentEmail> со ссылкой.
        Пожалуйста, пройдите по этой ссылке, чтобы подтвердить свой аккаунт.
      </RegFormSentTxt>
      <ConfirmEamilSuccessBtn onClick={handleResendEmail}>
        Отправить письмо еще раз
      </ConfirmEamilSuccessBtn>
    </>
  ) : (
    <FormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <Spinner showSpinner={isRegistering} />
      <ModalTitle>Регистрация {isTur ? 'туриста' : 'партнёра'}</ModalTitle>
      {!isTur && (
        <RegPartnerTxt>
          Создайте аккаунт, чтобы зарегистрировать ваш объект или услугу и
          управлять ими
        </RegPartnerTxt>
      )}
      <InputStyled
        label="Имя"
        placeholder="Введите ваше имя"
        {...register('firstName')}
        error={errors.firstName?.message}
      />
      <InputStyled
        label="Фамилия"
        placeholder="Введите вашу фамилию"
        {...register('lastName')}
        error={errors.lastName?.message}
      />
      {!isTur && (
        <InputStyled
          label="Название Компании"
          placeholder="Введите название вашей компании"
          {...register('company')}
          error={
            (errors as FieldErrors<RegistrationValues<false>>)?.company?.message
          }
        />
      )}
      <InputStyled
        label="Email"
        placeholder="Введите ваш email"
        {...register('email')}
        autoComplete="off"
        error={errors.email?.message}
      />
      {!isTur && (
        <Controller
          name="phone"
          control={control}
          render={({field}) => {
            return (
              <PhoneInputNumber
                label="Телефон"
                placeholder="Введите номер телефона"
                error={
                  (errors as FieldErrors<RegistrationValues<false>>)?.phone
                    ?.message
                }
                onChange={field.onChange}
              />
            );
          }}
        />
      )}
      <InputStyled
        label="Пароль"
        placeholder="Введите ваш пароль"
        {...register('password')}
        isPassword
        error={errors.password?.message}
        startAdornment={<EyeIcon />}
        autoComplete="new-password"
      />
      <InputStyled
        label="Повторите пароль"
        placeholder="Введите ваш пароль еще раз"
        isPassword
        {...register('passwordRepeat')}
        error={errors.passwordRepeat?.message}
        startAdornment={<EyeIcon />}
        autoComplete="new-password"
      />
      <Checkbox
        style={{alignItems: 'flex-start'}}
        label={
          <CondTxt>
            Я принимаю{' '}
            <CondLink href="/agreement1" target="_blank">
              Пользовательское соглашение,
            </CondLink>{' '}
            <CondLink href="/agreement2" target="_blank">
              Политику конфиденциальности
            </CondLink>{' '}
            и даю{' '}
            <CondLink href="/agreement3" target="_blank">
              Согласие на обработку персональных данных
            </CondLink>
          </CondTxt>
        }
        value={isAgreed}
        setValue={setIsAgreed}
      />
      <ConfirmBtn
        dark
        type="submit"
        disabled={
          !!errors.email ||
          !!errors.password ||
          !!errors.passwordRepeat ||
          !!errors.firstName ||
          !!errors.lastName ||
          !isAgreed
        }>
        Зарегистрироваться
      </ConfirmBtn>
      <FooterWrapper>
        <FooterInfo>
          <FooterTxt>Уже зарегистрированы?</FooterTxt>
          <FooterLink onClick={() => handleFormSwitch(AuthType.LOGIN)}>
            Войти
          </FooterLink>
        </FooterInfo>
      </FooterWrapper>
    </FormWrapper>
  );
};

export default RegistrationForm;
