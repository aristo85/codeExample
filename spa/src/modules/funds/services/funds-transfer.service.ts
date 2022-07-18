// utils
import { singleton } from 'utils/object.utils';
// types
import type { FundsTransferStep } from 'modules/funds/types/funds-transfer.types';

class FundsTransferService {
  public getNextStep(step: FundsTransferStep): FundsTransferStep {
    if (step === 'form') {
      return 'confirm';
    } else if (step === 'confirm') {
      return 'verification';
    }

    return 'verification';
  }

  public getPrevStep(step: FundsTransferStep): FundsTransferStep {
    if (step === 'confirm') {
      return 'form';
    } else if (step === 'verification') {
      return 'confirm';
    }

    return 'form';
  }
}

export default singleton(FundsTransferService);
