import { spawn } from 'redux-saga/effects';
// sagas
import authSaga from 'modules/auth/auth.sagas';

export default function* () {
  yield spawn(authSaga);
}
