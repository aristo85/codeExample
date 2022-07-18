import { AppState } from 'modules/root.reducer';

export const selectLimityFilters = (state: AppState) => {
  return state.limit.limitFilters;
};
