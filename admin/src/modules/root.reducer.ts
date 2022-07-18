import { combineReducers } from 'redux';
// reducers
import authReducer, { AuthState } from 'modules/auth/auth.reducers';
import userReducer, { UserState } from './user/user.reducers';
import countryReducer, {
  CountryState,
} from './references/country/country.reducers';
import currrencyReducer, {
  CurrencyState,
} from './references/currencies/currency.reducers';
import limitReducer, { LimitState } from './references/limits/limit.reducers';
import groupReducer, {
  GroupState,
} from './references/buisness-groups/group.reducers';
import commissionReducer, {
  CommissionState,
} from './commission-settings/commission.reducers';
import supportReducer, { SupportState } from './support/support.reducers';

export type AppState = {
  auth: AuthState;
  user: UserState;
  country: CountryState;
  currency: CurrencyState;
  commission: CommissionState;
  group: GroupState;
  limit: LimitState;
  support: SupportState;
};

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  country: countryReducer,
  currency: currrencyReducer,
  commission: commissionReducer,
  group: groupReducer,
  limit: limitReducer,
  support: supportReducer,
});
