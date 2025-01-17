import {apiSlice} from '../core/api/apiSlice';
import {NotificationResponse} from '@/modules/core/types';

const controlPanelApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getNotificationList: builder.query<NotificationResponse, string>({
      query: (query: string) => ({
        url: `/notification?${query}`,
      }),
      transformResponse: (
        baseQueryReturnValue: Omit<NotificationResponse, 'totalItemsCount'>,
        meta,
        arg,
      ): NotificationResponse => ({
        ...baseQueryReturnValue,
        totalItemsCount: meta?.response?.headers.get('X-TOTAL-COUNT') || '1',
      }),
      keepUnusedDataFor: 0,
      providesTags: ['notifications'],
    }),
  }),
});

export const {useGetNotificationListQuery} = controlPanelApiSlice;
