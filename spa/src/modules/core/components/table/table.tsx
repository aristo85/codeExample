import { FC, useCallback } from 'react';
// utils
import { prop } from 'utils/object.utils';
// components
import Select from 'modules/core/components/select/select';
import Spinner from 'modules/core/components/spinner';
import Pagination from 'modules/core/components/pagination';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';

import type { TableProps } from './table.interface';

import {
  Root,
  TableWrapper,
  Head,
  HeadRow,
  HeadCell,
  Body,
  BodyRow,
  BodyCell,
  PaginationWrapper,
  EmptyListPlaceholder,
  TableRowQuantity,
  TableRowQuantityLabel,
} from './table.styled';
import TableDate from '../table-date';

const Table: FC<TableProps> = ({
  columns,
  dataKeys,
  data,
  cellRenderer,
  onRowClick,
  isLoading = false,
  paginationProps,
  setsortingByDate,
  sortingByDate,
  setperPage,
  perPage,
}) => {
  const { t } = useLocalization();

  const getCellValue = (rowData: any, key: string) => {
    if (cellRenderer) {
      const value = cellRenderer(rowData, key);

      if (typeof value !== 'undefined') {
        return value;
      }
    }

    return prop(key)(rowData);
  };

  const handleRowClick = useCallback(
    (rowData: any) => () => {
      if (onRowClick) {
        onRowClick(rowData);
      }
    },
    [onRowClick]
  );

  const quantityPerPage = [
    {
      value: '10',
      title: '10',
    },
    {
      value: '20',
      title: '20',
    },
    {
      value: '50',
      title: '50',
    },
  ];

  return (
    <div>
      <TableRowQuantity className='tableRowQuantity'>
        <TableRowQuantityLabel>
          {t('PAGES.HISTORY.TABLE_ROW_QUANTITY')}
        </TableRowQuantityLabel>
        <Select
          value={perPage}
          onChange={setperPage}
          options={quantityPerPage}
          className='tableRowQuantitySelect'
        />
      </TableRowQuantity>

      <Root isLoading={isLoading} isRecords={data.length > 0}>
        <TableWrapper>
          <Head>
            <HeadRow>
              {columns.map((column, i) => (
                <HeadCell key={i}>
                  {column === 'PAGES.HISTORY.TABLE_DATE' ? (
                    <TableDate
                      label={t(column)}
                      onClickDateSort={() => setsortingByDate(!sortingByDate)}
                    />
                  ) : (
                    t(column)
                  )}
                </HeadCell>
              ))}
            </HeadRow>
          </Head>
          {!isLoading && (
            <Body>
              {data.map((rowData, rowIndex) => (
                <BodyRow
                  key={rowIndex}
                  clickable={!!onRowClick}
                  onClick={handleRowClick(rowData)}
                >
                  {dataKeys.map((key, index) => (
                    <BodyCell key={index}>
                      {getCellValue(rowData, key)}
                    </BodyCell>
                  ))}
                </BodyRow>
              ))}
            </Body>
          )}
        </TableWrapper>

        {!isLoading && data.length === 0 && (
          <EmptyListPlaceholder>
            {t('PAGES.NOTIFICATION.NO_RECORDS')}
          </EmptyListPlaceholder>
        )}

        <Spinner isLoading={isLoading} isAbsolute />
      </Root>

      {!!paginationProps && (
        <PaginationWrapper>
          <Pagination {...paginationProps} />
        </PaginationWrapper>
      )}
    </div>
  );
};

export default Table;
