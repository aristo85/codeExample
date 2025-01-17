export enum AuthType {
  LOGIN = 'LOGIN',
  REG = 'REG',
  RECOVER = 'RECOVER',
  RESET = 'RESET',
  REG_TUR = 'REG_TUR',
  REG_PARTNER = 'REG_PARTNER',
  EMAIL_CONFIRM_SUCCESS = 'EMAIL_CONFIRM_SUCCESS',
}

export type LoginValues = {
  email: string;
  password: string;
};

export type PassRecoveryValues = {
  email: string;
};

export type RegTurValues = {
  role: 'TOURIST' | 'PARTNER';
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

export type RegPartnerValues = RegTurValues & {
  phone: string;
  company: string;
};

export type UserTokens = {
  accessToken: string;
  refreshToken: string;
};

export type ResetPassValues = {
  password: string;
  passwordRepeat: string;
  confirmationToken: string;
};

export type RegistrationValues<T extends boolean> = T extends true
  ? RegTurValues
  : RegPartnerValues;
