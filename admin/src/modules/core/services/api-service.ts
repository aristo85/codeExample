import qs from 'qs';
// services
import TokenService from 'modules/auth/services/token.service';
// utils
import { singleton } from 'utils/object.utils';
// config
import { config } from 'config';
import { ApiError } from '../types/api.types';
import { toast } from 'react-toastify';

const API_STATUS = {
  SUCCESS: 200,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  MULTIPLE_CHOICES: 300,
};

export type ApiServiceInterface = {
  getResource: <Response = unknown>(url: string) => Promise<Response>;
  createResource: <Response = unknown, Data = unknown>(
    url: string,
    data?: Data
  ) => Promise<Response>;
  updateResource: <Response = unknown, Data = unknown>(
    url: string,
    data?: Data
  ) => Promise<Response>;
};

class ApiService implements ApiServiceInterface {
  private token: string | null;

  constructor() {
    const tokenService = new TokenService();

    this.token = tokenService.getJwt();

    tokenService.subscribeJwtUpdates(() => {
      this.token = tokenService.getJwt();
    });
  }

  public async getResource<T = unknown, Data = unknown>(
    url: string,
    data?: Data
  ): Promise<T> {
    const bearer = `Bearer ${this.token}`;
    const query = !!data ? qs.stringify(data, { arrayFormat: 'brackets' }) : '';

    return fetch(`${config.apiUrl}${url}?${query}`, {
      headers: { Authorization: bearer },
    })
      .catch(this.handleError)
      .then(this.checkStatus)
      .then(this.parseJSON)
      .then(this.normalizeListResponse)
      .catch((error) => {
        throw error;
      });
  }

  public async createResource<Response = unknown, Data = unknown>(
    url: string,
    data?: Data
  ): Promise<Response> {
    const bearer = `Bearer ${this.token}`;

    return fetch(`${config.apiUrl}${url}`, {
      headers: { Authorization: bearer, 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .catch(this.handleError)
      .then(this.checkStatus)
      .then(this.parseJSON)
      .catch((error) => {
        throw error;
      });
  }

  public async updateResource<Response = unknown, Data = unknown>(
    url: string,
    data?: Data
  ): Promise<Response> {
    const bearer = `Bearer ${this.token}`;

    return fetch(`${config.apiUrl}${url}`, {
      headers: {
        Authorization: bearer,
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(data),
    })
      .catch(this.handleError)
      .then(this.checkStatus)
      .then(this.parseJSON)
      .catch((error) => {
        throw error;
      });
  }

  public async deleteResource<T = unknown, Data = unknown>(
    url: string,
    data?: Data
  ): Promise<T> {
    const bearer = `Bearer ${this.token}`;
    const query = !!data ? qs.stringify(data) : '';

    return fetch(`${config.apiUrl}${url}?${query}`, {
      method: 'DELETE', // Method itself
      headers: { Authorization: bearer },
    })
      .catch(this.handleError)
      .then(this.checkStatus)
      .then(this.parseJSON)
      .then(this.normalizeListResponse)
      .catch((error) => {
        throw error;
      });
  }

  private checkStatus = (response: any) => {
    if (
      response.status >= API_STATUS.SUCCESS &&
      response.status < API_STATUS.MULTIPLE_CHOICES
    ) {
      return response;
    }

    return response.json().then((json: string) => {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        status: response.status,
        ok: false,
        statusText: response.statusText,
        body: json,
      });
    });
  };

  private parseJSON = async (response: any) => {
    if (
      response.status === API_STATUS.NO_CONTENT ||
      response.status === API_STATUS.NO_CONTENT
    ) {
      return null;
    }

    const json = await response.json();

    if (Array.isArray(json)) {
      const pageCount = response.headers.get('X-Pagination-Page-Count');
      const totalCount = response.headers.get('X-Pagination-Total-Count');

      if (
        !isNaN(pageCount) &&
        !isNaN(totalCount) &&
        pageCount !== '' &&
        totalCount !== ''
      ) {
        return {
          list: json,
          pageCount: +pageCount,
          totalCount: +totalCount,
        };
      }
    }

    return json;
  };

  private normalizeListResponse = (response: any) => {
    return response;
  };

  private handleError = (error: any) => {
    // eslint-disable-next-line no-param-reassign
    error.response = {
      status: 0,
      statusText:
        'Cannot connect. Please make sure you are connected to internet.',
    };
    throw error;
  };

  public showApiErrorToast = (error: ApiError, defaultMessage?: string) => {
    let message = 'Something went wrong';

    if (defaultMessage) {
      message = defaultMessage;
    }

    if (typeof error?.body?.message === 'string') {
      message = error.body.message;
    }

    toast(message, { type: 'error' });
  };

  public async sendMoney(wallet_id: any, amount: any, address: any) {
    const params = { wallet_id, amount, address };

    return this.createResource('/withdrawals', params);
  }

  public async createKycAccessToken() {
    return this.createResource('/access_tokens');
  }
}

export default singleton(ApiService);
