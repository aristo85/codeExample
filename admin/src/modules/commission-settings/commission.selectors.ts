import { AppState } from 'modules/root.reducer';

export const selectCommissionFilters = (state: AppState) => {
  return state.commission.commissionFilters;
};
