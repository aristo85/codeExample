import type { StylizationProps } from 'modules/core/types/stylization.types';
import type { ResourceId } from 'modules/core/types/resource.types';

export type NewCountryValues = {
  active?: string;
  name?: string;
  code?: string;
};

export type NewCountryProps = {
  idCountry?: ResourceId;
  onApply?: (value?: NewCountryValues) => void;
  onCancel?: () => void;
} & StylizationProps;
