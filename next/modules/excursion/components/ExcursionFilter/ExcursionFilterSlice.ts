import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/modules/core/containers/StoreProvider';
import {ExcursionFilterValuesForm} from '@/modules/excursion/excursion.types';
import {DefaultExcursionValues} from '@/modules/excursion/constants';

interface InitialExcursionFilterState {
  excursionFilterData: ExcursionFilterValuesForm;
}

const initialState: InitialExcursionFilterState = {
  excursionFilterData: {
    date: DefaultExcursionValues.date,
    dateTo: DefaultExcursionValues.dateTo,
    withChildren: DefaultExcursionValues.withChildren,
    cityId: DefaultExcursionValues.cityId,
    limit: DefaultExcursionValues.limit,
    offset: DefaultExcursionValues.offset,
    type: DefaultExcursionValues.type,
    travelMode: DefaultExcursionValues.travelMode,
  },
};

export const excursionFilterSlice = createSlice({
  name: 'excursionFilter',
  initialState,
  reducers: {
    setExcursionFilterValue: (
      state,
      action: PayloadAction<Partial<ExcursionFilterValuesForm>>,
    ) => {
      state.excursionFilterData = {
        ...state.excursionFilterData,
        ...action.payload,
      };
    },
  },
});

export const {setExcursionFilterValue} = excursionFilterSlice.actions;
export const selectExcursionFilterValues = (state: RootState) =>
  state.excursionFilter.excursionFilterData;
