export type ExchangeFundsConfirmDataProps = {
  targetAccount: string;
  destinationAccount: string;
  debit: string;
  rate: string;
  credit: string;
  fee: string;
  onGoBackClick: () => void;
  onExchangeClick: () => void;
  isExchangeLoading: boolean;
};
