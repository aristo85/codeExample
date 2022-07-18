// import { useCurrencyListQuery } from './use-currency-list-query';
import { useMutation } from 'react-query';
// import { useGroupListQuery } from './use-group-list-query';
// services
import groupsApiService from '../services/groups.api.service';
// types
import { UpdateGroupData } from '../types/group-api.types';

export const useGroupUpdateMutation = (id: string) => {
  // const groupListQuery = useGroupListQuery({
  //   page: 1,
  //   per_page: 10,
  //   q: { sorts: 'created-at asc' },
  // });

  return useMutation(
    (data: UpdateGroupData) => groupsApiService.updateGroup(data, id),
    {
      onSuccess: () => {
        // groupListQuery.refetch();
      },
    }
  );
};
