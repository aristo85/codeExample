// import { config } from './../../../config';
// import axios from 'axios';
// services
import ApiService, {
  ApiServiceInterface,
} from 'modules/core/services/api-service';
// utils
import { singleton } from 'utils/object.utils';
// types
import type {
  GetProfileResponse,
  UpdateProfileData,
  UpdateProfileCurrencyData,
} from 'modules/user/types/user-api.types';

class UserApiService {
  private readonly apiService: ApiServiceInterface;

  constructor() {
    // todo: think about dependency injection approach
    this.apiService = new ApiService();
  }

  public async getProfile() {
    return this.apiService.getResource<GetProfileResponse>('/api/v1/profile');
  }

  public async updateProfile(data: UpdateProfileData) {
    return this.apiService.updateResource<
      GetProfileResponse,
      UpdateProfileData
    >('/api/v1/profile', { ...data });
  }

  public async updatePhoto(data: File) {
    return this.apiService.updatePhoto<GetProfileResponse, File>(
      '/api/v1/avatar',
      data
    );
  }

  public async updateProfileCurrency(data: UpdateProfileCurrencyData) {
    return this.apiService.updateResource<
      GetProfileResponse,
      UpdateProfileCurrencyData
    >('/api/v1/profile', { ...data });
  }
}

export default singleton(UserApiService);
