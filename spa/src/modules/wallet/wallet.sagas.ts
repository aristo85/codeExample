import { put, spawn, takeEvery } from 'redux-saga/effects';
// actions
import {
  walletSendCancel,
  walletSendStart,
} from 'modules/wallet/wallet.actions';
// services
import WalletUrlLocationService from 'modules/wallet/services/wallet-url-location.service';

const walletUrlLocationService = new WalletUrlLocationService();

function* checkInitialLocation() {
  const sendWalletUrlParams = walletUrlLocationService.getWalletSendUrlParams();

  if (sendWalletUrlParams.sendWalletId) {
    yield put(walletSendStart(sendWalletUrlParams.sendWalletId));
  }
}

function* onWalletSendCancel() {
  walletUrlLocationService.clearWalletSendUrlParams();
}

export default function* () {
  yield spawn(checkInitialLocation);
  yield takeEvery(`${walletSendCancel}`, onWalletSendCancel);
}
