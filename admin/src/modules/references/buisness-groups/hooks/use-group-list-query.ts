import { useQuery } from 'react-query';
// services
import groupsApiService from '../services/groups.api.service';
// types
import { GetGroupsParams } from '../types/group-api.types';

const GROUP_LIST_CACHE_KEY = 'group_list';

export const useGroupListQuery = (params: GetGroupsParams) => {
  return useQuery([GROUP_LIST_CACHE_KEY, params], () =>
    groupsApiService.getGroupsList(params)
  );
};

export const getAllGroups = (params: any) => {
  return groupsApiService.getGroupsList(params);
};
