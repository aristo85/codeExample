import { PaginationProps } from 'modules/core/components/pagination/pagination.interface';
import { ResourceObject } from 'modules/core/types/resource.types';
import { Country } from '../../types/countries.types';

export type ReferenceCountriesListProps = {
  countries: ResourceObject<Country>[];
  paginationProps: PaginationProps;
  isLoading: boolean;
  forceRerender: () => void;
};
