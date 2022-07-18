type Config = {
  apiUrl: string;
  keycloakUrl: string;
  keycloakRealm: string;
  keycloakClientId: string;
};

export const config: Config = {
  apiUrl: process.env.REACT_APP_API_URL ?? '',
  keycloakUrl: process.env.REACT_APP_KEYCLOAK_URL ?? '',
  keycloakRealm: process.env.REACT_APP_KEYCLOAK_REALM ?? '',
  keycloakClientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID ?? '',
};
