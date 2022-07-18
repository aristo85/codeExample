import type { StylizationProps } from 'modules/core/types/stylization.types';
import type { ResourceId } from 'modules/core/types/resource.types';

export type NewCurrencyValues = {
  code: string;
  name: string;
  active: string;
  default: string;
  popular: string;
  is_token: string;
  currency_type: string;
  scale: string;
};

export type UpdateCurrencyValues = NewCurrencyValues;

export type NewCurrencyProps = {
  idCurrency?: ResourceId;
  onApply?: (value?: NewCurrencyValues) => void;
  onCancel?: () => void;
} & StylizationProps;
