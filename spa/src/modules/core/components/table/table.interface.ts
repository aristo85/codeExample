import type { ReactNode } from 'react';
import type { PaginationProps } from 'modules/core/components/pagination/pagination.interface';

export type TableProps = {
  columns: any;
  dataKeys: string[];
  data: any[];
  cellRenderer?: (data: any, key: any) => ReactNode;
  onRowClick?: (data: any) => void;
  isLoading?: boolean;
  paginationProps?: PaginationProps;
  setsortingByDate?: (data: boolean) => void;
  sortingByDate?: boolean;
  setperPage?: (perPage: string) => void;
  perPage?: string;
};
