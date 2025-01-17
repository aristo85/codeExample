import {isRejectedWithValue} from '@reduxjs/toolkit';
import type {MiddlewareAPI, Middleware} from '@reduxjs/toolkit';
import {enqueueSnackbar} from 'notistack';

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => next => action => {
    const validationFormList = [
      'login',
      'register',
      'changePassword',
      'profileUpdate',
      'createExcursion',
      'updateExcursion',
      'createGuide',
      'updateGuide',
      'addPlacement',
      'bookCurrentRoom',
      'bookGuide',
      'bookExcursion',
    ];

    if (isRejectedWithValue(action)) {
      let message = action.payload.data?.message;
      const status = action.payload.status;
      const name = action.meta.arg.endpointName;

      if (
        validationFormList.includes(name) &&
        status === 422 &&
        action.payload.data?.data?.length > 0
      ) {
        message =
          'Найдены ошибки заполнения формы, пожалуйста, исправьте выделенные поля';
      }

      if (validationFormList.includes(name) && status === 409) {
        message =
          'Условия проживания изменились, проверьте обновленные данные и попробуйте забронировать еще раз';
      }

      if (typeof window !== 'undefined' && name !== 'file') {
        enqueueSnackbar(message, {variant: 'error'});
      }
    }

    return next(action);
  };
