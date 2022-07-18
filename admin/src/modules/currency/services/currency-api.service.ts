// services
import ApiService from 'modules/core/services/api-service';
// utils
import { singleton } from 'utils/object.utils';
// types
import {
  GetCurrenciesParams,
  GetCurrenciesResponse,
} from 'modules/currency/types/currency-api.types';

const apiService = new ApiService();

class CurrencyApiService {
  public getCurrenciesList(params: GetCurrenciesParams) {
    return apiService.getResource<GetCurrenciesResponse, GetCurrenciesParams>(
      '/admin/api/v1/currencies',
      params
    );
  }
}

const service = singleton(CurrencyApiService);

export default new service();
