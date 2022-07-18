import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
// containers
import TwoStepVerificationForm from 'modules/core/containers/two-step-verification-form';
// actions
import { fundsTransferGoToPrevStep } from 'modules/funds/funds.actions';

const TransferFundsVerificationForm: FC = () => {
  const dispatch = useDispatch();

  const handleGoBack = useCallback(() => {
    dispatch(fundsTransferGoToPrevStep());
  }, [dispatch]);

  return <TwoStepVerificationForm onGoBack={handleGoBack} />;
};

export default TransferFundsVerificationForm;
