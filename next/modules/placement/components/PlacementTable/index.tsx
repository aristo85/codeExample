import React, {FC, useMemo, useState} from 'react';
import {
  useBlockPlacementMutation,
  useDeletePlacementMutation,
  useGetPartnerPlacementsQuery,
  useUnblockPlacementMutation,
} from '@/modules/placement/apiPlacementSlice';
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {BookingCardProps} from '@/modules/placement/components/BookingCard';

import Pagination from '@/modules/core/components/Pagination';
import {getUrlQueries} from '@/modules/core/helpers/urlConstructor';
import Spinner from '@/modules/core/components/Spinner';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import {useNotification} from '@/modules/core/hooks/useNotification';
import ActionBlock from '@/modules/core/components/TableComponents/ActionBlock';
import {DeleteModal} from '@/modules/core/components/TableComponents/Modals/DeleteModal';
import {
  PlacementTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@/modules/core/components/TableComponents/tableStyles';
import {DEFAULT_LIMIT} from '@/modules/core/constants';

const PlacementTable: FC = () => {
  const columnHelper = createColumnHelper<BookingCardProps>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [offset, setOffset] = useState(0);
  const [deletePlacement, {isLoading: isDeleteLoading}] =
    useDeletePlacementMutation();
  const [unblockPlacement, {isLoading: isUnblockLoading}] =
    useUnblockPlacementMutation();
  const [blockPlacement, {isLoading: isBlockLoading}] =
    useBlockPlacementMutation();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedIdToDelete, setSelectedIdToDelete] = useState<number | null>(
    null,
  );
  const isScreenSm = useMatchMedia(`(max-width: ${breakpoints.sm}px)`);
  const toast = useNotification();

  const {data, isLoading, isError, refetch} = useGetPartnerPlacementsQuery(
    getUrlQueries({
      limit: DEFAULT_LIMIT,
      offset,
    }),
  );
  const onModalOpenClick = (id: number) => {
    setSelectedIdToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const onModalCloseClick = () => {
    setSelectedIdToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const onHideShowButtonClickFn = async (id: number, isHide: boolean) => {
    if (isHide) {
      await unblockPlacement(id).unwrap();
    } else {
      await blockPlacement(id).unwrap();
    }
    refetch();
  };

  const onDeleteClickFn = async () => {
    if (!selectedIdToDelete) return;

    try {
      await deletePlacement(selectedIdToDelete).unwrap();
      toast('Объект размещения был удален успешно', 'success');
      refetch();
    } catch {
      toast(`Объект размещения не был удален. Попробуйте заново`, 'error');
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

  const onPaginationClick = (page: number) => {
    setOffset((page - 1) * DEFAULT_LIMIT);
    setCurrentPage(page);
  };

  const totalPages: number = useMemo(
    () => Math.ceil(Number(data?.totalCount) / DEFAULT_LIMIT),
    [data?.totalCount],
  );

  const columns = useMemo<ColumnDef<BookingCardProps, any>[]>(
    () => [
      columnHelper.accessor('name', {
        size: 657,
        header: () => 'Название жилья',
        cell: info => <PlacementTitle>{info.getValue()}</PlacementTitle>,
      }),
      columnHelper.accessor('city', {
        size: 130,
        header: () => 'Населенный пункт',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('address', {
        size: 300,
        enableHiding: true,
        header: () => 'Адрес',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('id', {
        id: 'actions',
        size: 96,
        header: () => 'Действия',
        cell: info => (
          <ActionBlock
            id={info.row.original.id}
            width={info.column.columnDef.size}
            isHideValue={info.row.original.isHide}
            onHideShowButtonClickFn={onHideShowButtonClickFn}
            onDeleteClickFn={onModalOpenClick}
          />
        ),
      }),
    ],
    [data],
  );

  const table = useReactTable({
    data: data?.data || [],
    columns,
    state: {
      columnVisibility: {
        address: !isScreenSm,
      },
    },
    enableColumnResizing: false,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <TableContainer>
        {!isLoading && !isError && (
          <Table>
            <TableHead>
              {table.getHeaderGroups().map(headerGroup => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map(header => {
                    return (
                      <TableHeaderCell
                        key={header.id}
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
            {table.getRowModel().rows.length && !isLoading ? (
              <TableBody>
                {table.getRowModel().rows.map(row => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map(cell => (
                      <TableCell
                        key={cell.id}
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
                  <TableCell colSpan={6} style={{textAlign: 'center'}}>
                    Здесь будет ваше жильё
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        )}
        {data && totalPages > 1 && (
          <Pagination
            leftSideButtons={1}
            rightSideButtons={1}
            visiblePages={4}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPaginationClick}
          />
        )}
      </TableContainer>
      {isDeleteModalOpen && (
        <DeleteModal
          deletingText={'Вы уверены, что хотите удалить объект размещения?'}
          deletePlacementFn={onDeleteClickFn}
          closeButtonFn={onModalCloseClick}
        />
      )}
      <Spinner
        showSpinner={isDeleteLoading || isBlockLoading || isUnblockLoading}
      />
    </>
  );
};

export default PlacementTable;
