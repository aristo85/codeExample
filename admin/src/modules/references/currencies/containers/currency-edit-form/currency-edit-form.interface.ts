import { ResourceObject } from 'modules/core/types/resource.types';
import { Currency } from '../../types/currencies.types';

export type CurrencyProps = {
  currency: ResourceObject<Currency>;
  onClose: () => void;
  forceRerender?: () => void;
};
