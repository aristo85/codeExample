// import { useCurrencyListQuery } from './use-currency-list-query';
import { useMutation } from 'react-query';
// import { useGroupListQuery } from './use-group-list-query';
// services
import groupsApiService from '../services/groups.api.service';
// types

export const useGroupDeleteMutation = () => {
  //   const groupListQuery = useGroupListQuery({
  //     page: 1,
  //     per_page: 10,
  //     q: { sorts: 'name asc' },
  //   });

  return useMutation((id: string) => groupsApiService.deleteGroup(id), {
    onSuccess: () => {
      //   groupListQuery.refetch();
    },
  });
};
