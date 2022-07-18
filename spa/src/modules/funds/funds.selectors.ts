import type { AppState } from 'modules/root.reducer';

export const selectFundsTransferStep = (state: AppState) => {
  return state.funds.transfer.step;
};

export const selectFundsTransferSystemSelector = (state: AppState) => {
  return state.funds.transfer.isSystemSelectorDisabled;
};
