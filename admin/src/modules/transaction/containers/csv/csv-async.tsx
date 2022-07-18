import { format, fromUnixTime } from 'date-fns';
import { FC, useState, useRef } from 'react';
import { CSVLink } from 'react-csv';
import { CSVTransactionsData, CSVProps } from './csv.interface';
import { getAllTransactions } from 'modules/transaction/hooks/use-transaction-list-query';
import Button from 'modules/core/components/button';

const CSVAsync: FC<CSVProps> = ({ filter, listCount }) => {
  const [listData, setlistData] = useState<CSVTransactionsData[] | []>([]);
  // const [isLoading, setisLoading] = useState<boolean>(false);
  const csvInstance = useRef<any | null>(null);

  const getData = async () => {
    if (listCount) {
      const theList = await getAllTransactions({
        per_page: listCount,
        q: filter,
      });
      const list = theList;

      if (list) {
        const newList = theList.list.map((item) => {
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
            updated_at: updated,
          };
        });

        setlistData(newList);
      }
    }
  };

  const onGetData = () => {
    // setisLoading(true);
    getData().then(() => {
      csvInstance.current.link.click();
      // setisLoading(false);
      setlistData([]);
    });
  };

  return (
    <>
      <Button
        variant='default'
        onClick={onGetData}
        // disabled={isLoading}
      >
        Export
      </Button>
      <CSVLink
        target='blanck'
        data={listData}
        headers={[
          { label: 'Transaction ID', key: 'id' },
          { label: 'Total ID', key: 'total_id' },
          { label: 'Transaction external ID', key: 'transaction_external_id' },
          { label: 'User ID', key: 'user_uid' },
          { label: 'User wallet ID', key: 'user_wallet_id' },
          { label: 'Destination wallet ID', key: 'to_wallet_id' },
          {
            label: 'Destination wallet external ID',
            key: 'to_wallet_external_id',
          },
          { label: 'Type', key: 'type' },
          { label: 'Direction', key: 'direction' },
          { label: 'Amount', key: 'amount' },
          { label: 'Currency', key: 'currency' },
          { label: 'Commission', key: 'commission' },
          { label: 'Commission ID', key: 'commission_id' },
          { label: 'provider_commission_fix', key: 'provider_commission_fix' },
          { label: 'provider_commission_min', key: 'provider_commission_min' },
          {
            label: 'provider_commission_rate',
            key: 'provider_commission_rate',
          },
          { label: 'description', key: 'description' },
          { label: 'Created', key: 'created_at' },
          { label: 'Updated', key: 'updated_at' },
          { label: 'status', key: 'status' },
        ]}
        asyncOnClick
        // onClick={(a, b) => {
        //   console.log(a, 'b', b);
        // }}
        filename='Transaction.csv'
        style={{ all: 'unset' }}
        ref={csvInstance}
      />
    </>
  );
};

export default CSVAsync;
