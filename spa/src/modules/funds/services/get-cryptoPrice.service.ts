// services
import fundsApiService from 'modules/funds/services/funds-api.service';
import ApiService from 'modules/core/services/api-service';

const apiService = new ApiService();

export const getCryptoPrice = (currency, currencyTarget) => {
  return fundsApiService
    .getCryptoPrice({
      currency,
      currency_target: currencyTarget,
    })
    .catch((err) => {
      apiService.showApiErrorToast(err.body?.message ?? 'Something went wrong');
    });
};
