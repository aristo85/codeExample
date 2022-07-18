import { format, fromUnixTime } from 'date-fns';
import { FC, useState, useRef } from 'react';
import { CSVSupportData, CSVProps } from './csv.interface';
import { CSVLink } from 'react-csv';
import { getAllSupports } from '../../hooks/use-support-list-query';
import Button from 'modules/core/components/button';

const CSVAsync: FC<CSVProps> = ({ filter, listCount }) => {
  const [listData, setlistData] = useState<CSVSupportData[] | []>([]);
  const csvInstance = useRef<any | null>(null);

  const getData = async () => {
    if (listCount) {
      const transList = await getAllSupports({
        per_page: listCount,
        q: filter,
      });
      const list = transList.list;

      if (list) {
        const newList = transList.list.map((item) => {
          const created = format(
            fromUnixTime(item.created_at),
            'dd MMM yyyy HH:mm'
          );
          const updated = format(
            fromUnixTime(item.updated_at),
            'dd MMM yyyy HH:mm'
          );

          // const active = item.is_blocked ? 'blocked' : 'active';

          return {
            ...item,
            created_at: created,
            // is_blocked: active,
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
          { label: 'id', key: 'id' },
          { label: 'name', key: 'name' },
          { label: 'description', key: 'description' },
          { label: 'status', key: 'status' },
          { label: 'user_uid', key: 'user_uid' },
          { label: 'created', key: 'created_at' },
          { label: 'updated', key: 'updated_at' },
        ]}
        asyncOnClick
        filename='Suport.csv'
        style={{ all: 'unset' }}
        ref={csvInstance}
      />
    </>
  );
};

export default CSVAsync;
