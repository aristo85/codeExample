export type PaginationProps = {
  maxPages: number;
  currentPage: number;
  onChange: (page: number) => void;
};
