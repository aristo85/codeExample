import type { StylizationProps } from 'modules/core/types/stylization.types';

export type SpinnerProps = {
  isLoading: boolean;
  isAbsolute?: boolean;
  size?: '8' | '12' | '16' | '20' | '24' | '28' | '32';
} & StylizationProps;
