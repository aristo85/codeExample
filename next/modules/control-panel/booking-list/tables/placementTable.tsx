import React, {FC, useMemo} from 'react';
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {BookingListData} from '@/modules/core/api/model/booking/bookingListData';
import Status from '@/modules/core/components/Status';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@/modules/core/components/TableComponents/tableStyles';
import dayjs from 'dayjs';
import {useRouter} from 'next/router';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';

interface PlacementTableProps {
  data?: BookingListData[];
}

const PlacementTableComponent: FC<PlacementTableProps> = ({data}) => {
  const columnHelper = createColumnHelper<BookingListData>();
  const columns = useMemo<ColumnDef<BookingListData, any>[]>(
    () => [
      columnHelper.accessor('guest', {
        size: 657,
        header: () => 'Имя гостя',
        cell: info => {
          return `${info.row.original.guest.firstName} ${info.row.original.guest.lastName}`;
        },
      }),
      columnHelper.accessor('name', {
        size: 657,
        header: () => 'Объект размещения',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('arrivalDateTime', {
        size: 657,
        header: () => 'Заезд',
        cell: info =>
          `${dayjs(info.row.original.arrivalDateTime).format(
            `${DEFAULT_DATE_FORMAT} HH:mm`,
          )}`,
      }),
      columnHelper.accessor('departureDateTime', {
        size: 657,
        header: () => 'Выезд',
        cell: info =>
          `${dayjs(info.row.original.departureDateTime).format(
            `${DEFAULT_DATE_FORMAT} HH:mm`,
          )}`,
      }),
      columnHelper.accessor('bookingDateTime', {
        size: 200,
        enableHiding: true,
        header: () => 'Дата брони',
        cell: info =>
          `${dayjs(info.row.original.bookingDateTime).format(
            `${DEFAULT_DATE_FORMAT} HH:mm`,
          )}`,
      }),
      columnHelper.accessor('status', {
        size: 100,
        enableHiding: true,
        header: () => 'Статус',
        cell: info => (
          <Status status={info.getValue()} bordered={false} isTable={true} />
        ),
      }),
      columnHelper.accessor('price', {
        size: 100,
        enableHiding: true,
        header: () => 'Цена',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('commission', {
        size: 100,
        enableHiding: true,
        header: () => 'Комиссия',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('bookingNumber', {
        size: 100,
        enableHiding: true,
        header: () => '№ брони',
        cell: info => info.getValue(),
      }),
    ],
    [data],
  );

  const table = useReactTable({
    data: data || [],
    columns,
    enableColumnResizing: false,
    getCoreRowModel: getCoreRowModel(),
  });

  const router = useRouter();

  const onRowClick = (id: number) => {
    void router.push(`/control-panel/booking/placement/${id}`);
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header, i) => {
                return (
                  <TableHeaderCell
                    key={`${header.id}-${i}`}
                    style={{width: header.column.columnDef.size}}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHeaderCell>
                );
              })}
            </TableRow>
          ))}
        </TableHead>
        {table.getRowModel().rows.length > 0 ? (
          <TableBody>
            {table.getRowModel().rows.map(row => (
              <TableRow
                key={row.id}
                onClick={() => onRowClick(row.original.id)}>
                {row.getVisibleCells().map(cell => (
                  <TableCell
                    key={cell.id}
                    style={{width: cell.column.columnDef.size}}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell colSpan={9} style={{textAlign: 'center'}}>
                Здесь будут ваши бронирования жилья
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default PlacementTableComponent;
