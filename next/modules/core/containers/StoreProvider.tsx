import React from 'react';
import {Provider, TypedUseSelectorHook, useSelector} from 'react-redux';
import {apiSlice} from '../api/apiSlice';
import {configureStore} from '@reduxjs/toolkit';
import authReducer from '@/modules/auth/authSlice';
import paymentReducer from '@/modules/payment/paymentSlice';
import filterReducer from '@/modules/core/api/filterSlice';
import {createWrapper} from 'next-redux-wrapper';
import {rtkQueryErrorLogger} from '../helpers/errorHandler';
import {excursionFilterSlice} from '@/modules/excursion/components/ExcursionFilter/ExcursionFilterSlice';
import {guideFilterSlice} from '@/modules/guide/components/GuideFilter/guideFilterSlice';
import {leisureFilterSlice} from '@/modules/leisure/leisureSlice';
import {excursionSlice} from '@/modules/excursion/excursionSlice';
import {guideSlice} from '@/modules/guide/guideSlice';

const makeStore = () => {
  return configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authReducer,
      payment: paymentReducer,
      filter: filterReducer,
      excursionFilter: excursionFilterSlice.reducer,
      guideFilter: guideFilterSlice.reducer,
      leisureFilter: leisureFilterSlice.reducer,
      excursion: excursionSlice.reducer,
      guide: guideSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(apiSlice.middleware, rtkQueryErrorLogger),
  });
};

export const store = makeStore();

const StoreProvider = ({children}: {children: React.ReactNode}) => {
  return <Provider store={store}>{children}</Provider>;
};

export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore, {debug: false});
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default StoreProvider;
