import { GroupFilterValues } from './containers/group-filter/group-filter.interface';
import { createReducer, ActionType } from 'typesafe-actions';
import * as groupActions from './group.action';

export type GroupState = {
  groupFilters: GroupFilterValues | null;
};

const groupDefaultState: GroupState = {
  groupFilters: null,
};

const groupReducer = createReducer<GroupState, ActionType<typeof groupActions>>(
  groupDefaultState
).handleAction(groupActions.setGroupFilters, (state, { payload }) => ({
  ...state,
  groupFilters: payload,
}));
// .handleAction(
//   groupActions.setGroupFiltersRerender,
//   (state, { payload }) => ({
//     ...state,
//     groupFilters: payload,
//   })
// );

export default groupReducer;
