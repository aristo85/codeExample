type Config = {
  apiUrl: string;
  notificationWsUrl: string;
  useFakeServices: boolean;
  useDefaultTheme: boolean;
  keycloakUrl: string;
  keycloakRealm: string;
  keycloakClientId: string;
};

export const config: Config = {
  apiUrl: process.env.REACT_APP_API_URL ?? '',
  notificationWsUrl: process.env.REACT_APP_NOTIFICATION_WS_URL ?? '',
  useFakeServices: process.env.REACT_APP_USE_FAKE_SERVICES === 'true',
  useDefaultTheme: process.env.REACT_APP_USE_DEFAULT_THEME === 'true',
  keycloakUrl: process.env.REACT_APP_KEYCLOAK_URL ?? '',
  keycloakRealm: process.env.REACT_APP_KEYCLOAK_REALM ?? '',
  keycloakClientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID ?? '',
};
