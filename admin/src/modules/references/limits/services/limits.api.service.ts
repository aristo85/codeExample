// services
import ApiService from 'modules/core/services/api-service';
import {
  CreateLimitData,
  CreateLimitResponse,
  GetLimitsParams,
  GetLimitsResponse,
  UpdateLimitData,
  UpdateLimitResponse,
} from '../types/limits-api.types';
// types

const apiService = new ApiService();

class LimitApiService {
  public async getLimitsList(params: GetLimitsParams) {
    return apiService.getResource<GetLimitsResponse, GetLimitsParams>(
      '/admin/api/v1/limits',
      params
    );
  }

  public async createLimit(data: CreateLimitData) {
    return apiService.createResource<CreateLimitResponse, CreateLimitData>(
      '/admin/api/v1/limits',
      data
    );
  }

  public async updateLimit(data: UpdateLimitData, id: string) {
    return apiService.updateResource<UpdateLimitResponse, UpdateLimitData>(
      `/admin/api/v1/limits/${id}`,
      { ...data }
    );
  }
}

export default new LimitApiService();
