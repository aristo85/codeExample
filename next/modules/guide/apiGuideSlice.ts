import {apiSlice} from '@/modules/core/api/apiSlice';
import {getUrlQueries, UrlQueries} from '@/modules/core/helpers/urlConstructor';
import {Response} from '@/modules/core/api/Response';
import {GuideDetailedData} from '../core/api/model/guide/guideDetailedData';
import {AddGuideResponse, DefaultResponse} from '../core/types';
import {UpdateGuideRequestBody} from '../core/api/model/guide/updateGuideRequestBody';
import {CreateGuideRequestBody} from '../core/api/model/guide/createGuideRequestBody';
import {GetGuideListResponse, GuideListResponse} from '@/modules/guide/types';
import {GuideData} from '@/modules/core/api/model/guide/guideData';

export const apiGuideSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    deleteGuide: builder.mutation<DefaultResponse, number>({
      query: id => ({
        url: `/guide/${id}`,
        method: 'DELETE',
      }),
    }),
    hideShowGuide: builder.mutation<
      DefaultResponse,
      {id: number; isHide: boolean}
    >({
      query: ({id, isHide}) => ({
        url: `/guide/${id}`,
        method: 'PUT',
        body: {isHide: !isHide},
      }),
    }),
    getPartnerGuideList: builder.query<GetGuideListResponse, string>({
      query: (query: string) => ({
        url: `/guide?${query}`,
      }),
      transformResponse: (
        baseQueryReturnValue: GetGuideListResponse,
        meta,
      ): GetGuideListResponse => ({
        ...baseQueryReturnValue,
        totalCount: meta?.response?.headers.get('X-TOTAL-COUNT') || '1',
      }),
      providesTags: ['partnerGuideList'],
      keepUnusedDataFor: 0,
    }),
    getGuideById: builder.query<Response<GuideDetailedData>, {id: number}>({
      query: ({id}) => ({
        url: `/guide/${id}`,
        method: 'GET',
      }),
      providesTags: ['guide'],
    }),
    getGuideList: builder.query<GuideListResponse, UrlQueries>({
      query: (urlQueries: UrlQueries) => ({
        url: `/guide?${getUrlQueries(urlQueries)}`,
      }),
      transformResponse: (
        baseQueryReturnValue: GuideListResponse,
        meta,
      ): GuideListResponse => ({
        ...baseQueryReturnValue,
        totalCount: meta?.response?.headers.get('X-TOTAL-COUNT') || '1',
      }),
      keepUnusedDataFor: 0,
      providesTags: ['guide'],
    }),
    getGuideByIdTourist: builder.query<Response<GuideData>, {id: number}>({
      query: ({id}) => ({
        url: `/guide/${id}/tourist`,
        method: 'GET',
      }),
      providesTags: ['guide'],
    }),
    addGuide: builder.mutation<AddGuideResponse, CreateGuideRequestBody>({
      query: data => ({
        url: '/guide',
        method: 'POST',
        body: data,
      }),
      extraOptions: {
        name: 'createGuide',
      },
    }),
    updateGuide: builder.mutation<
      AddGuideResponse,
      {data: UpdateGuideRequestBody; id: number}
    >({
      query: ({data, id}) => ({
        url: `/guide/${id}`,
        method: 'PUT',
        body: data,
      }),
      extraOptions: {
        name: 'updateGuide',
      },
      invalidatesTags: ['partnerGuideList'],
    }),
  }),
  overrideExisting: true,
});

// For SSR
export const {
  endpoints: {getGuideById, getGuideByIdTourist},
} = apiGuideSlice;

// For CSR
export const {
  useGetGuideByIdQuery,
  useGetGuideListQuery,
  useAddGuideMutation,
  useUpdateGuideMutation,
  useGetPartnerGuideListQuery,
  useDeleteGuideMutation,
  useHideShowGuideMutation,
  useGetGuideByIdTouristQuery,
} = apiGuideSlice;
