import type { CSSProperties } from 'react';

export type StylizationProps = {
  className?: string;
  style?: CSSProperties;
};

export type OmitStylizationProps<Type> = Omit<Type, 'className' | 'style'>;
