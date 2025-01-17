import {apiSlice} from '@/modules/core/api/apiSlice';
import {Response} from '@/modules/core/api/Response';
import {BookingStatus} from '@/modules/core/api/types';
import {CalculatePenaltyResponse} from '@/modules/booking/types';
import {DetailedBookingData} from '@/modules/core/api/model/booking/detailedBookingData';
import {BookingExcursionRequestBody} from '@/modules/core/api/model/booking/bookingExcursionRequestBody';
import {BookingVerifyData} from '@/modules/core/api/model/booking/bookingVerifyData';
import {BookingGuideRequestBody} from '../core/api/model/booking/bookingGuideRequestBody';
import {BookingShortData} from '@/modules/core/api/model/booking/bookingShortData';

export type BookingDetailData = {
  id: number;
  status: BookingStatus;
  bookingNumber: string;
  touristData: TouristData;
  placementData: PlacementData;
};

type TouristData = {
  firstName: string;
  lastName: string;
  middleName?: string;
  phone?: string;
  email: string;
  comments?: string;
};

type PlacementData = {
  partner: PartnerData;
  name: string;
  email: string;
  phone: string;
  images: string[];
  city: string;
  address?: string;
  coordinate?: Location;
  stayUnitKind?: StayUnitKind;
  rating?: number;
  roomStays: RoomStay[];
};

type PartnerData = {
  id?: number;
  contactName?: string;
};

type Location = {
  lat?: number;
  lng?: number;
};

enum StayUnitKind {
  NIGHT_RATE = 'NightRate',
  DAILY_RATE = 'DailyRate',
}

export interface RoomStay {
  stayDates: {
    arrivalDateTime: string;
    departureDateTime: string;
  };
  ratePlan: {id: string};
  roomType: {
    id: string;
    name: string;
    placements: {code: string}[];
  };
  guests: Guests[];
  guestCount: {
    adultCount: number;
    childAges: number[];
  };
  checksum: string;
  total: {priceBeforeTax: number; taxAmount: number};
}

export interface Guests {
  firstName: string;
  lastName: string;
}

export const apiBookingSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    calculatePenalty: builder.mutation<CalculatePenaltyResponse, number>({
      query: id => ({
        url: `/booking/${id}/calculate-penalty`,
        method: 'POST',
      }),
    }),
    getDetailBooking: builder.query<
      Response<DetailedBookingData>,
      {id: number}
    >({
      query: ({id}) => ({
        url: `/booking/${id}`,
      }),
      keepUnusedDataFor: 0,
    }),
    cancelBooking: builder.mutation<Response<object>, {id: number}>({
      query: ({id}) => ({
        url: `/booking/${id}/cancel`,
        method: 'PUT',
      }),
      async onQueryStarted({id, ...patch}, {dispatch, queryFulfilled}) {
        const {data} = await queryFulfilled;
        const patchResult = dispatch(
          apiBookingSlice.util.updateQueryData(
            'getDetailBooking',
            {id: id},
            draft => {
              Object.assign(draft, data);
            },
          ),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ['bookings', 'notifications', 'bookedByID'],
    }),
    approveBooking: builder.mutation<Response<object>, {id: number}>({
      query: ({id}) => ({
        url: `/booking/${id}/approve`,
        method: 'PUT',
      }),
      async onQueryStarted({id, ...patch}, {dispatch, queryFulfilled}) {
        const {data} = await queryFulfilled;
        const patchResult = dispatch(
          apiBookingSlice.util.updateQueryData(
            'getDetailBooking',
            {id: id},
            draft => {
              Object.assign(draft, data);
            },
          ),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ['bookings', 'notifications'],
    }),
    bookExcursion: builder.mutation<
      Response<BookingVerifyData>,
      BookingExcursionRequestBody
    >({
      query: data => ({
        url: '/booking/excursion',
        method: 'POST',
        body: data,
      }),
      extraOptions: {
        name: 'bookExcursion',
      },
    }),
    reInitPayment: builder.mutation<Response<BookingVerifyData>, number>({
      query: id => ({
        url: `/booking/${id}/payment`,
        method: 'PUT',
      }),
      extraOptions: {
        name: 'reInitPayment',
      },
    }),
    bookGuide: builder.mutation<
      Response<BookingVerifyData>,
      BookingGuideRequestBody
    >({
      query: data => ({
        url: '/booking/guide',
        method: 'POST',
        body: data,
      }),
      extraOptions: {
        name: 'bookGuide',
      },
    }),
    getBookingInfoById: builder.query<
      Response<BookingShortData>,
      {bookingId: number; token: string}
    >({
      query: ({bookingId, token}) => ({
        url: `/booking/${bookingId}/info/${token}`,
        method: 'GET',
      }),
      extraOptions: {
        name: 'bookingInfo',
      },
    }),
    cancelBookingWithToken: builder.mutation<
      Response<void>,
      {bookingId: number; token: string}
    >({
      query: ({bookingId, token}) => ({
        url: `/booking/${bookingId}/cancel/${token}`,
        method: 'PUT',
      }),
      extraOptions: {
        name: 'cancelBookingWithToken',
      },
    }),
    approveBookingWithToken: builder.mutation<
      Response<void>,
      {bookingId: number; token: string}
    >({
      query: ({bookingId, token}) => ({
        url: `/booking/${bookingId}/approve/${token}`,
        method: 'PUT',
      }),
      extraOptions: {
        name: 'approveBookingWithToken',
      },
    }),
  }),
  overrideExisting: true,
});

// For CSR

export const {
  useGetDetailBookingQuery,
  useApproveBookingMutation,
  useCancelBookingMutation,
  useCalculatePenaltyMutation,
  useBookExcursionMutation,
  useBookGuideMutation,
  useReInitPaymentMutation,
  useGetBookingInfoByIdQuery,
  useCancelBookingWithTokenMutation,
  useApproveBookingWithTokenMutation,
} = apiBookingSlice;

export const {
  endpoints: {getDetailBooking},
} = apiBookingSlice;
