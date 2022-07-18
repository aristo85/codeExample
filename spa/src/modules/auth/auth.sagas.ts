import { spawn, call, put, takeLatest } from 'redux-saga/effects';
// actions
import { setIsAuthenticated, logOut } from 'modules/auth/auth.actions';
// services
import KeycloakService from 'modules/auth/services/keycloak.service';
import TokenService from 'modules/auth/services/token.service';

function* authInit() {
  const { keycloak } = new KeycloakService();
  const tokenService = new TokenService();

  const isAuthenticated: boolean = yield call(keycloak.init, {
    onLoad: 'login-required',
  });

  if (isAuthenticated && keycloak.token) {
    tokenService.setJwt(keycloak.token);
  }

  yield put(setIsAuthenticated(isAuthenticated));
}

function* onRefreshToken() {
  const { keycloak } = new KeycloakService();
  const tokenService = new TokenService();

  keycloak.onTokenExpired = () => {
    const minValidity = 110;

    keycloak.updateToken(minValidity).then((isUpdated) => {
      if (isUpdated && keycloak.token) {
        tokenService.setJwt(keycloak.token);
      }
    });
  };
}

function* onLogOut() {
  const { keycloak } = new KeycloakService();
  const tokenService = new TokenService();

  tokenService.resetJwt();
  keycloak.logout();
}

export default function* () {
  yield spawn(authInit);
  yield spawn(onRefreshToken);
  yield takeLatest(logOut, onLogOut);
}
