import { AppState } from 'modules/root.reducer';

export const selectGroupFilters = (state: AppState) => {
  return state.group.groupFilters;
};
