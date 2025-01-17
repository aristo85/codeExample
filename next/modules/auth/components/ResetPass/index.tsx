import InputStyled from '@/modules/core/components/inputs/InputStyled';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {AuthType, ResetPassValues} from '../../types';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {ConfirmBtn, FormWrapper, ModalTitle, SucceedTxt} from '../styles';
import {useAppDispatch} from '@/modules/core/hooks';
import {setAuthModal} from '../../authSlice';
import {usePassResetMutation} from '@/modules/core/api/apiSlice';
import {useRouter} from 'next/router';
import {passValidationSchema} from '@/modules/core/services';
import EyeIcon from '@/modules/core/components/icons/EyeIcon';
import Spinner from '@/modules/core/components/Spinner';

const ResetPass = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [passReset, {isLoading}] = usePassResetMutation();
  const [isResetSucceed, setIsResetSucceed] = useState(false);
  const [token, setToken] = useState('');

  const validationSchema = yup.object().shape({
    password: passValidationSchema,
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают'),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
    watch,
    trigger,
  } = useForm<ResetPassValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const handleFormSubmit = async (data: ResetPassValues) => {
    try {
      const result = await passReset({
        ...data,
        confirmationToken: token,
      }).unwrap();
      result.success && setIsResetSucceed(true);
    } catch (error: any) {
      error?.data?.data?.forEach((item: any) => {
        setError(item.field, item);
      });
    }
  };

  const handleFormSwitch = (authType: AuthType) => {
    dispatch(setAuthModal(authType));
  };

  useEffect(() => {
    const {resettoken} = router.query;
    if (resettoken) {
      setToken(resettoken as string);
    }
    return () => {
      if (resettoken) {
        // Remove the token from the route
        const routeWithoutToken = router.asPath.replace(
          `?resettoken=${resettoken}`,
          '',
        );
        router.replace(routeWithoutToken);
      }
    };
  }, []);

  const password = watch('password');

  useEffect(() => {
    trigger('passwordRepeat');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  return (
    <FormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <Spinner showSpinner={isLoading} />
      <ModalTitle>Установите новый пароль</ModalTitle>
      {!isResetSucceed ? (
        <>
          <InputStyled
            label="Новый пароль"
            placeholder="Введите ваш новый пароль"
            isPassword
            {...register('password')}
            error={errors.password?.message}
            startAdornment={<EyeIcon />}
          />
          <InputStyled
            label="Повторите новый пароль"
            placeholder="Введите ваш новый пароль еще раз"
            isPassword
            {...register('passwordRepeat')}
            error={errors.passwordRepeat?.message}
            startAdornment={<EyeIcon />}
          />
          <ConfirmBtn
            dark
            type="submit"
            disabled={!!errors.passwordRepeat || !!errors.password}>
            Установить пароль
          </ConfirmBtn>
        </>
      ) : (
        <>
          <SucceedTxt>Новый пароль успешно установлен!</SucceedTxt>
          <ConfirmBtn onClick={() => handleFormSwitch(AuthType.LOGIN)}>
            Войти в аккаунт
          </ConfirmBtn>
        </>
      )}
    </FormWrapper>
  );
};

export default ResetPass;
