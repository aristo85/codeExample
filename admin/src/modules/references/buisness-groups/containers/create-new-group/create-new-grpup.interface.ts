import type { StylizationProps } from 'modules/core/types/stylization.types';
import type { ResourceId } from 'modules/core/types/resource.types';

export type NewGroupValues = {
  name: string;
  description?: string;
};

export type CreateNewGroupProps = {
  idGroup?: ResourceId;
  onApply?: (value?: NewGroupValues) => void;
  onCancel?: () => void;
} & StylizationProps;
