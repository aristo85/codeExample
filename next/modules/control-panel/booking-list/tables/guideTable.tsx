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
  TableCellValueWithCopyIcon,
  TableContainer,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@/modules/core/components/TableComponents/tableStyles';
import dayjs from 'dayjs';
import {useRouter} from 'next/router';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';
import CopyIcon from '@/modules/core/components/icons/Copy';
import {useCopyToClipboard} from '@/modules/core/hooks/useCopyToClipboard';

interface GuideTableProps {
  data?: BookingListData[];
}

const GuideTableComponent: FC<GuideTableProps> = ({data}) => {
  const [copyAddressToClipboard] = useCopyToClipboard();
  const columnHelper = createColumnHelper<BookingListData>();
  const columns = useMemo<ColumnDef<BookingListData, any>[]>(
    () => [
      columnHelper.accessor('guest', {
        size: 657,
        header: () => 'Имя туриста',
        cell: info => {
          return `${info.row.original.guest.firstName} ${info.row.original.guest.lastName}`;
        },
      }),
      columnHelper.accessor('owner', {
        size: 657,
        header: () => 'Имя гида',
        cell: info => {
          return `${info.row.original.name}`;
        },
      }),
      columnHelper.accessor('eventStartDateTime', {
        size: 657,
        header: () => 'Дата',
        cell: info =>
          `${dayjs(info.row.original.eventStartDateTime)
            .utc(false)
            .format(DEFAULT_DATE_FORMAT)}`,
      }),
      columnHelper.accessor('eventStartDateTime', {
        size: 657,
        header: () => 'Время',
        cell: info =>
          `${dayjs(info.row.original.eventStartDateTime)
            .utc(false)
            .format('HH:mm')}`,
      }),
      columnHelper.accessor('guest.email', {
        size: 200,
        enableHiding: true,
        header: () => 'Email',
        cell: info => (
          <TableCellValueWithCopyIcon>
            {info.getValue()}
            <CopyIcon
              onClick={e => {
                e.stopPropagation();
                copyAddressToClipboard(info.getValue() || '');
              }}
            />
          </TableCellValueWithCopyIcon>
        ),
      }),
      columnHelper.accessor('guest.phone', {
        size: 200,
        enableHiding: true,
        header: () => 'Телефон',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('status', {
        size: 100,
        enableHiding: true,
        header: () => 'Статус',
        cell: info => (
          <Status status={info.getValue()} bordered={false} isTable={true} />
        ),
      }),
      columnHelper.accessor('bookingNumber', {
        size: 100,
        enableHiding: true,
        header: () => '№',
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
    void router.push(`/control-panel/booking/guide/${id}`);
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
              <TableCell colSpan={8} style={{textAlign: 'center'}}>
                Здесь будут ваши бронирования гидов
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default GuideTableComponent;
