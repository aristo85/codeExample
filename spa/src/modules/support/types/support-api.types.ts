import {
  ListData,
  ListPaginationParams,
  ResourceObject,
} from 'modules/core/types/resource.types';

export type CreateSupportTopicData = {
  name: string;
  description: string;
};

export type Comment = {
  id: string;
  issue_id: string;
  user_uid: string;
  message: string;
  created_at: number;
  updated_at: number;
};

export type Support = {
  id: string;
  name: string;
  description: string;
  status: string;
  user_uid: string;
  created_at: number;
  updated_at: number;
  comments: Comment[];
};

export type GetCommentsResponse = ListData<ResourceObject<Comment>>;

export type GetSupportListResponse = ListData<ResourceObject<Support>>;

export type GetSupportListParams = ListPaginationParams & {
  q?: Record<string, string | number>;
  sorts?: string;
};
