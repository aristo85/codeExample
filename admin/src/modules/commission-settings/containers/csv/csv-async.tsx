import { format, fromUnixTime } from 'date-fns';
import { FC, useState, useRef } from 'react';
import { CSVLink } from 'react-csv';
import { getAllCommissions } from 'modules/commission-settings/hooks/use-commission-list-query';
import { CSVCommissionData, CSVProps } from './csv.interface';
import Button from 'modules/core/components/button';

const CSVAsync: FC<CSVProps> = ({ filter, listCount }) => {
  const [listData, setlistData] = useState<CSVCommissionData[] | []>([]);
  const csvInstance = useRef<any | null>(null);

  const getData = async () => {
    if (listCount) {
      const theList = await getAllCommissions({
        per_page: listCount,
        q: filter,
      });
      const list = theList.list;

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
          const userGroup = item.group.name ?? 'Regular';

          return {
            ...item,
            created_at: created,
            updated_at: updated,
            group: userGroup,
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
          { label: 'Transaction type', key: 'transaction_type' },
          { label: 'Direction', key: 'direction' },
          { label: 'Min_amount', key: 'min_amount' },
          { label: 'Fix_amount', key: 'fix_amount' },
          { label: 'Percent', key: 'percent' },
          { label: 'User group', key: 'group' },
          { label: 'Description', key: 'description' },
          { label: 'Created', key: 'created_at' },
          { label: 'Updated', key: 'updated_at' },
        ]}
        asyncOnClick
        filename='Commissions.csv'
        style={{ all: 'unset' }}
        ref={csvInstance}
      />
    </>
  );
};

export default CSVAsync;
