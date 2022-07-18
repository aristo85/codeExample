import { createAction } from 'typesafe-actions';

export const setIsAuthenticated = createAction(
  '@auth/SET_IS_AUTHENTICATED'
)<boolean>();

export const logOut = createAction('@auth/LOG_OUT')<void>();

export const setIsAdmin = createAction('@auth/ROLE')<boolean>();
