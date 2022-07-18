import { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
// components
import Button from 'modules/core/components/button';
// containers
import OperationFilter from '../statuses-filter/statuses-filter';
// hooks
import { useUrlState } from 'modules/core/hooks/use-url-state';
import StatusesTable from 'modules/references/statuses/components/status-table';

const StatusesBoard: FC = () => {
  // state
  const [isFilterOpen, setIsFilterOpen] = useUrlState('filter_open', false);
  const handleFilterClick = useCallback(() => {
    setIsFilterOpen(!isFilterOpen);
  }, [isFilterOpen]);

  const history = useHistory();

  return (
    <>
      <div className='flex justify-end space-x-4 px-4 sm:px-0'>
        <Button
          variant='default'
          onClick={() =>
            history.push('/reference-client-statuses/create-new-status')
          }
        >
          Create Status
        </Button>
        <Button variant='default'>Export</Button>
        <Button variant='primary' onClick={handleFilterClick}>
          Filter
        </Button>
      </div>
      <OperationFilter
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
      <div className='px-4 py-6 sm:px-0'>
        <StatusesTable />
      </div>
    </>
  );
};

export default StatusesBoard;
