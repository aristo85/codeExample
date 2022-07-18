import { FC } from 'react';
import Table from './table';

const TableStory: FC = () => {
  return (
    <Table
      columns={['Title 1', 'Title 2', 'Title 3', 'Title 4']}
      dataKeys={['key1', 'key2', 'key3', 'key4']}
      data={[
        { key1: 'cell 1', key2: 'cell 2', key3: 'cell 3', key4: 'cell 4' },
        { key1: 'cell 1', key2: 'cell 2', key3: 'cell 3', key4: 'cell 4' },
      ]}
    />
  );
};

export default TableStory;
