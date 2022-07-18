import type { StylizationProps } from 'modules/core/types/stylization.types';
import type { ResourceId } from 'modules/core/types/resource.types';

export type CreateNewLimitValues = {
  name: string;
  verified: boolean;
  setVerified: boolean;
};

export type CreateNewLimitProps = {
  idRole?: ResourceId;
  onApply?: (value?: CreateNewLimitValues) => void;
  onCancel?: () => void;
} & StylizationProps;
