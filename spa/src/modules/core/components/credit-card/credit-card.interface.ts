import type { InputHTMLAttributes } from 'react';
import type { StylizationProps } from 'modules/core/types/stylization.types';

export type CreditCardProps = {
  variant: 'visa' | 'masterCard';
  cardNumberInputProps?: InputHTMLAttributes<HTMLInputElement>;
  expiryMonthInputProps?: InputHTMLAttributes<HTMLInputElement>;
  expiryYearInputProps?: InputHTMLAttributes<HTMLInputElement>;
  holderNameInputProps?: InputHTMLAttributes<HTMLInputElement>;
  cvvInputProps?: InputHTMLAttributes<HTMLInputElement>;
} & StylizationProps &
  InputHTMLAttributes<HTMLInputElement>;
