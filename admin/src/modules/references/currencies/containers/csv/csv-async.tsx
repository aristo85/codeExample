import { format, fromUnixTime } from 'date-fns';
import { FC, useState, useRef } from 'react';
import { CSVCurrencyData, CSVProps } from './csv.interface';
import { CSVLink } from 'react-csv';
import { getAllCurrencies } from '../../hooks/use-currency-list-query';
import Button from 'modules/core/components/button';

const CSVAsync: FC<CSVProps> = ({ filter, listCount }) => {
  const [listData, setlistData] = useState<CSVCurrencyData[] | []>([]);
  const csvInstance = useRef<any | null>(null);

  const getData = async () => {
    if (listCount) {
      const currenciesList = await getAllCurrencies({
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

          const active = item.active ? 'Active' : 'Blocked';
          const popular = item.popular ? 'popular' : 'Not popular';
          const default_currency = item.default ? 'Default' : 'Not Default';
          const isToken = item.is_token ? 'Token' : 'Not token';

          return {
            ...item,
            created_at: created,
            default: default_currency,
            active,
            popular,
            is_token: isToken,
            currency_type: item.currency_type,
            updated_at: updated,
          };
        });

        setlistData(newList);
      }
    }
  };

  // useEffect(() => {
  //   // listData.length < 1 &&
  //   getData();
  // }, [listCount, filter]);

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
          { label: 'Currency ID', key: 'id' },
          { label: 'Currency code', key: 'code' },
          { label: 'Name', key: 'name' },
          { label: 'Currency type', key: 'currency_type' },
          { label: 'Active', key: 'active' },
          { label: 'Default', key: 'default' },
          { label: 'Popular', key: 'popular' },
          { label: 'Scale', key: 'scale' },
          { label: 'Is token', key: 'is_token' },
          { label: 'Created', key: 'created_at' },
          { label: 'Updated', key: 'updated_at' },
        ]}
        asyncOnClick
        filename='Currencies.csv'
        style={{ all: 'unset' }}
        ref={csvInstance}
      />
    </>
  );
};

export default CSVAsync;
