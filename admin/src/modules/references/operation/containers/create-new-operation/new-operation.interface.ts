import type { StylizationProps } from 'modules/core/types/stylization.types';
import type { ResourceId } from 'modules/core/types/resource.types';

export type NewOperationValues = {
  active?: string;
  name?: string;
  code?: string;
};

export type NewOperationProps = {
  idCountry?: ResourceId;
  onApply?: (value?: NewOperationValues) => void;
  onCancel?: () => void;
} & StylizationProps;
