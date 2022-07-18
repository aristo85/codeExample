import { FC, useState } from 'react';
import Pagination from './pagination';

const PaginationStory: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      maxPages={4}
      currentPage={currentPage}
      onChange={setCurrentPage}
    />
  );
};

export default PaginationStory;
