import type { StylizationProps } from 'modules/core/types/stylization.types';
import type { ResourceId } from 'modules/core/types/resource.types';

export type CreateNewProviderValues = {
  active: string;
  name: string;
};

export type CreateNewProviderProps = {
  idProvider?: ResourceId;
  onApply?: (value?: CreateNewProviderValues) => void;
  onCancel?: () => void;
} & StylizationProps;
