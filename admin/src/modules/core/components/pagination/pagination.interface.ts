export type PaginationProps = {
  activePage: number;
  onPageChange: (page: number) => void;
  isLoading: boolean;
  pagesCount: number;
  resultsCount?: number;
  allRecordsCount?: number;
  recordsPerPageCount?: number;
};
