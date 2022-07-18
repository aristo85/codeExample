import { useMutation } from 'react-query';
// services
import supportApiService from 'modules/support/services/support-api.service';
import ApiService from 'modules/core/services/api-service';
// types
import type { CreateSupportTopicData } from 'modules/support/types/support-api.types';
import type { ApiError } from 'modules/core/types/api.types';

const apiService = new ApiService();

export const useSupportTopicCreateMutation = () => {
  return useMutation(
    (data: CreateSupportTopicData) =>
      supportApiService.createSupportTopic(data),
    {
      onError: (error: ApiError) => {
        apiService.showApiErrorToast(error);
      },
    }
  );
};
