import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/modules/core/containers/StoreProvider';
import {LeisureFilterValuesForm} from './types';
import {DefaultLeisureValues} from '../core/helpers/leisureQueryHandler';

interface InitialLeisureFilterState {
  leisureFilterData: LeisureFilterValuesForm;
}

const initialState: InitialLeisureFilterState = {
  leisureFilterData: {
    date: DefaultLeisureValues.date,
    dateTo: DefaultLeisureValues.dateTo,
    withChildren: DefaultLeisureValues.withChildren,
    cityId: DefaultLeisureValues.cityId,
    limit: DefaultLeisureValues.limit,
    offset: DefaultLeisureValues.offset,
    travelMode: DefaultLeisureValues.travelMode,
    excursionType: DefaultLeisureValues.excursionType,
    type: DefaultLeisureValues.type,
    popular: DefaultLeisureValues.popular,
    specialOffer: DefaultLeisureValues.specialOffer,
  },
};

export const leisureFilterSlice = createSlice({
  name: 'leisureFilter',
  initialState,
  reducers: {
    setLeisureFilterValue: (
      state,
      action: PayloadAction<Partial<LeisureFilterValuesForm>>,
    ) => {
      state.leisureFilterData = {
        ...state.leisureFilterData,
        ...action.payload,
      };
    },
  },
});

export const {setLeisureFilterValue} = leisureFilterSlice.actions;
export const selectLeisureFilterValues = (state: RootState) =>
  state.leisureFilter.leisureFilterData;
