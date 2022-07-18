// services
import ApiService from 'modules/core/services/api-service';
// utils
import { singleton } from 'utils/object.utils';
// types
import type {
  CreateDepositData,
  CreateDepositResponse,
  CreateWalletData,
  CreateWalletResponse,
  CreateWithdrawalData,
  CreateWithdrawalEstimationData,
  CreateWithdrawalEstimationResponse,
  CreateWithdrawalResponse,
  GetTotalBalance,
  GetWalletListParams,
  GetWalletListResponse,
  GetWalletTypeInfoListResponse,
} from 'modules/wallet/types/wallet-api.types';

const apiService = new ApiService();

class WalletApiService {
  public async getWalletList(params: GetWalletListParams) {
    return apiService
      .getResource<GetWalletListResponse, GetWalletListParams>(
        '/api/v1/wallets',
        params
      )
      .then((response) => {
        const data: GetWalletListResponse = {
          ...response,
          list: response.list.filter((wallet) => wallet.wallet_type !== 'fiat'),
        };

        return data;
      })
      .catch((err) => {
        console.log('err===========>', err.message);
        apiService.showApiErrorToast(err, err?.message ?? 'Server Error');
      });
  }

  public async getTotalBalance() {
    return apiService.getResource<GetTotalBalance>('/api/v1/balance');
  }

  public async getWalletTypeInfoList() {
    const queryTime = 1000;

    return new Promise<GetWalletTypeInfoListResponse>((res) => {
      setTimeout(() => {
        res([{ currency: 'RUB', popular: true, isToken: false }]);
      }, queryTime);
    });
  }

  public async createWallet(data: CreateWalletData) {
    return apiService.createResource<CreateWalletResponse, CreateWalletData>(
      '/api/v1/wallets',
      data
    );
  }

  public async createWithdrawalEstimation(
    data: CreateWithdrawalEstimationData
  ) {
    return apiService.createResource<
      CreateWithdrawalEstimationResponse,
      CreateWithdrawalEstimationData
    >('/api/v1/withdrawal_estimations', data);
  }

  public createWithdrawal(data: CreateWithdrawalData) {
    console.log(JSON.stringify(data));

    return apiService.createResource<
      CreateWithdrawalResponse,
      CreateWithdrawalData
    >('/api/v1/withdrawals', data);
  }

  public createDeposit(data: CreateDepositData) {
    return apiService.createResource<CreateDepositResponse, CreateDepositData>(
      '/api/v1/deposits',
      data
    );
  }
}

export default singleton(WalletApiService);
