import { format, fromUnixTime } from 'date-fns';
import { FC, useState, useRef } from 'react';
import { CSVLimitData, CSVProps } from './csv.interface';
import { CSVLink } from 'react-csv';
import { getAllLimits } from '../../hooks/use-limit-list-query';
import Button from 'modules/core/components/button';

const CSVAsync: FC<CSVProps> = ({ filter, listCount }) => {
  const [listData, setlistData] = useState<CSVLimitData[] | []>([]);
  const csvInstance = useRef<any | null>(null);

  const getData = async () => {
    if (listCount) {
      const currenciesList = await getAllLimits({
        per_page: listCount,
        q: filter,
      });
      const list = currenciesList.list;

      if (list) {
        const newList = currenciesList.list.map((item) => {
          const created = format(
            fromUnixTime(item.created_at),
            'dd MMM yyyy HH:mm'
          );
          const updated = format(
            fromUnixTime(item.updated_at),
            'dd MMM yyyy HH:mm'
          );

          return {
            ...item,
            created_at: created,
            group: item.group.name ?? 'Regular',
            updated_at: updated,
          };
        });

        setlistData(newList);
      }
    }
  };

  const onGetData = () => {
    getData().then(() => {
      csvInstance.current.link.click();
      setlistData([]);
    });
  };

  return (
    <>
      <Button variant='default' onClick={onGetData}>
        Export
      </Button>
      <CSVLink
        target='blanck'
        data={listData}
        headers={[
          { label: 'ID', key: 'id' },
          { label: 'Name', key: 'name' },
          { label: 'Currency', key: 'currency' },
          { label: 'Type', key: 'limit_type' },
          { label: 'Transaction type', key: 'transaction_type' },
          { label: 'Period', key: 'period' },
          { label: 'Count', key: 'count' },
          { label: 'Min amount', key: 'min_amount' },
          { label: 'Max amount', key: 'max_amount' },
          { label: 'Group', key: 'group' },
          { label: 'Created', key: 'created_at' },
          { label: 'Updated', key: 'updated_at' },
        ]}
        asyncOnClick
        filename='Limits.csv'
        style={{ all: 'unset' }}
        ref={csvInstance}
      />{' '}
    </>
  );
};

export default CSVAsync;
