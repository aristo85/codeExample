import type { StylizationProps } from 'modules/core/types/stylization.types';

export type ToggleProps = {
  enabled: boolean;
  onChange: () => void;
  label?: string;
} & StylizationProps;
