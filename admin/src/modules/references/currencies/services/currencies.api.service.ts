// services
import ApiService from 'modules/core/services/api-service';
// types
import {
  CreateCurrencyResponse,
  GetCurrenciesParams,
  GetCurrenciesResponse,
  UpdateCurrencyData,
  UpdateCurrencyResponse,
} from '../types/currencies-api.types';
import { Currency } from '../types/currencies.types';

const apiService = new ApiService();

class CurrencyApiService {
  public async getCurrenciesList(params: GetCurrenciesParams) {
    return apiService.getResource<GetCurrenciesResponse, GetCurrenciesParams>(
      '/admin/api/v1/currencies',
      params
    );
  }

  public async createCurrency(data: Currency) {
    return apiService.createResource<CreateCurrencyResponse, Currency>(
      '/admin/api/v1/currencies',
      data
    );
  }

  public async updateCUrrency(data: UpdateCurrencyData, code: string) {
    return apiService.updateResource<
      UpdateCurrencyResponse,
      UpdateCurrencyData
    >(`/admin/api/v1/currencies/${code}`, { ...data });
  }
}

export default new CurrencyApiService();
