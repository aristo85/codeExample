import type { StylizationProps } from 'modules/core/types/stylization.types';
import type { ResourceId } from 'modules/core/types/resource.types';

export type CreateNewBurseValues = {
  active: string;
  name: string;
};

export type CreateNewBurseProps = {
  idBurse?: ResourceId;
  onApply?: (value?: CreateNewBurseValues) => void;
  onCancel?: () => void;
} & StylizationProps;
