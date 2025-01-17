import React, {FC, useMemo, useState} from 'react';
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import Pagination from '@/modules/core/components/Pagination';
import Spinner from '@/modules/core/components/Spinner';
import {useNotification} from '@/modules/core/hooks/useNotification';
import {getUrlQueries} from '@/modules/core/helpers/urlConstructor';
import ActionBlock from '@/modules/core/components/TableComponents/ActionBlock';
import TableStatus from '@/modules/core/components/TableComponents/TableStatus';
import {DeleteModal} from '@/modules/core/components/TableComponents/Modals/DeleteModal';
import {DEFAULT_LIMIT} from '@/modules/core/constants';
import {
  PlacementTitle,
  Table,
  TableBody,
  TableCell,
  TableCellValueWithCopyIcon,
  TableContainer,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@/modules/core/components/TableComponents/tableStyles';
import {
  useDeleteGuideMutation,
  useGetPartnerGuideListQuery,
  useHideShowGuideMutation,
} from '@/modules/guide/apiGuideSlice';
import {GuideListData} from '@/modules/core/api/model/guide/guideListData';
import CopyIcon from '@/modules/core/components/icons/Copy';
import {useCopyToClipboard} from '@/modules/core/hooks/useCopyToClipboard';

const GuidePartnerTable: FC = () => {
  const columnHelper = createColumnHelper<GuideListData>();
  const [copyAddressToClipboard] = useCopyToClipboard();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [offset, setOffset] = useState(0);
  const [deleteGuide, {isLoading: isDeleteLoading}] = useDeleteGuideMutation();
  const [hideShowFunction, {isLoading: isHideShowLoading}] =
    useHideShowGuideMutation();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedIdToDelete, setSelectedIdToDelete] = useState<number | null>(
    null,
  );
  const toast = useNotification();

  const {data, isLoading, refetch, isError} = useGetPartnerGuideListQuery(
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
    await hideShowFunction({id, isHide});
    refetch();
  };

  const onDeleteClickFn = async () => {
    if (!selectedIdToDelete) return;

    try {
      await deleteGuide(selectedIdToDelete).unwrap();
      toast('Гид был удален успешно', 'success');
      refetch();
    } catch {
      toast(`Гид не был удален. Попробуйте заново`, 'error');
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

  const columns = useMemo<ColumnDef<GuideListData, any>[]>(
    () => [
      columnHelper.accessor('name', {
        size: 657,
        header: () => 'Имя, фамилия гида',

        cell: info => <PlacementTitle>{info.getValue()}</PlacementTitle>,
      }),
      columnHelper.accessor('cityName', {
        size: 130,
        header: () => 'Населенный пункт',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('phone', {
        size: 200,
        enableHiding: true,
        header: () => 'Телефон',
        cell: info => <>+{info.getValue()}</>,
      }),
      columnHelper.accessor('email', {
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
      columnHelper.accessor('status', {
        size: 100,
        enableHiding: true,
        header: () => 'Статус',
        cell: info => (
          <TableStatus
            width={info.column.columnDef.size}
            status={info.getValue()}
          />
        ),
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
            editLink={`/control-panel/guide/${info.row.original.id}/edit?step=1`}
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
                    Здесь будут ваши гиды
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
          deletingText={'Вы уверены, что хотите удалить гида?'}
          deletePlacementFn={onDeleteClickFn}
          closeButtonFn={onModalCloseClick}
        />
      )}
      <Spinner showSpinner={isDeleteLoading || isHideShowLoading} />
    </>
  );
};

export default GuidePartnerTable;
