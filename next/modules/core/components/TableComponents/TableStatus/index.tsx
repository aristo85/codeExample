import React, {FC} from 'react';
import {StatusPin, StatusText, TableStatusContainer} from './styles';
import {TableStatusEnum} from '@/modules/excursion/excursion.types';

interface TableStatusProps {
  status: TableStatusEnum;
  width?: number;
}

const TableStatusText: Record<TableStatusEnum, string> = {
  [TableStatusEnum.ACTIVE]: 'Активный',
  [TableStatusEnum.CHECK]: 'Проверка',
  [TableStatusEnum.DISABLED]: 'Отключен',
};

const TableStatus: FC<TableStatusProps> = ({width, status}) => {
  return (
    <TableStatusContainer $width={width}>
      <StatusPin status={status} />
      <StatusText>{TableStatusText[status]}</StatusText>
    </TableStatusContainer>
  );
};

export default TableStatus;
