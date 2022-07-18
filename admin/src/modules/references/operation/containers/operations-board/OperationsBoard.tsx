import { FC, useState } from 'react';
// components
import OperationsTable from '../../components/OperationsTable';
// hooks
import { useOperationListQuery } from '../../hooks/use-operation-list-query';

const OperationsBoard: FC = () => {
  const recordsPerPage = 10;

  const [activePage, setActivePage] = useState(1);

  const operationsQuery = useOperationListQuery({
    page: activePage,
    per_page: recordsPerPage,
  });

  return (
    <div className='px-4 py-6 sm:px-0'>
      <OperationsTable
        operations={operationsQuery.data?.types ?? []}
        isLoading={operationsQuery.isLoading}
        paginationProps={{
          activePage,
          onPageChange: setActivePage,
          isLoading: operationsQuery.isLoading,
          pagesCount: operationsQuery.data?.pageCount ?? 0,
          resultsCount: operationsQuery.data?.types?.length,
          allRecordsCount: operationsQuery.data?.totalCount,
          recordsPerPageCount: recordsPerPage,
        }}
      />
    </div>
  );
};

export default OperationsBoard;
