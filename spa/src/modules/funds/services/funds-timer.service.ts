import {
  fundsTransferGoToPrevStep,
  fundsTransferSystemSelectorDisable,
} from '../funds.actions';

export const setTimer = (resetTime, history) =>
  setTimeout(() => {
    console.log(`timer for ${resetTime / +'1000'} secs`);
    history.push('/transfer', { fromSidebar: true });
  }, resetTime);

export const setTimerInternalTransferConfirmForm = (resetTime, dispatch) =>
  setTimeout(() => {
    console.log(`timer for ${resetTime / +'1000'} secs`);
    dispatch(fundsTransferGoToPrevStep());
  }, resetTime);

export const setTimerExternalTransferConfirmForm = (
  resetTime,
  history,
  dispatch
) =>
  setTimeout(() => {
    console.log(`timer for ${resetTime / +'1000'} secs`);
    history.push('/transfer', { fromSidebar: true });
    dispatch(fundsTransferSystemSelectorDisable());
  }, resetTime);

export const setTimerExchange = (resetTime, callback) =>
  setTimeout(() => {
    console.log(`timer for ${resetTime / +'1000'} secs`);
    // history.push('/exchange', { fromSidebar: true });
    callback();
  }, resetTime);

export const setTimerAddFunds = (resetTime, history) =>
  setTimeout(() => {
    console.log(`timer for ${resetTime / +'1000'} secs`);
    history.push('/funds', { fromSidebar: true });
  }, resetTime);
