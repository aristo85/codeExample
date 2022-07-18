// services
import ApiService from 'modules/core/services/api-service';
// types
import type {
  GetTransactionsParams,
  GetTransactionsResponse,
  GetTransactionTypesResponse,
} from 'modules/transaction/types/transactions-api.types';

const apiService = new ApiService();

class TransactionApiService {
  public async getTransactionsList(params: GetTransactionsParams) {
    return apiService.getResource<
      GetTransactionsResponse,
      GetTransactionsParams
    >('/admin/api/v1/transactions', params);
  }

  public async getTransactionTypesList() {
    return apiService.getResource<GetTransactionTypesResponse>(
      '/admin/api/v1/types'
    );
  }
}

export default new TransactionApiService();
