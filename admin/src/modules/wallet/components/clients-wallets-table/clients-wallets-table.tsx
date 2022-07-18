import { FC, useCallback } from 'react';
import {
  format,
  fromUnixTime,
  // addDays
} from 'date-fns';
// components
import Table from 'modules/core/components/table';
// services
import urlSearchService from 'modules/core/services/url-search.service';
import { getHistory } from 'modules/core/services/history.service';
// types
import type { Wallet } from 'modules/wallet/types/wallet.types';
import type { ResourceObject } from 'modules/core/types/resource.types';
import type { ClientsListProps } from './clients-wallets-table.interface';

const ClientsWalletsTable: FC<ClientsListProps> = ({
  paginationProps,
  wallets,
}) => {
  const handleShowTransactions = useCallback((walletId: string) => {
    // const daysDataRange = -3;

    getHistory().push({
      pathname: '/',
      search: urlSearchService.getInsertedUrlSearch({
        filter_open: true,
        transactions_filter: {
          user_wallet_id: walletId,
          // created_from: format(
          //   addDays(new Date(), daysDataRange),
          //   'yyyy-MM-dd'
          // ),
          // created_to: format(new Date(), 'yyyy-MM-dd'),
        },
      }),
    });
  }, []);

  const cellRenderer = (data: ResourceObject<Wallet>, key: string | number) => {
    if (key === 'amount') {
      return `${data.amount}`;
    }

    if (key === 'email') {
      return `${data.user?.email ?? ''}`;
    }

    if (key === 'created') {
      return format(fromUnixTime(data.created_at), 'dd.MM.yyyy HH:mm:ss');
    }

    if (key === 'updated') {
      return format(fromUnixTime(data.updated_at), 'dd.MM.yyyy HH:mm:ss');
    }

    if (key === 'edit') {
      return (
        <button
          className='text-indigo-600 hover:text-indigo-900'
          onClick={() => handleShowTransactions(data.id)}
        >
          Show Transactions
        </button>
      );
    }

    if (key === 'currency') {
      return `${data.currency}`;
    }
  };

  return (
    <>
      <Table
        columns={[
          'wallet id',
          'user id',
          'email',
          'type',
          'currency',
          'amount',
          'in hold',
          'created',
          'updated',
          // 'name',
          // 'surname',
          // 'account type',
          // 'verification',
          '',
        ]}
        dataKeys={[
          'id',
          'user_uid',
          'email',
          'wallet_type',
          'currency',
          'amount',
          'broxus_frozen',
          'created',
          'updated',
          // 'name',
          // 'surname',
          // 'account_type',
          // 'verification',
          'edit',
        ]}
        data={wallets}
        cellRenderer={cellRenderer}
        paginationProps={paginationProps}
      />
    </>
  );
};

export default ClientsWalletsTable;
