import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {apiSlice} from '@/modules/core/api/apiSlice';
import {FilterValues} from '@/modules/home/components/Filters/types';
import {RootState} from '@/modules/core/containers/StoreProvider';
import {DefaultQueriesBookingValues} from '@/modules/placement/constants';

export interface ResponseCities {
  id: number;
  name: string;
  imageUrl: string | null;
  isCarousel: boolean;
}

interface ApiFilterResponse {
  status: number;
  message: string;
  timestamp: number;
  success: boolean;
  data: {cityList: ResponseCities[]};
}

interface InitialFilterState {
  filterData: FilterValues<string>;
}

const initialState: InitialFilterState = {
  filterData: {
    arrivalDate: DefaultQueriesBookingValues.arrivalDate,
    departureDate: DefaultQueriesBookingValues.departureDate,
    cityId: DefaultQueriesBookingValues.cityId,
    rating: DefaultQueriesBookingValues.rating,
    numOfAdult: DefaultQueriesBookingValues.numOfAdult,
    childAges: DefaultQueriesBookingValues.childAges,
    roomId: DefaultQueriesBookingValues.roomId,
    ratePlanId: DefaultQueriesBookingValues.ratePlanId,
    limit: DefaultQueriesBookingValues.limit,
    offset: DefaultQueriesBookingValues.offset,
    popular: DefaultQueriesBookingValues.popular,
    placementType: DefaultQueriesBookingValues.placementType,
    breakfast: DefaultQueriesBookingValues.breakfast,
    amenityCodes: DefaultQueriesBookingValues.amenityCodes,
    specialOffer: DefaultQueriesBookingValues.specialOffer,
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterValue: (
      state,
      action: PayloadAction<Partial<FilterValues<string>>>,
    ) => {
      state.filterData = {...state.filterData, ...action.payload};
    },
  },
});

export const apiFilterSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCities: builder.query<ApiFilterResponse, void>({
      query: () => ({
        url: `/configuration`,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useGetCitiesQuery} = apiFilterSlice;
export const {setFilterValue} = filterSlice.actions;
export const selectFilterValues = (state: RootState) => state.filter.filterData;

export default filterSlice.reducer;
