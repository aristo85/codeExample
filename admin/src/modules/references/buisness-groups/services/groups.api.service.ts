// services
import ApiService from 'modules/core/services/api-service';
import { NewGroupValues } from '../containers/create-new-group/create-new-grpup.interface';
// types
import {
  CreateGroupResponse,
  GetGroupsParams,
  GetGroupsResponse,
  UpdateGroupData,
  UpdateGroupResponse,
} from '../types/group-api.types';

const apiService = new ApiService();

class GroupApiService {
  public async getGroupsList(params: GetGroupsParams) {
    return apiService.getResource<GetGroupsResponse, GetGroupsParams>(
      '/admin/api/v1/groups',
      params
    );
  }

  public async createGroup(data: NewGroupValues) {
    return apiService.createResource<CreateGroupResponse, NewGroupValues>(
      '/admin/api/v1/groups',
      data
    );
  }

  public async updateGroup(data: UpdateGroupData, id: string) {
    return apiService.updateResource<UpdateGroupResponse, UpdateGroupData>(
      `/admin/api/v1/groups/${id}`,
      { ...data }
    );
  }

  public async deleteGroup(id: string) {
    return apiService.deleteResource<unknown>(`/admin/api/v1/groups/${id}`);
  }
}

export default new GroupApiService();
