import { FC } from 'react';
import classNames from 'classnames';
import { format, fromUnixTime } from 'date-fns';
// components
import Table from 'modules/core/components/table';
// types
import type { Transaction } from 'modules/transaction/types/transaction.types';
import type { ResourceObject } from 'modules/core/types/resource.types';

import type { TransactionsListProps } from './transactions-table.interface';

const cellRenderer = (data: ResourceObject<Transaction>, key: string) => {
  if (key === 'status') {
    return (
      <div
        className={classNames(
          { 'bg-green-100 text-green-800': data.status === 'approved' },
          { 'bg-red-100 text-red-800': data.status === 'declined' },
          { 'bg-yellow-100 text-yellow-800': data.status === 'init' },
          { 'bg-blue-100 text-blue-800': data.status === 'pending' },
          'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
        )}
      >
        {data.status}
      </div>
    );
  }

  if (key === 'amount') {
    return `${data.amount}`;
  }

  if (key === 'created_at') {
    return format(fromUnixTime(data.created_at), 'dd.MM.yyyy HH:mm:ss');
  }

  if (key === 'updated_at') {
    return format(fromUnixTime(data.created_at), 'dd.MM.yyyy HH:mm:ss');
  }

  if (key === 'commission') {
    return `${data.commission}`;
  }

  if (key === 'provider_commission_fix') {
    return `${data.provider_commission_fix} ${data.commission_currency}`;
  }

  if (key === 'provider_commission_min') {
    return `${data.provider_commission_min} ${data.commission_currency}`;
  }

  if (key === 'provider_commission_rate') {
    return `${data.provider_commission_rate} ${data.commission_currency}`;
  }
};

const TransactionsTable: FC<TransactionsListProps> = ({
  transactions,
  paginationProps,
  isLoading,
}) => {
  return (
    <Table
      columns={[
        'transaction id',
        'total id',
        'transaction external id',
        'user id',
        'user wallet id',
        'destination wallet id',
        'destination wallet external id',
        'type',
        'direction',
        'amount',
        'currency',
        'commission',
        'commission_id',
        'provider commission fix',
        'provider commission min',
        'provider commission rate',
        'description',
        'created',
        'updated',
        'status',
      ]}
      dataKeys={[
        'id',
        'total_id',
        'transaction_external_id',
        'user_uid',
        'user_wallet_id',
        'to_wallet_id',
        'to_wallet_external_id',
        'type',
        'direction',
        'amount',
        'currency',
        'commission',
        'commission_id',
        'provider_commission_fix',
        'provider_commission_min',
        'provider_commission_rate',
        'description',
        'created_at',
        'updated_at',
        'status',
      ]}
      data={transactions}
      cellRenderer={cellRenderer}
      paginationProps={paginationProps}
      isLoading={isLoading}
    />
  );
};

export default TransactionsTable;
