import { combineReducers } from 'redux';
// reducers
import authReducer, { AuthState } from 'modules/auth/auth.reducers';
import localizationReducer, {
  LocalizationState,
} from 'modules/localization/localization.reducers';
import walletReducer, { WalletState } from 'modules/wallet/wallet.reducers';
import fundsReducer, { FundsState } from 'modules/funds/funds.reducers';

export type AppState = {
  auth: AuthState;
  wallet: WalletState;
  localization: LocalizationState;
  funds: FundsState;
};

export default combineReducers({
  auth: authReducer,
  wallet: walletReducer,
  localization: localizationReducer,
  funds: fundsReducer,
});
