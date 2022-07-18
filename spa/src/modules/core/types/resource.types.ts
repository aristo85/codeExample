export type ResourceId = string;

export type ResourceObject<T extends object> = T & {
  id: ResourceId;
  created_at: number;
  updated_at: number;
};

export type OmitDefaultResourceFields<T> = Omit<
  T,
  'id' | 'created_at' | 'updated_at'
>;

export type ListData<T> = {
  list: T[];
  pageCount: number;
  totalCount: number;
};

export type ListPaginationParams = {
  page: number;
  per_page: number;
};
