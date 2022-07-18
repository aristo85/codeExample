import type { ResourceId } from 'modules/core/types/resource.types';
import type { StylizationProps } from 'modules/core/types/stylization.types';

export type UserBlockFieldProps = {
  idUser: ResourceId;
} & StylizationProps;
