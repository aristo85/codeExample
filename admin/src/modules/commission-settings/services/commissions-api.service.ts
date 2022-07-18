// services
import ApiService from 'modules/core/services/api-service';
// types
import {
  CreateCommissionData,
  CreateCommissionResponse,
  GetCommissionParams,
  GetCommissionsResponse,
  UpdateCommissionData,
} from '../types/commissions-api.types';

const apiService = new ApiService();

class CommissionApiService {
  public async getCommissionList(params: GetCommissionParams) {
    return apiService.getResource<GetCommissionsResponse, GetCommissionParams>(
      '/admin/api/v1/commissions',
      params
    );
  }

  public async createCommission(data: CreateCommissionData) {
    return apiService.createResource<
      CreateCommissionResponse,
      CreateCommissionData
    >('/admin/api/v1/commissions', data);
  }

  public async updateCommission(data: UpdateCommissionData, id: string) {
    return apiService.updateResource<
      GetCommissionsResponse,
      UpdateCommissionData
    >(`/admin/api/v1/commissions/${id}`, { ...data });
  }
}

export default new CommissionApiService();
