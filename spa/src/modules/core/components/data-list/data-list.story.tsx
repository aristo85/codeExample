import { FC } from 'react';
import DataList from './data-list';

const DataListStory: FC = () => {
  return (
    <DataList
      rows={[
        {
          title: 'Recipient',
          value: 'fruitin.pro',
        },
        {
          title: 'Comments',
          value: 'Transfer to K1029204682 [someman@gmail.com]',
        },
        {
          title: 'Comments',
          value: 'Transfer to K1029204682 [someman@gmail.com]',
        },
        {
          title: 'Comments',
          value: 'Transfer to K1029204682 [someman@gmail.com]',
        },
      ]}
    />
  );
};

export default DataListStory;
