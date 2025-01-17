import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthType} from './types';
import {RootState} from '../core/containers/StoreProvider';
import {
  deleteDataFromCookie,
  getUserStorage,
  KeyStorage,
  resetUserStorage,
  setStatusInCookie,
  setTokenInCookie,
  setUserStorage,
} from '../core/services';
import {Country} from 'react-phone-number-input';
import {UserStatus} from '@/modules/core/api/model/user/userStatus';

export enum Roles {
  partner = 'PARTNER',
  tourist = 'TOURIST',
  guest = 'GUEST',
  admin = 'ADMIN',
}

export enum RoleTypes {
  PARTNER = 30,
  TOURIST = 20,
  ADMIN = 10,
}

export interface ProfileData {
  firstName: string;
  lastName: string;
  middleName?: string;
  phone?: string;
  email: string;
  avatar?: string;
  birthdayDate?: string;
  commission?: string;
  company?: string;
  status: UserStatus;
  role: Roles.partner | Roles.tourist | Roles.admin;
}
export interface AuthState {
  authModal: AuthType | null;
  userAccessToken: string | null | undefined | false;
  userRefreshToken: string | null | undefined | false;
  countryCode: {codeStr: Country; codeNum: string};
  profileInfo: ProfileData | null;
}

const tokens = getUserStorage(KeyStorage.USER_TOKEN_KEY);
const userTokens = tokens && JSON.parse(tokens);

const initialState: AuthState = {
  authModal: null,
  userAccessToken: userTokens?.accessToken || null,
  userRefreshToken: userTokens?.refreshToken || null,
  countryCode: {codeStr: 'RU', codeNum: '7'},
  profileInfo: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCountryCode: (state, action) => {
      state.countryCode = action.payload;
    },
    setAuthModal: (state, action) => {
      state.authModal = action.payload;
    },
    setLogOut: state => {
      state.profileInfo = null;
      state.userAccessToken = null;
      state.userRefreshToken = null;
      resetUserStorage(KeyStorage.USER_TOKEN_KEY);
      deleteDataFromCookie(KeyStorage.USER_TOKEN_KEY);
      deleteDataFromCookie(KeyStorage.USER_STATUS_KEY);

      const notReloadingOnThesePages = [
        '/booking/placement/',
        '/booking/excursion/',
        '/booking/guide/',
      ];

      if (
        !notReloadingOnThesePages.some(path =>
          window.location.pathname.startsWith(path),
        )
      ) {
        window.location.reload();
      }
    },
    setLogIn: (state, action) => {
      setUserStorage(KeyStorage.USER_TOKEN_KEY, JSON.stringify(action.payload));
      setTokenInCookie(
        KeyStorage.USER_TOKEN_KEY,
        action.payload.accessToken,
        7,
      );
      state.userAccessToken = action.payload.accessToken;
      state.userRefreshToken = action.payload.refreshToken;
      state.authModal = null;
    },
    setProfile: (state, action: PayloadAction<ProfileData>) => {
      state.profileInfo = {...action.payload};
      if (action.payload.role === Roles.partner) {
        setStatusInCookie(KeyStorage.USER_STATUS_KEY, action.payload.status, 7);
      }
    },
    cleanProfile: state => {
      state.profileInfo = null;
    },
  },
});
export const {
  setAuthModal,
  setLogOut,
  setLogIn,
  setCountryCode,
  setProfile,
  cleanProfile,
} = authSlice.actions;
export const selectAuthModal = (state: RootState) => state.auth.authModal;
export const selectUserToken = (state: RootState) => state.auth.userAccessToken;
export const selectRefreshToken = (state: RootState) =>
  state.auth.userRefreshToken;
export const selectCountryCode = (state: RootState) => state.auth.countryCode;

export const selectProfileData = (state: RootState) => state.auth.profileInfo;

export default authSlice.reducer;
