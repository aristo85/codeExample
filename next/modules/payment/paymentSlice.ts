import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useAppSelector} from '@/modules/core/hooks';

export interface PaymentState {
  confirmationToken?: string;
  returnUrl?: string;
}

const initialState: PaymentState = {};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentData: (state, action: PayloadAction<PaymentState>) => {
      const {confirmationToken, returnUrl} = action.payload;
      state.confirmationToken = confirmationToken;
      state.returnUrl = returnUrl;
    },
    resetPaymentData: state => {
      state.confirmationToken = undefined;
      state.returnUrl = undefined;
    },
  },
});
export const {setPaymentData, resetPaymentData} = paymentSlice.actions;
export const useAppPaymentSelector = () =>
  useAppSelector(state => state.payment);
export default paymentSlice.reducer;
