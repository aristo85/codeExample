import { createAction } from 'typesafe-actions';
// types
import type { ResourceId } from 'modules/core/types/resource.types';

export const walletSendStart = createAction(
  '@wallet/WALLET_SEND_START'
)<ResourceId>();

export const walletSendCancel = createAction(
  '@wallet/WALLET_SEND_CANCEL'
)<void>();

export const walletRequestStart = createAction(
  '@wallet/REQUEST_START_WALLET'
)<ResourceId>();

export const walletRequestCancel = createAction(
  '@wallet/WALLET_REQUEST_CANCEL'
)<void>();
