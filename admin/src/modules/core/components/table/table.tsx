import { FC } from 'react';
// utils
import { prop } from 'utils/path.utils';

import type { TableProps } from './table.interface';
import Pagination from '../pagination';
import Spinner from '../spinner';

const Table: FC<TableProps> = ({
  columns,
  cellRenderer,
  dataKeys,
  data,
  paginationProps,
  isLoading = false,
}) => {
  const getCellValue = (rowData: any, key: string) => {
    if (cellRenderer) {
      const value = cellRenderer(rowData, key);

      if (typeof value !== 'undefined') {
        return value;
      }
    }

    return prop(key)(rowData);
  };

  return (
    <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
      <div className='w-full overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200 auto'>
          <thead className='bg-gray-50'>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {!isLoading &&
              data.map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                  {dataKeys.map((key, cellIndex) => (
                    <td
                      key={cellIndex}
                      className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'
                    >
                      {getCellValue(rowData, key)}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        <Spinner isLoading={isLoading} className='mx-auto my-10' />
      </div>
      {!!paginationProps && <Pagination {...paginationProps} />}
    </div>
  );
};

export default Table;
