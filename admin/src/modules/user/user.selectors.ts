import { AppState } from './../root.reducer';

export const selectProfileFilters = (state: AppState) => {
  return state.user.profileFilters;
};
