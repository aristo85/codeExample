// types
import {
  GetCityListByCountryNameResponse,
  GetCountryListResponse,
} from 'modules/country/types/country-api.types';

class CountryApiService {
  private readonly COUNTRY_API_URL = 'https://countriesnow.space/api/v0.1';

  public async getCountryList(): Promise<GetCountryListResponse> {
    return fetch(
      `${this.COUNTRY_API_URL}/countries/info?returns=currency%2Cflag%2CunicodeFlag`
    )
      .then((res) => res.json())
      .then((res) => res.data);
  }

  public async getCityListByCountryName(
    country: string
  ): Promise<GetCityListByCountryNameResponse> {
    return fetch(`${this.COUNTRY_API_URL}/countries/cities`, {
      body: JSON.stringify({
        country,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((res) => res.json())
      .then((res) => res.data);
  }
}

export default new CountryApiService();
