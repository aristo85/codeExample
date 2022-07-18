// services
import ApiService from 'modules/core/services/api-service';
// types
import {
  GetOperationTypeParams,
  GetOperationTypeResponse,
} from '../types/operation-api.types';

const apiService = new ApiService();

class OperationApiService {
  public async getOperationsList(params: GetOperationTypeParams) {
    return apiService.getResource<
      GetOperationTypeResponse,
      GetOperationTypeParams
    >('/admin/api/v1/types', params);
  }
}

export default new OperationApiService();
