import {BookingCardProps} from '@/modules/placement/components/BookingCard';
import {getUrlQueries, UrlQueries} from '@/modules/core/helpers/urlConstructor';

import {apiSlice} from '@/modules/core/api/apiSlice';
import {ErrorResponse} from '@/modules/core/hooks/useToast';
import {
  DetailPageData,
  GroupedByRoomDetailData,
} from '@/modules/placement/detail/detail.types';
import {BookingPaymentTypes} from '@/modules/placement/form';
import {
  BookedExcursionGroupedItemsResponseData,
  BookedListResponseData,
} from '@/modules/profile/components/BookedListWithCategories';
import {VerifyBookingData} from '@/modules/placement/form/verify.types';
import {AddPlacementByIdResponse, DefaultResponse} from '@/modules/core/types';
import {AddPlacementData} from '@/modules/profile/AddPlacement';
import {AmenityFilterItem} from '@/pages/placement';
import {Response} from '@/modules/core/api/Response';

export interface GetBookingDataResponse {
  data: BookingCardProps[];
  error?: ErrorResponse;
  totalCount?: string | null;
}

export interface GetBookingDataByAmenitiesResponse {
  data: BookingCardProps[];
  error?: ErrorResponse;
  totalCount?: string | null;
  amenitiesData: AmenityFilterItem[];
}

export interface GetPlacementListResponse {
  data: BookingCardProps[];
  totalCount?: string | null;
}

export interface GetBookingDetailDataResponse {
  data: DetailPageData;
  message: string;
  status: number;
  success: boolean;
  timestamp: number;
}

export interface GetFormattedBookingDetailDataResponse {
  data: GroupedByRoomDetailData;
  message: string;
  status: number;
  success: boolean;
  timestamp: number;
}

export interface VerifyBookingDataResponse {
  data: VerifyBookingData;
  message: string;
  status: number;
  success: boolean;
  timestamp: number;
}

export const apiPlacementSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    blockPlacement: builder.mutation<DefaultResponse, number>({
      query: id => ({
        url: `/placement/${id}/block`,
        method: 'PUT',
      }),
    }),
    unblockPlacement: builder.mutation<DefaultResponse, number>({
      query: id => ({
        url: `/placement/${id}/unblock`,
        method: 'PUT',
      }),
    }),
    deletePlacement: builder.mutation<DefaultResponse, number>({
      query: id => ({
        url: `/placement/${id}`,
        method: 'DELETE',
        body: id,
      }),
    }),
    getPartnerPlacements: builder.query<GetPlacementListResponse, string>({
      query: (query: string) => ({
        url: `/placement?${query}`,
      }),
      transformResponse: (
        baseQueryReturnValue: GetPlacementListResponse,
        meta,
        arg,
      ): GetPlacementListResponse => ({
        ...baseQueryReturnValue,
        totalCount: meta?.response?.headers.get('X-TOTAL-COUNT') || '1',
      }),
      providesTags: ['Placements'],
      keepUnusedDataFor: 0,
    }),
    getBookingData: builder.query<GetBookingDataResponse, UrlQueries>({
      query: (urlQueries: UrlQueries) => ({
        url: `/placement?${getUrlQueries(urlQueries)}`,
      }),
      transformResponse: (
        baseQueryReturnValue: BookingCardProps[],
        meta,
        arg,
      ): GetBookingDataResponse => ({
        data: baseQueryReturnValue,
        totalCount: meta?.response?.headers.get('X-TOTAL-COUNT') || '1',
      }),
      keepUnusedDataFor: 0,
    }),
    getDetailBookingData: builder.query<
      GetBookingDetailDataResponse,
      {id: number; urlQueries: UrlQueries | string}
    >({
      query: ({id, urlQueries}) => ({
        url: `/placement/${id}?${
          typeof urlQueries !== 'string'
            ? getUrlQueries(urlQueries)
            : urlQueries
        }`,
      }),
    }),
    getSpecialOffer: builder.query<{data: BookingCardProps[]}, void>({
      query: () => ({
        url: `/placement?specialOffer=true`,
      }),
    }),
    bookCurrentRoom: builder.mutation<
      VerifyBookingDataResponse,
      BookingPaymentTypes
    >({
      query: data => ({
        url: '/booking/verify',
        method: 'POST',
        body: data,
      }),
      extraOptions: {
        name: 'bookCurrentRoom',
      },
    }),
    getBookedListItems: builder.query<BookedListResponseData, string>({
      query: (query: string) => {
        return {
          url: `/booking?${query}`,
        };
      },
      transformResponse: (
        baseQueryReturnValue: BookedListResponseData,
        meta,
      ): BookedListResponseData => ({
        ...baseQueryReturnValue,
        totalCount: meta?.response?.headers.get('X-TOTAL-COUNT') || '1',
      }),
      providesTags: ['bookings'],
      keepUnusedDataFor: 0,
    }),
    getBookedExcursionGroupedItems: builder.query<
      BookedExcursionGroupedItemsResponseData,
      string
    >({
      query: query => {
        return {
          url: `/booking/excursion?${query}`,
        };
      },
      transformResponse: (
        baseQueryReturnValue: BookedExcursionGroupedItemsResponseData,
        meta,
      ): BookedExcursionGroupedItemsResponseData => ({
        ...baseQueryReturnValue,
        totalCount: meta?.response?.headers.get('X-TOTAL-COUNT') || '1',
      }),
      keepUnusedDataFor: 0,
      providesTags: ['bookings'],
    }),
    addPlacementById: builder.mutation<
      AddPlacementByIdResponse,
      AddPlacementData
    >({
      query: data => ({
        url: '/placement',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Placements'],
      extraOptions: {
        name: 'addPlacement',
      },
    }),
    getBookingDataByAmenities: builder.query<
      GetBookingDataByAmenitiesResponse,
      UrlQueries
    >({
      query: (urlQueries: UrlQueries) => ({
        url: `/placement?${getUrlQueries(urlQueries)}`,
      }),
      transformResponse: (
        baseQueryReturnValue: GetBookingDataByAmenitiesResponse,
        meta,
        arg,
      ): GetBookingDataByAmenitiesResponse => {
        return {
          data: baseQueryReturnValue.data,
          totalCount: meta?.response?.headers.get('X-TOTAL-COUNT') || '1',
          amenitiesData: baseQueryReturnValue.amenitiesData,
        };
      },
    }),
    addExcursionExternalPlaces: builder.mutation<
      Response<void>,
      {excursionId: number; date: string; time: string; count: number}
    >({
      query: data => ({
        url: '/booking/excursion',
        method: 'PUT',
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});

// For SSR
export const {
  endpoints: {getBookingData, getDetailBookingData},
} = apiPlacementSlice;

// For CSR

export const {
  useGetDetailBookingDataQuery,
  useGetSpecialOfferQuery,
  useBookCurrentRoomMutation,
  useGetBookedListItemsQuery,
  useAddPlacementByIdMutation,
  useGetPartnerPlacementsQuery,
  useDeletePlacementMutation,
  useUnblockPlacementMutation,
  useBlockPlacementMutation,
  useGetBookedExcursionGroupedItemsQuery,
  useAddExcursionExternalPlacesMutation,
  useGetBookingDataByAmenitiesQuery,
} = apiPlacementSlice;
