import { createAction } from 'typesafe-actions';

export const fundsResetStep = createAction('@funds/FUNDS_RESET_STEP')<void>();

export const fundsTransferGoToNextStep = createAction(
  '@funds/FUNDS_TRANSFER_GO_TO_NEXT_STEP'
)<void>();

export const fundsTransferGoToPrevStep = createAction(
  '@funds/FUNDS_TRANSFER_GO_TO_PREV_STEP'
)<void>();

export const fundsTransferSystemSelectorDisable = createAction(
  '@funds/FUNDS_TRANSFER_SYSTEM_SELECTOR_DISABLE'
)<void>();
