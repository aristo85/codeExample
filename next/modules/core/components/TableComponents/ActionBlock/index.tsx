import React, {FC} from 'react';
import {IconButton, Tooltip} from '@mui/material';
import OpenEyeIcon from '@/modules/core/components/icons/OpenEyeIcon';
import ClosedEyeIcon from '@/modules/core/components/icons/ClosedEyeIcon';
import DeleteIcon from '@/modules/core/components/icons/DeleteIcon';
import {ActionBlockContainer} from './styles';
import Link from 'next/link';
import PenIcon from '@/modules/core/components/icons/PenIcon';

interface ActionBlockProps {
  id: number;
  width?: number;
  isHideValue: boolean;
  onHideShowButtonClickFn: (id: number, status: boolean) => void;
  onDeleteClickFn: (id: number) => void;
  editLink?: string;
}
const ActionBlock: FC<ActionBlockProps> = ({
  width,
  isHideValue,
  onHideShowButtonClickFn,
  onDeleteClickFn,
  id,
  editLink,
}) => {
  return (
    <ActionBlockContainer style={{width: width}}>
      {!isHideValue && (
        <Tooltip title={'Скрыть отображение'}>
          <IconButton onClick={() => onHideShowButtonClickFn(id, isHideValue)}>
            <OpenEyeIcon fill={'#8DAEC1'} />
          </IconButton>
        </Tooltip>
      )}
      {isHideValue && (
        <Tooltip title={'Открыть отображение'}>
          <IconButton onClick={() => onHideShowButtonClickFn(id, isHideValue)}>
            <ClosedEyeIcon fill={'#8DAEC1'} />
          </IconButton>
        </Tooltip>
      )}

      {editLink && (
        <Tooltip title={'Редактировать'}>
          <Link href={editLink}>
            <IconButton>
              <PenIcon />
            </IconButton>
          </Link>
        </Tooltip>
      )}

      <Tooltip title={'Удалить'}>
        <IconButton onClick={() => onDeleteClickFn(id)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </ActionBlockContainer>
  );
};
export default ActionBlock;
