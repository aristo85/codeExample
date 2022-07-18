import type { AppState } from 'modules/root.reducer';

export const selectWalletIdToSend = (state: AppState) => {
  return state.wallet.send.walletIdToSend;
};

export const selectWalletIdToRequest = (state: AppState) => {
  return state.wallet.request.walletIdToRequest;
};
