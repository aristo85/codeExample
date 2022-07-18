import { spawn } from 'redux-saga/effects';
// sagas
import authSaga from 'modules/auth/auth.sagas';
import walletSaga from 'modules/wallet/wallet.sagas';
import localizationSaga from 'modules/localization/localization.sagas';

export default function* () {
  yield spawn(authSaga);
  yield spawn(walletSaga);
  yield spawn(localizationSaga);
}
