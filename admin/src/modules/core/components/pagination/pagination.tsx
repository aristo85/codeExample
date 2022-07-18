import { FC, useCallback, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
// components
import Spinner from 'modules/core/components/spinner';

import type { PaginationProps } from './pagination.interface';
import classNames from 'classnames';

const Pagination: FC<PaginationProps> = ({
  onPageChange,
  isLoading,
  pagesCount,
  resultsCount,
  activePage,
  allRecordsCount,
  recordsPerPageCount,
}) => {
  const pages = useMemo(() => {
    const siblingPagesRange = 3;

    return [
      ...new Set(
        [
          1,
          activePage,
          pagesCount,
          ...Array.from(
            { length: siblingPagesRange },
            (v, index) => activePage + index + 1
          ).filter((num) => num < pagesCount),
          ...Array.from(
            { length: siblingPagesRange },
            (v, index) => activePage - (index + 1)
          ).filter((num) => num > 0),
        ].sort((num1, num2) => num1 - num2)
      ),
    ];
  }, [pagesCount, activePage]);

  const handlePrevClick = useCallback(() => {
    if (activePage !== 1) {
      onPageChange(activePage - 1);
    }
  }, [activePage, onPageChange]);

  const handleNextClick = useCallback(() => {
    if (activePage < pagesCount) {
      onPageChange(activePage + 1);
    }
  }, [activePage, pagesCount, onPageChange]);

  return (
    <div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
      <div className='flex-1 flex justify-between sm:hidden'>
        <button
          className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
          onClick={handlePrevClick}
        >
          Previous
        </button>
        <button
          className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
      <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
        <Spinner isLoading={isLoading} size='8'>
          <div>
            {typeof resultsCount === 'number' &&
              typeof allRecordsCount === 'number' &&
              typeof recordsPerPageCount === 'number' && (
                <p className='text-sm text-gray-700'>
                  Showing{' '}
                  <span className='font-medium'>
                    {(activePage - 1) * recordsPerPageCount + 1}
                  </span>{' '}
                  to{' '}
                  <span className='font-medium'>
                    {(activePage - 1) * recordsPerPageCount + resultsCount}
                  </span>{' '}
                  of <span className='font-medium'>{allRecordsCount}</span>{' '}
                  results
                </p>
              )}
          </div>
        </Spinner>
        <div>
          {!!pagesCount && (
            <nav
              className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
              aria-label='Pagination'
            >
              <button
                className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                onClick={handlePrevClick}
              >
                <span className='sr-only'>Previous</span>
                <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
              </button>
              {pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => onPageChange(page)}
                  className={classNames(
                    'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium',
                    {
                      'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex':
                        activePage === page,
                    }
                  )}
                >
                  {page}
                </button>
              ))}
              <button
                className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                onClick={handleNextClick}
              >
                <span className='sr-only'>Next</span>
                <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
              </button>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
