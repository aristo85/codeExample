import { useMutation } from 'react-query';
import { useLimitListQuery } from './use-limit-list-query';
// services
import limitsApiService from '../services/limits.api.service';
// types
import { UpdateLimitData } from '../types/limits-api.types';

export const useLimitUpdateMutation = (id: string) => {
  const limitList = useLimitListQuery({
    page: 1,
    per_page: 10,
    q: { sorts: 'created_at asc' },
  });

  return useMutation(
    (data: UpdateLimitData) => limitsApiService.updateLimit(data, id),
    {
      onSuccess: () => {
        limitList.refetch();
      },
    }
  );
};
