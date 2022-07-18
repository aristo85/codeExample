// services
import ApiService from 'modules/core/services/api-service';
// types
import {
  GetSupportsParams,
  GetSupportsResponse,
  UpdateSupportData,
} from '../types/support-api.types';

const apiService = new ApiService();

class SupportApiService {
  public async getSupportList(params: GetSupportsParams) {
    return apiService.getResource<GetSupportsResponse, GetSupportsParams>(
      '/admin/api/v1/support/issues',
      params
    );
  }

  public async updateSupport(data: UpdateSupportData, code: string) {
    return apiService.updateResource<GetSupportsResponse, UpdateSupportData>(
      `/admin/api/v1/support/issues/${code}`,
      { ...data }
    );
  }
}

export default new SupportApiService();
