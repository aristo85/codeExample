import type { ReactNode } from 'react';
import type { PaginationProps } from 'modules/core/components/pagination/pagination.interface';

export type TableProps = {
  columns: ReactNode[];
  dataKeys: string[];
  data: any[];
  cellRenderer?: (data: any, key: any) => ReactNode | undefined | void;
  paginationProps?: PaginationProps;
  isLoading?: boolean;
};
