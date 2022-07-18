import { FC, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// containers
// import TransferFundsForm from 'modules/funds/containers/transfer-funds-form';
import TransferFundsConfirmData from 'modules/funds/containers/transfer-funds-confirm-data';
import TransferFundsVerificationForm from 'modules/funds/containers/transfer-funds-verification-form';
// selectors
import { selectFundsTransferStep } from 'modules/funds/funds.selectors';
// actions
import {
  fundsResetStep,
  fundsTransferGoToNextStep,
} from 'modules/funds/funds.actions';
// types
import type { TransferFundsFormValues } from 'modules/funds/containers/transfer-funds-form/transfer-funds-form.interface';
// import SendWalletModal from 'modules/wallet/containers/send-wallet-modal';

import { TransferFundsBoardProps } from './transfer-funds-board.interface';
import { Root } from './transfer-funds-board.styled';
import TransferFundsSystems from '../transfer-funds-form/transfer-funds-systems';

const TransferFundsBoard: FC<TransferFundsBoardProps> = () => {
  // hooks
  const dispatch = useDispatch();
  // state
  const [dataToSend, setDataToSend] = useState<TransferFundsFormValues | null>(
    null
  );
  // selectors
  const step = useSelector(selectFundsTransferStep);

  const handleFormSubmit = useCallback((data: TransferFundsFormValues) => {
    setDataToSend(data);
    dispatch(fundsTransferGoToNextStep());
  }, []);

  useEffect(() => {
    dispatch(fundsResetStep());
  }, [dispatch]);

  return (
    <Root>
      {step === 'form' && (
        <TransferFundsSystems onSubmit={handleFormSubmit} step={step} />
      )}
      {step === 'confirm' && !!dataToSend && (
        <TransferFundsConfirmData data={dataToSend} />
      )}
      {step === 'verification' && <TransferFundsVerificationForm />}
      {/* <SendWalletModal /> */}
    </Root>
  );
};

export default TransferFundsBoard;
