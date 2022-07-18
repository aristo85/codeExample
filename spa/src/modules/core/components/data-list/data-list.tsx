import { FC } from 'react';

import type { DataListProps } from './data-list.interface';
import { Root, Row, Title, Value } from './data-list.styled';

const DataList: FC<DataListProps> = ({ rows }) => (
  <Root>
    {rows.map((row, i) => (
      <Row key={i}>
        <Title>{row.title}</Title>
        <Value>{row.value}</Value>
      </Row>
    ))}
  </Root>
);

export default DataList;
