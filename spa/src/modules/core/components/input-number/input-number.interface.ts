import type { InputProps } from 'modules/core/components/input/input.interface';

export type InputNumberProps = Omit<InputProps, 'value'> & {
  value?: string;
};
