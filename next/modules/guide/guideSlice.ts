import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../core/containers/StoreProvider';
import {GuideFormData} from './types';
import {BookingGuideRequestBody} from '../core/api/model/booking/bookingGuideRequestBody';

export interface GuideState {
  createGuideForm?: Partial<GuideFormData>;
  bookingGuideForm?: Partial<BookingGuideRequestBody>;
}

const initialState: GuideState = {
  createGuideForm: {},
  bookingGuideForm: {},
};

export const guideSlice = createSlice({
  name: 'guide',
  initialState,
  reducers: {
    setGuideCreateForm: (
      state,
      action: PayloadAction<Partial<GuideFormData>>,
    ) => {
      state.createGuideForm = action.payload;
    },
    setBookingGuideForm: (
      state,
      action: PayloadAction<Partial<BookingGuideRequestBody>>,
    ) => {
      state.bookingGuideForm = action.payload;
    },
  },
});
export const {setGuideCreateForm, setBookingGuideForm} = guideSlice.actions;
export const selectGuideForm = (state: RootState) =>
  state.guide.createGuideForm;
export const selectBookingGuideForm = (state: RootState) =>
  state.guide.bookingGuideForm;
