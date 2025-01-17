import {apiSlice} from '../core/api/apiSlice';
import {Response} from '../core/api/Response';
import {DetailedBookingData} from '@/modules/core/api/model/booking/detailedBookingData';

const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getDetailedBookingDataById: builder.query<
      Response<DetailedBookingData>,
      number
    >({
      query: (id: number) => {
        return {
          url: `/booking/${id}`,
        };
      },
      providesTags: ['bookedByID'],
    }),
  }),
  overrideExisting: true,
});

export const {useGetDetailedBookingDataByIdQuery} = profileApiSlice;
