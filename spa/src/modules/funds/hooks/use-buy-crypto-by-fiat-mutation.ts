import { useMutation } from 'react-query';
// services
import ApiService from 'modules/core/services/api-service';
// types
import type { ApiError } from 'modules/core/types/api.types';
import { CreateLinkToPaycosData } from '../types/funds-api.types';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
import fundsApiService from 'modules/funds/services/funds-api.service';

const apiService = new ApiService();

export const useBuyCryptoByFiatMutation = () => {
  const { t } = useLocalization();

  const mutation = useMutation(
    (data: CreateLinkToPaycosData) => fundsApiService.createLinkToPaycos(data),
    {
      onError: (error: ApiError) => {
        apiService.showApiErrorToast(error, t('UNABLE_TO_CREATE_PAYMENT_LINK'));
      },
    }
  );

  return mutation;
};
