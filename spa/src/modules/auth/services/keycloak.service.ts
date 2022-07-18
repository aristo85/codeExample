import Keycloak, { KeycloakConfig, KeycloakInstance } from 'keycloak-js';
// utils
import { singleton } from 'utils/object.utils';
// config
import { config } from 'config';

const keycloakConfig: KeycloakConfig = {
  url: config.keycloakUrl,
  realm: config.keycloakRealm,
  clientId: config.keycloakClientId,
};

class KeycloakService {
  public readonly keycloak: KeycloakInstance;

  constructor() {
    this.keycloak = Keycloak(keycloakConfig);
  }
}

export default singleton(KeycloakService);
