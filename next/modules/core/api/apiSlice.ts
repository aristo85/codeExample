import {config} from '@/config';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {HYDRATE} from 'next-redux-wrapper';
import {
  ChangeProfilePasswordResponse,
  DeleteProfileResponse,
  ProfileResponse,
  ProfileUpdateData,
  SignInResponse,
} from '../types';
import {RootState} from '@/modules/core/containers/StoreProvider';
import {ChangePasswordProfile} from '@/modules/profile/components/ChangePasswordModal';
import {LoginValues} from '@/modules/auth/types';
import {setLogIn, setLogOut} from '@/modules/auth/authSlice';
import {getUserStorage, KeyStorage} from '@/modules/core/services';
import {Response} from '@/modules/core/api/Response';

const baseQuery = fetchBaseQuery({
  baseUrl: config.apiUrl,
  prepareHeaders: (headers, {getState}) => {
    const token = (getState() as RootState).auth.userAccessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  unknown,
  FetchBaseQueryMeta
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = async (args, api, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);
  // If there aren't any tokens in userStorage it means we don't have a logged-in user
  const data = getUserStorage(KeyStorage.USER_TOKEN_KEY);
  if (!data) {
    return result;
  }

  if (result.error && result.error.status === 401) {
    const baseQueryRefresh = fetchBaseQuery({
      baseUrl: config.apiUrl,
    });
    // try to get a new token
    const refreshToken = (api.getState() as RootState).auth.userRefreshToken;
    const refreshResult = await baseQueryRefresh(
      {
        url: '/auth/refresh',
        method: 'POST',
        body: {
          refreshToken,
        },
      },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      // store the new token
      const newToken = (refreshResult.data as SignInResponse).data;
      api.dispatch(setLogIn(newToken));

      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else if (
      !refreshResult.data &&
      (result.error?.data as {isBlocked: boolean})?.isBlocked
    ) {
      // We need it to show an error in a toast for 3 seconds for blocked user
      setTimeout(() => {
        api.dispatch(setLogOut());
      }, 3000);
    } else {
      api.dispatch(setLogOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  extractRehydrationInfo(action, {reducerPath}) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [
    'Placements',
    'bookings',
    'notifications',
    'bookedByID',
    'excursion',
    'guide',
    'partnerExcursionList',
    'partnerGuideList',
  ],
  endpoints: builder => ({
    deleteAccount: builder.mutation<DeleteProfileResponse, void>({
      query: () => ({
        url: '/user/profile',
        method: 'DELETE',
      }),
    }),
    getProfileData: builder.query<ProfileResponse, void>({
      query: () => ({
        url: `/user/profile`,
      }),
    }),
    changeProfilePassword: builder.mutation<
      ChangeProfilePasswordResponse,
      ChangePasswordProfile
    >({
      query: data => ({
        url: '/user/profile/change-password',
        method: 'POST',
        body: data,
      }),
      extraOptions: {
        name: 'changePassword',
      },
    }),
    updateProfile: builder.mutation<ProfileResponse, ProfileUpdateData>({
      query: data => ({
        url: '/user/profile',
        method: 'PUT',
        body: data,
      }),
      extraOptions: {
        name: 'profileUpdate',
      },
    }),
    login: builder.mutation<SignInResponse, LoginValues>({
      query: creds => ({
        url: '/auth/sign-in',
        method: 'POST',
        body: creds,
      }),
      extraOptions: {
        name: 'login',
      },
    }),
    passRecovery: builder.mutation({
      query: data => ({
        url: '/auth/restore-by-email',
        method: 'POST',
        body: data,
      }),
    }),
    passReset: builder.mutation({
      query: data => ({
        url: '/auth/restore-by-email',
        method: 'PUT',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: data => ({
        url: '/auth/sign-up',
        method: 'POST',
        body: data,
      }),
      extraOptions: {
        name: 'register',
      },
    }),
    resendEmail: builder.mutation({
      query: data => ({
        url: '/auth/resend-email',
        method: 'POST',
        body: data,
      }),
    }),
    registerEmailconfirm: builder.mutation({
      query: data => ({
        url: '/auth/confirm-email',
        method: 'PUT',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: data => ({
        url: '/auth/logout',
        method: 'POST',
        body: {refreshToken: data},
      }),
    }),
    file: builder.mutation<Response<string>, File>({
      query: file => {
        const bodyFormData = new FormData();
        bodyFormData.append('file', file);
        return {
          url: '/file/upload',
          method: 'POST',
          body: bodyFormData,
          formData: true,
        };
      },
      extraOptions: {
        name: 'file',
      },
    }),
  }),
});

// For CSR
export const {
  useChangeProfilePasswordMutation,
  useUpdateProfileMutation,
  useGetProfileDataQuery,
  useLoginMutation,
  usePassRecoveryMutation,
  usePassResetMutation,
  useRegisterMutation,
  useRegisterEmailconfirmMutation,
  useResendEmailMutation,
  useDeleteAccountMutation,
  useLogoutMutation,
  useFileMutation,
} = apiSlice;
