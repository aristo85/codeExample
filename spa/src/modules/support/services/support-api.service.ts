// utils
import { singleton } from 'utils/object.utils';
// services
import ApiService from 'modules/core/services/api-service';
// types
import type {
  CreateSupportTopicData,
  GetSupportListParams,
  GetSupportListResponse,
} from 'modules/support/types/support-api.types';

const apiService = new ApiService();

class SupportApiService {
  public async getSupportList(params: GetSupportListParams) {
    return apiService.getResource<GetSupportListResponse, GetSupportListParams>(
      '/api/v1/support/issues',
      params
    );
  }

  public async createSupportTopic(data: CreateSupportTopicData) {
    return apiService.createResource<CreateSupportTopicData>(
      '/api/v1/support/issues',
      data
    );
  }
}

const service = singleton(SupportApiService);

export default new service();
