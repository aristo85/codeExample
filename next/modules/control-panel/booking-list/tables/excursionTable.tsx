import React, {FC, useMemo, useState} from 'react';
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';

import {BookingListData} from '@/modules/core/api/model/booking/bookingListData';
import Status from '@/modules/core/components/Status';
import {
  FilterArrowIconDown,
  FilterArrowIconUp,
  HeaderCellWithSort,
  Table,
  TableBody,
  TableCell,
  TableCellValue,
  TableCellValueWithCopyIcon,
  TableContainer,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@/modules/core/components/TableComponents/tableStyles';
import dayjs from 'dayjs';
import {useRouter} from 'next/router';
import DefaultTableSortingIcon from '@/modules/core/components/icons/DefaultTableSortingIcon';
import {ServiceType} from '@/modules/core/components/BookingListItem';
import {useGetBookedListItemsQuery} from '@/modules/placement/apiPlacementSlice';
import {getUrlQueries, Order} from '@/modules/core/helpers/urlConstructor';
import {DEFAULT_DATE_FORMAT, DEFAULT_LIMIT} from '@/modules/core/constants';
import {BookedListContainer} from '@/modules/control-panel/booking-list/styles';
import Pagination from '@/modules/core/components/Pagination';
import Spinner from '@/modules/core/components/Spinner';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import CopyIcon from '@/modules/core/components/icons/Copy';
import {useCopyToClipboard} from '@/modules/core/hooks/useCopyToClipboard';

const ExcursionTableComponent: FC = () => {
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [copyAddressToClipboard] = useCopyToClipboard();
  const router = useRouter();

  const breadcrumbsItems = [
    {url: '/control-panel/booking', label: 'Бронирования'},
    {
      url: `/control-panel/booking?bookingActiveTab=${ServiceType.EXCURSION}`,
      label: 'Экскурсии',
    },
    {label: `${router.query.name}`},
  ];

  const {
    data,
    isLoading: isLoadingList,
    isError: isErrorList,
    isFetching,
  } = useGetBookedListItemsQuery(
    getUrlQueries({
      type: ServiceType.EXCURSION,
      limit: DEFAULT_LIMIT,
      offset,
      sortBy: sorting[0]?.id,
      orderBy: sorting[0]?.desc ? Order.ASC : Order.DESC,
      time: router.query.time || null,
      excursionId: router.query.id || null,
      dateTime: router.query.dateTime || null,
    }),
    {skip: !router.query.id},
  );

  const totalPages: number = useMemo(
    () => Math.ceil(Number(data?.totalCount) / DEFAULT_LIMIT),
    [data?.totalCount],
  );
  const onPaginationClick = (page: number) => {
    setOffset((page - 1) * DEFAULT_LIMIT);
    setCurrentPage(page);
  };

  const checkBeforeDisplayData = !isFetching && !isLoadingList && !isErrorList;

  const columnHelper = createColumnHelper<BookingListData>();
  const columns = useMemo<ColumnDef<BookingListData, any>[]>(
    () => [
      columnHelper.accessor('guest', {
        size: 657,
        enableSorting: true,
        header: () => 'Имя туриста',
        cell: info => {
          return `${info.row.original.guest.firstName} ${info.row.original.guest.lastName}`;
        },
      }),
      columnHelper.accessor('name', {
        size: 657,
        enableSorting: false,
        header: () => 'Название экскурсии',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('eventStartDateTime', {
        size: 200,
        enableSorting: false,
        header: () => 'Дата - время',
        cell: info => (
          <TableCellValue oneLine={true}>
            {dayjs(info.row.original.eventStartDateTime)
              .utc(false)
              .format(`${DEFAULT_DATE_FORMAT} HH:mm`)}
          </TableCellValue>
        ),
      }),
      columnHelper.accessor('guest.email', {
        size: 200,
        id: 'email',
        enableSorting: true,
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
        enableSorting: true,
        id: 'phone',
        header: () => 'Телефон',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('status', {
        size: 100,
        enableHiding: true,
        enableSorting: true,
        header: () => 'Статус',
        cell: info => (
          <Status status={info.getValue()} bordered={false} isTable={true} />
        ),
      }),
      columnHelper.accessor('bookingNumber', {
        size: 100,
        enableHiding: true,
        enableSorting: true,
        header: () => '№',
        cell: info => info.getValue(),
      }),
    ],
    [data],
  );

  const table = useReactTable({
    data: data?.data || [],
    columns,
    enableColumnResizing: false,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    manualSorting: true,
    getSortedRowModel: getSortedRowModel(),
  });

  const onRowClick = (id: number) => {
    void router.push(`/control-panel/booking/excursion/${id}`);
  };

  return (
    <BookedListContainer>
      <Breadcrumbs paths={breadcrumbsItems} />
      <TableContainer>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup, index) => (
              <TableRow key={`${headerGroup.id}-${index}`}>
                {headerGroup.headers.map((header, index) => {
                  return (
                    <TableHeaderCell
                      style={{
                        width: header.column.columnDef.size,
                      }}
                      key={`${header.id}-${index}`}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}>
                      {header.isPlaceholder ? null : header.column.getCanSort() ? (
                        <HeaderCellWithSort>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {header.column.getIsSorted() ? (
                            {
                              asc: <FilterArrowIconDown />,
                              desc: <FilterArrowIconUp />,
                            }[header.column.getIsSorted() as string]
                          ) : (
                            <DefaultTableSortingIcon />
                          )}
                        </HeaderCellWithSort>
                      ) : (
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )
                      )}
                    </TableHeaderCell>
                  );
                })}
              </TableRow>
            ))}
          </TableHead>
          {table.getRowModel().rows.length > 0 ? (
            <TableBody>
              {table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={`${row.id}-${index}`}
                  onClick={() => onRowClick(row.original.id)}>
                  {row.getVisibleCells().map((cell, index) => (
                    <TableCell
                      key={`${cell.id}-${index}`}
                      style={{width: cell.column.columnDef.size}}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell colSpan={8} style={{textAlign: 'center'}}>
                  Здесь будут ваши бронирования экскурсий
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {checkBeforeDisplayData && data?.data && totalPages > 1 && (
        <Pagination
          leftSideButtons={1}
          rightSideButtons={1}
          visiblePages={4}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPaginationClick}
          isRewindButtonsShown={true}
        />
      )}
      <Spinner showSpinner={isLoadingList} />
    </BookedListContainer>
  );
};

export default ExcursionTableComponent;
