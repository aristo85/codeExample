import InputStyled from '@/modules/core/components/inputs/InputStyled';
import React, {useEffect, useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {AuthType, LoginValues} from '../../types';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  ConfirmBtn,
  FooterInfo,
  FooterLink,
  FooterTxt,
  FooterWrapper,
  FormWrapper,
  ModalTitle,
} from '../styles';
import {useAppDispatch} from '@/modules/core/hooks';
import {RoleTypes, setAuthModal, setLogIn} from '../../authSlice';
import {useLoginMutation} from '@/modules/core/api/apiSlice';
import {
  emailValidationSchema,
  passValidationSchema,
} from '@/modules/core/services';
import {useRouter} from 'next/router';
import EyeIcon from '@/modules/core/components/icons/EyeIcon';
import Spinner from '@/modules/core/components/Spinner';
import jwtDecode from 'jwt-decode';

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [login, {isLoading}] = useLoginMutation();

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      email: emailValidationSchema,
      password: passValidationSchema,
    });
  }, []);

  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm<LoginValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const handleFormSubmit = async (data: LoginValues) => {
    try {
      const result = await login(data).unwrap();
      const payload = result.data;
      const user = jwtDecode<{user: {roleType: RoleTypes}}>(
        payload.accessToken || '',
      )?.user;
      const isAdmin = user?.roleType === RoleTypes.ADMIN;
      if (isAdmin) {
        window.location.href = `https://admin.${window.location.hostname}`;
        return;
      }

      dispatch(setLogIn(payload));
    } catch (error: any) {
      console.error(error);
      error.data.data.forEach((item: any) => {
        setError(item.field, item);
      });
    }
  };

  const handleFormSwitch = (authType: AuthType) => {
    dispatch(setAuthModal(authType));
  };

  useEffect(() => {
    const {modal} = router.query;

    return () => {
      if (modal) {
        // Remove from the route
        const routeWithoutToken = router.asPath.replace(`?modal=login`, '');
        router.replace(routeWithoutToken);
      }
    };
  }, [router]);

  return (
    <FormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <Spinner showSpinner={isLoading} />
      <ModalTitle>Вход</ModalTitle>
      <InputStyled
        label="Email"
        placeholder="Введите ваш email"
        {...register('email')}
        error={errors.email?.message}
      />
      <InputStyled
        label="Пароль"
        placeholder="Введите ваш пароль"
        isPassword
        {...register('password')}
        error={errors.password?.message}
        startAdornment={<EyeIcon />}
      />
      <ConfirmBtn
        dark
        type="submit"
        disabled={!!errors.email || !!errors.password}>
        Войти
      </ConfirmBtn>
      <FooterWrapper>
        <FooterInfo>
          <FooterTxt>Нет аккаунта?</FooterTxt>
          <FooterLink onClick={() => handleFormSwitch(AuthType.REG)}>
            Регистрация
          </FooterLink>
        </FooterInfo>
        <FooterInfo>
          <FooterTxt>Забыли пароль?</FooterTxt>
          <FooterLink onClick={() => handleFormSwitch(AuthType.RECOVER)}>
            Восстановить
          </FooterLink>
        </FooterInfo>
      </FooterWrapper>
    </FormWrapper>
  );
};

export default Login;
