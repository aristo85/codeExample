import { format, fromUnixTime } from 'date-fns';
import { FC, useState, useRef } from 'react';
import { CSVWalletsData, CSVProps } from './csv.interface';
import { CSVLink } from 'react-csv';
import { getAllWallets } from 'modules/wallet/hooks/use-wallet-list-query';
import Button from 'modules/core/components/button';

const CSVAsync: FC<CSVProps> = ({ filter, listCount }) => {
  const [listData, setlistData] = useState<CSVWalletsData[] | []>([]);
  const csvInstance = useRef<any | null>(null);

  const getData = async () => {
    if (listCount) {
      const currenciesList = await getAllWallets({
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

          const email = item.user?.email;

          return {
            ...item,
            created_at: created,
            updated_at: updated,
            email,
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
          { label: 'Wallet ID', key: 'id' },
          { label: 'User ID', key: 'user_uid' },
          { label: 'Email', key: 'email' },
          { label: 'Type', key: 'wallet_type' },
          { label: 'Currency', key: 'currency' },
          { label: 'Amount', key: 'amount' },
          { label: 'In hold', key: 'broxus_frozen' },
          { label: 'Created', key: 'created_at' },
          { label: 'Updated', key: 'updated_at' },
        ]}
        asyncOnClick
        filename='Wallets.csv'
        style={{ all: 'unset' }}
        ref={csvInstance}
      />
    </>
  );
};

export default CSVAsync;
