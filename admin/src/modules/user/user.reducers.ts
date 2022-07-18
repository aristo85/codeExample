import { createReducer, ActionType } from 'typesafe-actions';
import { UsersFilterValues } from './containers/users-filter/users-filter.interface';
import * as userActions from './user.actions';

export type UserState = {
  profileFilters: UsersFilterValues | null;
};

const userDefaultState: UserState = {
  profileFilters: null,
};

const userReducer = createReducer<UserState, ActionType<typeof userActions>>(
  userDefaultState
).handleAction(userActions.setUserFilters, (state, { payload }) => ({
  ...state,
  profileFilters: payload,
}));

export default userReducer;
