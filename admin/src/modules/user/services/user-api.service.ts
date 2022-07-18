// services
import ApiService from 'modules/core/services/api-service';
// utils
import { singleton } from 'utils/object.utils';
// types
import type {
  GetUsersParams,
  UpdateUserData,
  GetUserResponse,
  GetUsersResponse,
  GetUsersTypesResponse,
  // GetOneUserResponse,
} from 'modules/user/types/user-api.types';
import type { ResourceId } from 'modules/core/types/resource.types';

const apiService = new ApiService();

class UserApiService {
  public async getProfile() {
    return apiService.getResource<GetUserResponse>('/api/v1/profile');
  }

  public async updateUser(data: UpdateUserData, id: string) {
    return apiService.updateResource<GetUserResponse, UpdateUserData>(
      `/admin/api/v1/profiles/${id}`,
      data
    );
  }

  public async getUsersList(data: GetUsersParams) {
    return apiService.getResource<GetUsersResponse, GetUsersParams>(
      '/admin/api/v1/profiles',
      data
    );
  }

  public async getUser(id: string) {
    return apiService.getResource<GetUserResponse, string>(
      `/admin/api/v1/profiles/${id}`
    );
  }

  public async getUserTypesList() {
    return apiService.getResource<GetUsersTypesResponse>('/admin/api/v1/types');
  }

  public async blockUser(idUser: ResourceId) {
    return apiService.createResource<unknown>(
      `/admin/api/v1/profiles/${idUser}/blocked`
    );
  }

  public async unblockUser(idUser: ResourceId) {
    return apiService.createResource<unknown>(
      `/admin/api/v1/profiles/${idUser}/unblocked`
    );
  }
}

const service = singleton(UserApiService);

export default new service();
