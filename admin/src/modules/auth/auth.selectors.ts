// types
import type { AppState } from 'modules/root.reducer';

export const selectIsAuthenticated = (state: AppState) => {
  return state.auth.isAuthenticated;
};

export const selectIsAdmin = (state: AppState) => {
  return state.auth.isAdmin;
};
