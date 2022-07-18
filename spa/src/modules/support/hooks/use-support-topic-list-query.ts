import { useQuery } from 'react-query';
// services
import supportApiService from 'modules/support/services/support-api.service';
import { GetSupportListParams } from '../types/support-api.types';
// types

const SUPPORT_TOPIC_LIST_CACHE_KEY = 'support_topic_list';

export const useSupportTopicListQuery = (params: GetSupportListParams) => {
  return useQuery(SUPPORT_TOPIC_LIST_CACHE_KEY, () =>
    supportApiService.getSupportList(params)
  );
};
