import React, {FC, useMemo} from 'react';
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  OnChangeFn,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import {
  ExcursionTableRow,
  FilterArrowIconDown,
  FilterArrowIconUp,
  HeaderCellWithSort,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeaderCell,
  TableRow,
  TableTitleWithPointer,
} from '@/modules/core/components/TableComponents/tableStyles';
import {useRouter} from 'next/router';
import {ExcursionBookingListWithPlacesData} from '@/modules/core/api/model/booking/excursionBookingListWithPlacesData';
import DefaultTableSortingIcon from '@/modules/core/components/icons/DefaultTableSortingIcon';
import HomeNumberInput from '@/modules/home/components/Filters/HomeNumberInput';
import {useAddExcursionExternalPlacesMutation} from '@/modules/placement/apiPlacementSlice';

interface ExcursionTableProps {
  data?: ExcursionBookingListWithPlacesData[];
  setSorting: OnChangeFn<SortingState>;
  sorting: SortingState;
  refetch: () => void;
}

const ExcursionGroupedTableComponent: FC<ExcursionTableProps> = ({
  data,
  setSorting,
  sorting,
  refetch,
}) => {
  const [addExternalExcursionPlace] = useAddExcursionExternalPlacesMutation();
  const columnHelper = createColumnHelper<ExcursionBookingListWithPlacesData>();

  const columns = useMemo<ColumnDef<ExcursionBookingListWithPlacesData, any>[]>(
    () => [
      columnHelper.accessor('name', {
        size: 657,
        enableSorting: true,
        header: () => 'Название экскурсии',
        cell: info => (
          <TableTitleWithPointer onClick={() => onRowClick(info.row.original)}>
            {info.getValue()}
          </TableTitleWithPointer>
        ),
      }),
      columnHelper.accessor('date', {
        size: 400,
        enableSorting: true,
        header: () => 'Дата - время',
        cell: info => `${info.row.original.date} ${info.row.original.time}`,
      }),
      columnHelper.accessor('totalCount', {
        size: 200,
        enableSorting: false,
        header: () => 'Количество мест',
        cell: info =>
          `${info.row.original.busyCount}/${info.row.original.totalCount}`,
      }),
      columnHelper.accessor('externalCount', {
        size: 200,
        enableHiding: false,
        enableSorting: false,
        header: () => 'Занято мест',
        cell: info => (
          <HomeNumberInput
            isMobile={false}
            minValue={0}
            maxValue={info.row.original.totalCount}
            value={info.getValue()}
            setValue={async countNumber => {
              await addExternalExcursionPlace({
                excursionId: info.row.original.id,
                date: info.row.original.date,
                time: info.row.original.time,
                count: countNumber,
              });
              await refetch();
            }}
          />
        ),
      }),
    ],
    [data],
  );

  const table = useReactTable({
    data: data || [],
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

  const router = useRouter();

  const onRowClick = (data: ExcursionBookingListWithPlacesData) => {
    void router.push(
      `/control-panel/booking/table/excursion?id=${data.id}&time=${data.time}&dateTime=${data.date}&name=${data.name}`,
    );
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <TableRow key={`${headerGroup.id}-${index}`}>
              {headerGroup.headers.map((header, i) => {
                return (
                  <TableHeaderCell
                    style={{
                      width: header.column.columnDef.size,
                    }}
                    key={`${header.id}-${i}`}
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
              <ExcursionTableRow key={`${row.id}-${index}`}>
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell
                    key={`${cell.id}-${index}`}
                    style={{width: cell.column.columnDef.size}}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </ExcursionTableRow>
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
  );
};

export default ExcursionGroupedTableComponent;
