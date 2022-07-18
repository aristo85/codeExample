import type { ResourceObject } from 'modules/core/types/resource.types';
import type { Transaction } from 'modules/transaction/types/transaction.types';

export type TransactionInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  transaction: ResourceObject<Transaction> | null;
};
