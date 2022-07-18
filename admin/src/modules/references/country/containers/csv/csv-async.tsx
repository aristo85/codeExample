import { format, fromUnixTime } from 'date-fns';
import { FC, useState, useRef } from 'react';
import { CSVCountryData, CSVProps } from './csv.interface';
import { CSVLink } from 'react-csv';
import { getAllCountries } from '../../hooks/use-country-list-query';
import Button from 'modules/core/components/button';

const CSVAsync: FC<CSVProps> = ({ filter, listCount }) => {
  const [listData, setlistData] = useState<CSVCountryData[] | []>([]);
  const csvInstance = useRef<any | null>(null);

  const getData = async () => {
    if (listCount) {
      const transList = await getAllCountries({
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

          const active = item.is_blocked ? 'blocked' : 'active';

          return {
            ...item,
            created_at: created,
            is_blocked: active,
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
          { label: 'name', key: 'name' },
          { label: 'country_code', key: 'code' },
          { label: 'active', key: 'is_blocked' },
          { label: 'created', key: 'created_at' },
          { label: 'updated', key: 'updated_at' },
        ]}
        asyncOnClick
        filename='Country.csv'
        style={{ all: 'unset' }}
        ref={csvInstance}
      />
    </>
  );
};

export default CSVAsync;
