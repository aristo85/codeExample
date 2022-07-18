// services
import ApiService from 'modules/core/services/api-service';
// utils
import { singleton } from 'utils/object.utils';
// types
import type {
  GetWalletListParams,
  GetWalletListResponse,
} from 'modules/wallet/types/wallet-api.types';

const apiService = new ApiService();

class WalletApiService {
  public async getWalletList(params: GetWalletListParams) {
    return apiService.getResource<GetWalletListResponse, GetWalletListParams>(
      '/admin/api/v1/wallets',
      params
    );
  }
}

const service = singleton(WalletApiService);

export default new service();
