import {apiSlice} from '@/modules/core/api/apiSlice';
import {
  BookedListResponse,
  ExcursionListResponse,
  GetExcursionListResponse,
} from '@/modules/excursion/excursion.types';
import {AddExcursionResponse, DefaultResponse} from '@/modules/core/types';
import {getUrlQueries, UrlQueries} from '@/modules/core/helpers/urlConstructor';
import {Response} from '@/modules/core/api/Response';
import {ExcursionDetailedData} from '@/modules/core/api/model/excursion/excursionDetailedData';
import {ExcursionData} from '@/modules/core/api/model/excursion/excursionData';
import {CreateExcursionRequestBody} from '../core/api/model/excursion/createExcursionRequestBody';
import {UpdateExcursionRequestBody} from '../core/api/model/excursion/updateExcursionRequestBody';

export const apiExcursionSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    deleteExcursion: builder.mutation<DefaultResponse, number>({
      query: id => ({
        url: `/excursion/${id}`,
        method: 'DELETE',
      }),
    }),
    hideShowExcursion: builder.mutation<
      DefaultResponse,
      {id: number; isHide: boolean}
    >({
      query: ({id, isHide}) => ({
        url: `/excursion/${id}`,
        method: 'PUT',
        body: {isHide: !isHide},
      }),
    }),
    getPartnerExcursionList: builder.query<GetExcursionListResponse, string>({
      query: (query: string) => ({
        url: `/excursion?${query}`,
      }),
      transformResponse: (
        baseQueryReturnValue: GetExcursionListResponse,
        meta,
      ): GetExcursionListResponse => ({
        ...baseQueryReturnValue,
        totalCount: meta?.response?.headers.get('X-TOTAL-COUNT') || '1',
      }),
      providesTags: ['partnerExcursionList'],
      keepUnusedDataFor: 0,
    }),
    getBookedListItems: builder.query<BookedListResponse, string>({
      query: (query: string) => {
        return {
          url: `/booking?${query}`,
        };
      },
      transformResponse: (
        baseQueryReturnValue: BookedListResponse,
        meta,
      ): BookedListResponse => ({
        ...baseQueryReturnValue,
        totalCount: meta?.response?.headers.get('X-TOTAL-COUNT') || '1',
      }),
      providesTags: ['bookings'],
    }),
    getExcursionList: builder.query<ExcursionListResponse, UrlQueries>({
      query: (urlQueries: UrlQueries) => ({
        url: `/excursion?${getUrlQueries(urlQueries)}`,
      }),
      transformResponse: (
        baseQueryReturnValue: ExcursionListResponse,
        meta,
      ): ExcursionListResponse => ({
        ...baseQueryReturnValue,
        totalCount: meta?.response?.headers.get('X-TOTAL-COUNT') || '1',
      }),
      keepUnusedDataFor: 0,
      providesTags: ['excursion'],
    }),
    getExcursionById: builder.query<
      Response<ExcursionDetailedData>,
      {id: number}
    >({
      query: ({id}) => ({
        url: `/excursion/${id}`,
        method: 'GET',
      }),
      providesTags: ['excursion'],
    }),
    getExcursionByIdTourist: builder.query<
      Response<ExcursionData>,
      {id: number}
    >({
      query: ({id}) => ({
        url: `/excursion/${id}/tourist`,
        method: 'GET',
      }),
      providesTags: ['excursion'],
    }),
    addExcursion: builder.mutation<
      AddExcursionResponse,
      CreateExcursionRequestBody
    >({
      query: data => ({
        url: '/excursion',
        method: 'POST',
        body: data,
      }),
      extraOptions: {
        name: 'createExcursion',
      },
    }),
    updateExcursion: builder.mutation<
      AddExcursionResponse,
      {data: UpdateExcursionRequestBody; id: number}
    >({
      query: ({data, id}) => ({
        url: `/excursion/${id}`,
        method: 'PUT',
        body: data,
      }),
      extraOptions: {
        name: 'updateExcursion',
      },
      invalidatesTags: ['partnerExcursionList'],
    }),
  }),
  overrideExisting: true,
});

// For SSR
export const {
  endpoints: {getExcursionById, getExcursionByIdTourist},
} = apiExcursionSlice;

// For CSR
export const {
  useGetPartnerExcursionListQuery,
  useHideShowExcursionMutation,
  useDeleteExcursionMutation,
  useGetBookedListItemsQuery,
  useGetExcursionListQuery,
  useGetExcursionByIdQuery,
  useGetExcursionByIdTouristQuery,
  useAddExcursionMutation,
  useUpdateExcursionMutation,
} = apiExcursionSlice;
