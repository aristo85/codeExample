import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ExcursionType, TourFormData} from './types';
import {RootState} from '../core/containers/StoreProvider';
import {BookingExcursionRequestBody} from '../core/api/model/booking/bookingExcursionRequestBody';

export interface ExcursionState {
  createExcursionForm?: Partial<TourFormData>;
  bookingExcursionForm?: Partial<BookingExcursionRequestBody>;
}

const initialState: ExcursionState = {
  createExcursionForm: {
    type: ExcursionType.INDIVIDUAL,
  },
  bookingExcursionForm: {},
};

export const excursionSlice = createSlice({
  name: 'excursion',
  initialState,
  reducers: {
    setExcursionCreateForm: (
      state,
      action: PayloadAction<Partial<TourFormData>>,
    ) => {
      state.createExcursionForm = action.payload;
    },
    setBookingExcursionForm: (
      state,
      action: PayloadAction<Partial<BookingExcursionRequestBody>>,
    ) => {
      state.bookingExcursionForm = action.payload;
    },
  },
});
export const {setExcursionCreateForm, setBookingExcursionForm} =
  excursionSlice.actions;
export const selectExcursionForm = (state: RootState) =>
  state.excursion.createExcursionForm;
export const selectBookingExcursionForm = (state: RootState) =>
  state.excursion.bookingExcursionForm;
