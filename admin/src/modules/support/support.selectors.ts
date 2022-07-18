import { AppState } from 'modules/root.reducer';

export const selectSupportFilters = (state: AppState) => {
  return state.support.supportFilters;
};
