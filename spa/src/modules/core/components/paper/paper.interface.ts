import { ReactHTML } from 'react';
import type { StylizationProps } from 'modules/core/types/stylization.types';
import type { Elevation } from 'styles/theme.types';

export type PaperProps = {
  border?: boolean;
  elevation?: Elevation;
  as?: keyof ReactHTML;
} & StylizationProps;
