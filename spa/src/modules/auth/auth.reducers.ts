import { createReducer, ActionType } from 'typesafe-actions';
import * as authActions from './auth.actions';

export type AuthState = {
  isAuthenticated: boolean;
};

const authDefaultState: AuthState = {
  isAuthenticated: false,
};

const authReducer = createReducer<AuthState, ActionType<typeof authActions>>(
  authDefaultState
)
  .handleAction(authActions.setIsAuthenticated, (state, { payload }) => ({
    ...state,
    isAuthenticated: payload,
  }))
  .handleAction(authActions.logOut, (state) => ({
    ...state,
    isAuthenticated: false,
  }));

export default authReducer;
