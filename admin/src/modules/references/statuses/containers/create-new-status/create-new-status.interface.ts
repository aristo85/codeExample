import type { StylizationProps } from 'modules/core/types/stylization.types';
import type { ResourceId } from 'modules/core/types/resource.types';

export type CreateNewStatusValues = {
  active?: string;
  name?: string;
  code?: string;
};

export type CreateNewStatusProps = {
  idCountry?: ResourceId;
  onApply?: (value?: CreateNewStatusValues) => void;
  onCancel?: () => void;
} & StylizationProps;
