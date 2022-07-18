import type {
  FilterParams,
  ListData,
  ListPaginationParams,
  ResourceObject,
} from 'modules/core/types/resource.types';
import { Group } from './groups.types';

export type GetGroupsParams = ListPaginationParams & FilterParams;

export type GetGroupsResponse = ListData<ResourceObject<Group>>;

export type CreateGroupResponse = ResourceObject<Group>;

export type UpdateGroupData = Group;

export type UpdateGroupResponse = ResourceObject<Group>;
