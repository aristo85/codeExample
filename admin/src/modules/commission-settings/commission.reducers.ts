import { createReducer, ActionType } from 'typesafe-actions';
import { CommissionFilterValues } from './containers/commission-filter/commission-filter.interface';
import * as commissionActions from './commission.action';

export type CommissionState = {
  commissionFilters: CommissionFilterValues | null;
};

const commissionDefaultState: CommissionState = {
  commissionFilters: null,
};

const commissionReducer = createReducer<
  CommissionState,
  ActionType<typeof commissionActions>
>(commissionDefaultState).handleAction(
  commissionActions.setCommissionFilters,
  (state, { payload }) => ({
    ...state,
    commissionFilters: payload,
  })
);
// .handleAction(
//   commissionActions.setCommissionFiltersRerender,
//   (state, { payload }) => ({
//     ...state,
//     commissionFilters: payload,
//   })
// );

export default commissionReducer;
