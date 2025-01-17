import InputStyled from '@/modules/core/components/inputs/InputStyled';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useChangeProfilePasswordMutation} from '@/modules/core/api/apiSlice';
import {passValidationSchema} from '@/modules/core/services';
import EyeIcon from '@/modules/core/components/icons/EyeIcon';
import {ConfirmBtn, FormWrapper} from '@/modules/auth/components/styles';
import {ModalTitle} from '@/modules/auth/components/ModalAuth/styles';
import ModalAuth from '@/modules/auth/components/ModalAuth';
import {useNotification} from '@/modules/core/hooks/useNotification';
import Spinner from '@/modules/core/components/Spinner';

const changePasswordValidationSchema = yup.object().shape({
  oldPassword: passValidationSchema,
  newPassword: passValidationSchema,
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Пароли не совпадают'),
});

export interface ChangePasswordProfile {
  oldPassword: string;
  newPassword: string;
  repeatPassword: string;
}

export interface ChangePasswordProfileProps {
  closeButton: () => void;
}
export const ChangePasswordProfile: React.FC<ChangePasswordProfileProps> = ({
  closeButton,
}) => {
  const [changePasswordFn, {isLoading, isError, error}] =
    useChangeProfilePasswordMutation();
  const toast = useNotification();
  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
    watch,
    trigger,
  } = useForm<ChangePasswordProfile>({
    resolver: yupResolver(changePasswordValidationSchema),
    mode: 'onChange',
  });
  const handleFormSubmit = async (data: ChangePasswordProfile) => {
    const response = await changePasswordFn(data).unwrap();
    if (response?.success) {
      toast('Пароль обновлен успешно', 'success');
      closeButton();
    }
  };

  const password = watch('newPassword');

  useEffect(() => {
    trigger('repeatPassword');
  }, [password]);

  return (
    <ModalAuth isOpen={true} onClose={closeButton}>
      <Spinner showSpinner={isLoading} />
      <FormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
        <ModalTitle>Смена пароля</ModalTitle>
        <InputStyled
          label="Старый пароль"
          placeholder="Введите ваш старый пароль"
          {...register('oldPassword')}
          isPassword
          error={errors.oldPassword?.message}
          startAdornment={<EyeIcon />}
        />
        <InputStyled
          label="Новый пароль"
          placeholder="Введите ваш новый пароль"
          {...register('newPassword')}
          isPassword
          error={errors.newPassword?.message}
          startAdornment={<EyeIcon />}
        />
        <InputStyled
          label="Повторите новый пароль"
          placeholder="Введите ваш новый пароль еще раз"
          isPassword
          {...register('repeatPassword')}
          error={errors.repeatPassword?.message}
          startAdornment={<EyeIcon />}
        />
        <ConfirmBtn
          dark
          type="submit"
          disabled={
            !!errors.oldPassword ||
            !!errors.newPassword ||
            !!errors.repeatPassword
          }>
          Сменить пароль
        </ConfirmBtn>
      </FormWrapper>
    </ModalAuth>
  );
};
