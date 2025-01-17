import {apiSlice} from '@/modules/core/api/apiSlice';
import {getUrlQueries, UrlQueries} from '@/modules/core/helpers/urlConstructor';
import {LeisureListResponse} from './types';

export const apiLeisureSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getLeisureList: builder.query<LeisureListResponse, UrlQueries>({
      query: (urlQueries: UrlQueries) => ({
        url: `/leisure?${getUrlQueries(urlQueries)}`,
      }),
      transformResponse: (
        baseQueryReturnValue: LeisureListResponse,
        meta,
      ): LeisureListResponse => ({
        ...baseQueryReturnValue,
        totalCount: meta?.response?.headers.get('X-TOTAL-COUNT') || '1',
      }),
      keepUnusedDataFor: 0,
    }),
  }),
  overrideExisting: true,
});

// For SSR
export const {
  endpoints: {getLeisureList},
} = apiLeisureSlice;

// For CSR
export const {useGetLeisureListQuery} = apiLeisureSlice;
