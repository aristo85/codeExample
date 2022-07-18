// import type { ResourceId } from 'modules/core/types/resource.types';
import { Country } from '../../types/countries.types';

export type CountryProps = {
  country: Country;
  onClose: () => void;
  forceRerender?: () => void;
};
