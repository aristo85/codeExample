import { format, fromUnixTime } from 'date-fns';
import { useLocalization } from 'modules/localization/hooks/use-localization';
import { useTransactionListQuery } from 'modules/transaction/hooks/use-transaction-list-query';
import { getAllTransactions } from 'modules/transaction/services/servises';
import { FC, useRef, useMemo, useState } from 'react';
import { CSVLink } from 'react-csv';
import { CSVProps } from './csv.interface';
// styled components
import { Action } from './transactions-board.styled';

const CSVAsync: FC<CSVProps> = ({ filter }) => {
  const { t } = useLocalization();
  const [listData, setlistData] = useState([]);
  const csvInstance = useRef<any | null>(null);

  // queries
  const transactionListCount = useTransactionListQuery({
    page: 1,
    per_page: 8,
  })?.data?.totalCount;

  const getData = async () => {
    if (transactionListCount) {
      const transList = await getAllTransactions({
        per_page: transactionListCount,
        q: filter,
      });

      const list = transList.list;

      if (list) {
        const newList = transList.list.map((item) => {
          const newDate = format(
            fromUnixTime(item.created_at),
            'dd MMM yyyy HH:mm'
          );

          const ps = 'Fruitin';

          const credit = item.direction === 'in' ? `+${item.amount}` : '';
          const debit = item.direction === 'out' ? `-${item.amount}` : '';

          return { ...item, created_at: newDate, ps, credit, debit };
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

  //   memo
  const headers = useMemo(
    () => [
      { label: t('PAGES.HISTORY.TABLE_ID'), key: 'id' },
      { label: t('PAGES.HISTORY.TABLE_TYPE'), key: 'type' },
      { label: t('PAGES.HISTORY.TABLE_DATE'), key: 'created_at' },
      { label: t('PAGES.HISTORY.TABLE_CREDIT'), key: 'credit' },
      { label: t('PAGES.HISTORY.TABLE_DEBIT'), key: 'debit' },
      { label: t('PAGES.HISTORY.TABLE_CURRENCY'), key: 'currency' },
      { label: t('PAGES.HISTORY.TABLE_FEE'), key: 'commission' },
      { label: t('PAGES.HISTORY.TABLE_PS'), key: 'ps' },
      { label: t('PAGES.HISTORY.TABLE_STATUS'), key: 'status' },
      { label: t('PAGES.HISTORY.TABLE_DESCRIPTION'), key: 'description' },
    ],
    [t]
  );

  return (
    <>
      <Action onClick={onGetData}>{t('PAGES.HISTORY.EXPORT_TO_CSV')}</Action>
      <CSVLink
        target='blanck'
        data={listData}
        headers={headers}
        asyncOnClick
        filename='Transaction.csv'
        style={{ all: 'unset' }}
        ref={csvInstance}
      />
    </>
  );
};

export default CSVAsync;
