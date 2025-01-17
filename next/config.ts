type Config = {
  apiUrl: string;
  apiMockUrl: string;
  baseUrl: string;
  serverName: string;
};

export const config: Config = {
  apiUrl: process.env.NEXT_PUBLIC_APP_API_URL ?? '',
  apiMockUrl: process.env.NEXT_PUBLIC_APP_API_MOCK_URL ?? '',
  baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL ?? '',
  serverName: process.env.NEXT_PUBLIC_APP_SERVER_NAME ?? '',
};
