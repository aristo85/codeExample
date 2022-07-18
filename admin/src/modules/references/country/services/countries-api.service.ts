// services
import ApiService from 'modules/core/services/api-service';
import {
  GetCountriesParams,
  GetCountriesResponse,
  UpdateCountryData,
} from '../types/coutries-api.types';
// types

const apiService = new ApiService();

class CountryApiService {
  public async getCountriesList(params: GetCountriesParams) {
    return apiService.getResource<GetCountriesResponse, GetCountriesParams>(
      '/admin/api/v1/countries',
      params
    );
  }

  public async updateCountry(data: UpdateCountryData, code: string) {
    return apiService.updateResource<GetCountriesResponse, UpdateCountryData>(
      `/admin/api/v1/countries/${code}`,
      { ...data }
    );
  }
}

export default new CountryApiService();
