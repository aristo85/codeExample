import transactionApiService from './transaction-api.service';

export const filterBydate = (list: any[], sort: boolean) => {
  return list.sort((a, b) =>
    sort
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : new Date(a.date).getTime() - new Date(b.date).getTime()
  );
};

export const getAllTransactions = (params) => {
  return transactionApiService.getTransactionsList(params);
};
