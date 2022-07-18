import { LimitsFilterValues } from './containers/limits-filter/limits-filter.interface';
import { createReducer, ActionType } from 'typesafe-actions';
import * as limitActions from './limit.action';

export type LimitState = {
  limitFilters: LimitsFilterValues | null;
};

const limitDefaultState: LimitState = {
  limitFilters: null,
};

const limitReducer = createReducer<LimitState, ActionType<typeof limitActions>>(
  limitDefaultState
).handleAction(limitActions.setLimitFilters, (state, { payload }) => ({
  ...state,
  limitFilters: payload,
}));
// .handleAction(
//   limitActions.setLimitFiltersRerender,
//   (state, { payload }) => ({
//     ...state,
//     limitFilters: payload,
//   })
// );

export default limitReducer;
