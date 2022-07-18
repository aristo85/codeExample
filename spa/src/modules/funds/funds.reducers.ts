import { combineReducers } from 'redux';
import { createReducer, ActionType } from 'typesafe-actions';
// services
import FundsTransferService from 'modules/funds/services/funds-transfer.service';
// actions
import * as fundsActions from 'modules/funds/funds.actions';
// types
import { FundsTransferStep } from 'modules/funds/types/funds-transfer.types';

const fundsTransferService = new FundsTransferService();

type TransferFundsState = {
  step: FundsTransferStep;
  isSystemSelectorDisabled: boolean;
};

const transferFundsDefaultState: TransferFundsState = {
  step: 'form',
  isSystemSelectorDisabled: false,
};

const transferFundsReducer = createReducer<
  TransferFundsState,
  ActionType<typeof fundsActions>
>(transferFundsDefaultState)
  .handleAction(fundsActions.fundsTransferGoToNextStep, (state) => ({
    ...state,
    step: fundsTransferService.getNextStep(state.step),
  }))
  .handleAction(fundsActions.fundsTransferGoToPrevStep, (state) => ({
    ...state,
    step: fundsTransferService.getPrevStep(state.step),
  }))
  .handleAction(fundsActions.fundsResetStep, (state) => ({
    ...state,
    step: 'form',
  }))
  .handleAction(fundsActions.fundsTransferSystemSelectorDisable, (state) => ({
    ...state,
    isSystemSelectorDisabled: !state.isSystemSelectorDisabled,
  }));

export type FundsState = {
  transfer: TransferFundsState;
};

export default combineReducers({
  transfer: transferFundsReducer,
});
