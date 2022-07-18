import { combineReducers } from 'redux';
import { createReducer, ActionType } from 'typesafe-actions';
// actions
import * as walletActions from 'modules/wallet/wallet.actions';

type SendWalletState = {
  walletIdToSend: string | null;
};

const sendWalletDefaultState: SendWalletState = {
  walletIdToSend: null,
};

const sendWalletReducer = createReducer<
  SendWalletState,
  ActionType<typeof walletActions>
>(sendWalletDefaultState)
  .handleAction(walletActions.walletSendStart, (state, { payload }) => ({
    ...state,
    walletIdToSend: payload,
  }))
  .handleAction(walletActions.walletSendCancel, (state) => ({
    ...state,
    ...sendWalletDefaultState,
  }));

type RequestWalletState = {
  walletIdToRequest: string | null;
};

const requestWalletDefaultState: RequestWalletState = {
  walletIdToRequest: null,
};

const requestWalletReducer = createReducer<
  RequestWalletState,
  ActionType<typeof walletActions>
>(requestWalletDefaultState)
  .handleAction(walletActions.walletRequestStart, (state, { payload }) => ({
    ...state,
    walletIdToRequest: payload,
  }))
  .handleAction(walletActions.walletRequestCancel, (state) => ({
    ...state,
    walletIdToRequest: null,
  }));

export type WalletState = {
  send: SendWalletState;
  request: RequestWalletState;
};

export default combineReducers({
  send: sendWalletReducer,
  request: requestWalletReducer,
});
