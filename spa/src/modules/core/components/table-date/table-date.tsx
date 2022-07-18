import { FC } from 'react';
// types
import type { TableDateProps } from './table-date.interface';
// components
import Icon from 'modules/core/components/icon';
// styled components
import { Root, PseudoButton, ColumnTitle } from './table-date.styled';

const TableDate: FC<TableDateProps> = ({ label, onClickDateSort }) => {
  return (
    <Root>
      <PseudoButton onClick={onClickDateSort}>
        <ColumnTitle>{label}</ColumnTitle>
        <Icon name={'sort'} />
      </PseudoButton>
    </Root>
  );
};

export default TableDate;
