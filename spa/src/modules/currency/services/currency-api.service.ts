// services
import ApiService from 'modules/core/services/api-service';
// utils
import { singleton } from 'utils/object.utils';
import {
  GetCurrencyListParams,
  GetCurrencyListResponse,
} from 'modules/currency/types/currency-api.types';

const apiService = new ApiService();

class CurrencyApiService {
  public async getCurrencyList(params: GetCurrencyListParams) {
    return apiService.getResource<
      GetCurrencyListResponse,
      GetCurrencyListParams
    >('/api/v1/currencies', params);
  }
}

const service = singleton(CurrencyApiService);

export default new service();
