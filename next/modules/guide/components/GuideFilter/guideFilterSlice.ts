import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/modules/core/containers/StoreProvider';
import {ExcursionFilterValuesForm} from '@/modules/excursion/excursion.types';
import {DefaultExcursionValues} from '@/modules/excursion/constants';
import {GuideFilterValuesForm} from '@/modules/guide/guidetypes';

interface InitialGuideFilterState {
  guideFilterData: GuideFilterValuesForm;
}

const initialState: InitialGuideFilterState = {
  guideFilterData: {
    date: DefaultExcursionValues.date,
    dateTo: DefaultExcursionValues.dateTo,
    withChildren: DefaultExcursionValues.withChildren,
    cityId: DefaultExcursionValues.cityId,
    limit: DefaultExcursionValues.limit,
    offset: DefaultExcursionValues.offset,
    travelMode: DefaultExcursionValues.travelMode,
  },
};

export const guideFilterSlice = createSlice({
  name: 'guideFilter',
  initialState,
  reducers: {
    setGuideFilterValue: (
      state,
      action: PayloadAction<Partial<ExcursionFilterValuesForm>>,
    ) => {
      state.guideFilterData = {
        ...state.guideFilterData,
        ...action.payload,
      };
    },
  },
});

export const {setGuideFilterValue} = guideFilterSlice.actions;
export const selectGuideFilterValues = (state: RootState) =>
  state.guideFilter.guideFilterData;
