import { useQuery } from 'react-query';
// services
import fundsApiService from 'modules/funds/services/funds-api.service';

const EXCHANGE_TRADING_PAIRS_LIST = 'exchange_trading_pairs_list';

export const useEchagnePairsListQuery = () => {
  return useQuery(EXCHANGE_TRADING_PAIRS_LIST, () =>
    fundsApiService.getExchangePairsList()
  );
};
