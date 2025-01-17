import createCache from '@emotion/cache';
import * as yup from 'yup';
import {StringSchema} from 'yup';
import jwtDecode from 'jwt-decode';
import {RoleTypes} from '@/modules/auth/authSlice';
import {UserStatus} from '@/modules/core/api/model/user/userStatus';

export function createEmotionCache() {
  return createCache({key: 'css', prepend: true});
}

// Storage
export enum KeyStorage {
  USER_TOKEN_KEY = 'userTokens',
  USER_STATUS_KEY = 'userStatus',
}

export const getUserStorage = (storageKey: KeyStorage) => {
  return typeof window !== 'undefined' && localStorage.getItem(storageKey);
};

export const setUserStorage = (storageKey: KeyStorage, storageData: string) => {
  typeof window !== 'undefined' &&
    localStorage.setItem(storageKey, storageData);
};

export const resetUserStorage = (storageKey: KeyStorage) => {
  typeof window !== 'undefined' && localStorage.removeItem(storageKey);
};

// Validations
export const validLenMessage = (min: number, max: number) =>
  `Длина должна быть от ${min} до ${max} символов`;

export const emailValidationSchema = yup
  .string()
  .required('Введите ваш Email')
  .email('Недопустимые символы/формат')
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'Недопустимые символы/формат',
  )
  .typeError('Недопустимое значение');

export const passValidationSchema = yup
  .string()
  .required('Введите ваш пароль')
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,50}$/,
    'Пароль должен состоять из заглавных и строчных букв латиницы и цифр, длиной от 8 до 50',
  );

yup.addMethod<StringSchema>(yup.string, 'noOnlyDash', function (errorMessage) {
  return this.test(`no-only-dash-type`, errorMessage, function (value) {
    const {path, createError} = this;

    const valueArray = (value?.split('') ?? []).filter(
      (value, index, array) => {
        return array.indexOf(value) === index;
      },
    );

    if (valueArray.length === 1 && valueArray[0] === '-')
      return createError({path, message: errorMessage});

    return true;
  });
});

export const commentsValidationSchema = yup.string().trim().min(0).max(200);

export const nameValidationSchema = (requiredTxt?: string) =>
  yup
    .string()
    .trim()
    .required(requiredTxt ?? 'Введите ваше полное имя')
    .min(2, validLenMessage(2, 100))
    .max(100, validLenMessage(2, 100));

export const phoneValidationSchema = (length: number) =>
  yup
    .string()
    .required('Введите ваш номер телефона')
    .min(6, 'Недопустимое количество символов')
    .max(15, 'Недопустимое количество символов');

export const companyValidationSchema = yup
  .string()
  .required('Введите название вашей компании')
  .min(2, validLenMessage(2, 100))
  .max(100, validLenMessage(2, 100));

export const formatPhoneNumber = (code: string): string => {
  return code.length === 1
    ? '(###) ### #### ####'
    : code.length === 2
    ? '(###) ### ### ####'
    : '(###) ### ### ###';
};

export const setTokenInCookie = (
  name: KeyStorage,
  value: string,
  exp: number,
) => {
  const date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = name + '=' + value + '; ' + expires + '; path=/';
};

export const setStatusInCookie = (
  name: KeyStorage,
  value: UserStatus,
  exp: number,
) => {
  const date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = name + '=' + value + '; ' + expires + '; path=/';
};

export const getTokenFromCookie = (name: KeyStorage, cookies?: string) => {
  return cookies
    ?.split(';')
    .find(row => row.trim().startsWith(name))
    ?.split('=')[1];
};

export const deleteDataFromCookie = (name: KeyStorage) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

export const jwtCookieDecode = (cookie: string) => {
  const token = getTokenFromCookie(KeyStorage.USER_TOKEN_KEY, cookie);
  if (token)
    return jwtDecode<{user: {roleType: RoleTypes; id: number}}>(
      token as string,
    );
};

export const jwtUserStatusDecode = (cookie: string): UserStatus | undefined => {
  const parts = cookie.split(`; ${KeyStorage.USER_STATUS_KEY}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() as UserStatus;
  }
};
