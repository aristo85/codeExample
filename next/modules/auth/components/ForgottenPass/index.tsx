import InputStyled from '@/modules/core/components/inputs/InputStyled';
import React, {useMemo, useState} from 'react';
import {useForm} from 'react-hook-form';
import {AuthType, PassRecoveryValues} from '../../types';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  BackBtn,
  ConfirmBtn,
  FormWrapper,
  ModalTitle,
  RecoverySucceedEmail,
  RecoverySucceedTxt,
  RecoverySucceedWrapper,
} from '../styles';
import {useAppDispatch} from '@/modules/core/hooks';
import {setAuthModal} from '../../authSlice';
import {usePassRecoveryMutation} from '@/modules/core/api/apiSlice';
import {emailValidationSchema} from '@/modules/core/services';
import Spinner from '@/modules/core/components/Spinner';

const ForgottenPass = ({}) => {
  const dispatch = useAppDispatch();
  const [passRecovery, {isLoading, isError, error}] = usePassRecoveryMutation();
  const [passRecoveryEmail, setPassRecoveryEmail] = useState<string | null>(
    null,
  );

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      email: emailValidationSchema,
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: {errors},
    setError,
  } = useForm<PassRecoveryValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const handleFormSubmit = async (data: PassRecoveryValues) => {
    try {
      const result = await passRecovery(data).unwrap();
      result.success && setPassRecoveryEmail(data.email);
    } catch (error: any) {
      error?.data?.data?.forEach((item: any) => {
        setError(item.field, item);
      });
    }
  };

  const handleFormSwitch = (authType: AuthType) => {
    dispatch(setAuthModal(authType));
  };

  return (
    <>
      <Spinner showSpinner={isLoading} />
      <FormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
        <ModalTitle>Восстановление пароля</ModalTitle>
        {!passRecoveryEmail ? (
          <>
            <InputStyled
              label="Email"
              placeholder="Введите ваш email"
              {...register('email')}
              error={errors.email?.message}
            />
            <ConfirmBtn dark type="submit" disabled={!!errors.email}>
              Отправить письмо
            </ConfirmBtn>
            <BackBtn onClick={() => handleFormSwitch(AuthType.LOGIN)} />
          </>
        ) : (
          <RecoverySucceedWrapper>
            <RecoverySucceedTxt>
              Письмо для восстановления пароля отправлено на почту
            </RecoverySucceedTxt>
            <RecoverySucceedEmail>{passRecoveryEmail}</RecoverySucceedEmail>
            <ConfirmBtn dark type="submit">
              Отправить письмо повторно
            </ConfirmBtn>
          </RecoverySucceedWrapper>
        )}
      </FormWrapper>
    </>
  );
};

export default ForgottenPass;
