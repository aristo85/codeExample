// services
import ApiService from 'modules/core/services/api-service';
// utils
import { singleton } from 'utils/object.utils';
// types
import {
  CreateExchangeOrderData,
  CreateExchangeOrderResponse,
  CreateLinkToPaycosData,
  CreateLinkToPaycosResponse,
  CreateRateData,
  CreateRateResponse,
  CreateSellCurrencyToFiatData,
  CreateSellCurrencyToFiatResponse,
  CreateTransferData,
  CreateTransferResponse,
  GetCommissionParams,
  GetCommissionResponse,
  GetCryptoPriceParams,
  GetCryptoPriceResponse,
  GetExchangePairsResponse,
} from 'modules/funds/types/funds-api.types';

const apiService = new ApiService();

class FundsApiService {
  public async transfer(data: CreateTransferData) {
    return apiService.createResource<
      CreateTransferResponse,
      CreateTransferData
    >('/api/v1/transfers', data);
  }

  public async createRate(data: CreateRateData) {
    return apiService.createResource<CreateRateResponse, CreateRateData>(
      '/api/v1/rates',
      data
    );
  }

  public async createExchangeOrder(data: CreateExchangeOrderData) {
    return apiService.createResource<
      CreateExchangeOrderResponse,
      CreateExchangeOrderData
    >('/api/v1/orders', data);
  }

  public getCryptoPrice(data: GetCryptoPriceParams) {
    return apiService.getResource<GetCryptoPriceResponse>(
      `/api/v1/crypto_prices/${data.currency}${data.currency_target}`
    );
  }

  public getCommission(params: GetCommissionParams) {
    return apiService.getResource<GetCommissionResponse>(
      `/api/v1/commission/estimation`,
      params
    );
  }

  public createLinkToPaycos(data: CreateLinkToPaycosData) {
    return apiService.createResource<
      CreateLinkToPaycosResponse,
      CreateLinkToPaycosData
    >('/api/v1/fiat/deposit', data);
  }

  public createSellCurencyToFiat(data: CreateSellCurrencyToFiatData) {
    return apiService.createResource<
      CreateSellCurrencyToFiatResponse,
      CreateSellCurrencyToFiatData
    >('/api/v1/fiat/withdrawal', data);
  }

  public async getExchangePairsList() {
    return apiService.getResource<GetExchangePairsResponse[]>(
      '/api/v1/trading_pairs'
    );
  }
}

const service = singleton(FundsApiService);

export default new service();
