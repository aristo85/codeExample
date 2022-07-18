import type { Color } from 'styles/theme.types';
import type { StylizationProps } from 'modules/core/types/stylization.types';

export type SpinnerSize = 'small' | 'medium' | 'big';

export type SpinnerProps = {
  isLoading: boolean;
  isAbsolute?: boolean;
  size?: SpinnerSize;
  color?: Color;
} & StylizationProps;
