import { FC, useCallback, useMemo } from 'react';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
// components
import Table from 'modules/core/components/table/table';
import Paper from 'modules/core/components/paper/paper';
import Icon from 'modules/core/components/icon';
// hooks
import { currencyMetadataMap } from 'modules/wallet/wallet.utils';
import { useLocalization } from 'modules/localization/hooks/use-localization';
import { useProfileQuery } from 'modules/user/hooks/use-profile-query';

// actions
// import {
//   walletRequestStart,
//   // walletSendStart,
// } from 'modules/wallet/wallet.actions';
// types
import type { ResourceObject } from 'modules/core/types/resource.types';
import type { WalletTableProps } from './wallet-table.interface';
import type { Wallet } from 'modules/wallet/types/wallet.types';

import {
  Root,
  ActionsList,
  ActionsListItem,
  ActionsListItemLink,
  ActionsBtn,
  ActionsName,
} from './wallet-table.styled';

const WalletsTable: FC<WalletTableProps> = ({ wallets }) => {
  const profile = useProfileQuery();
  const profileCurrency = profile?.data?.user?.currency;
  // hooks
  const { t } = useLocalization();
  // const dispatch = useDispatch();
  const history = useHistory();
  // memo
  const tableColumns = useMemo(
    () => [
      'PAGES.BALANCE.TABLE_ICON',
      'PAGES.BALANCE.TABLE_WALLET_NAME',
      'PAGES.BALANCE.TABLE_AMOUNT',
      'PAGES.BALANCE.TABLE_HOLD',
      'PAGES.BALANCE.TABLE_CURRENCY',
      profileCurrency === 'USD'
        ? 'PAGES.BALANCE.TABLE_IN_USD'
        : 'PAGES.BALANCE.TABLE_IN_EUR',
      'PAGES.BALANCE.TABLE_ACTIONS',
    ],
    [t]
  );
  const tableDataKeys = useMemo(
    () => [
      'icon',
      'name',
      'amount',
      'broxus_frozen',
      'currency',
      'in_usd',
      'actions',
    ],
    []
  );

  const handleDepositClick = useCallback(
    (currency: string) => {
      history.push('/funds', { clickedFrom: currency });
    },
    [history]
  );

  // const handleDepositClick = useCallback(
  //   (walletId: string) => () => {
  //     dispatch(walletRequestStart(walletId));
  //   },
  //   [dispatch]
  // );

  const handleWithdrawClick = useCallback(
    (currency: string) => {
      history.push('/transfer', { clickedFrom: currency });
    },
    [history]
  );

  const handleExchangeClick = useCallback(
    (currency: string) => {
      history.push('/exchange', { clickedFrom: currency });
      // history.push('/transfer');
    },
    [history]
  );

  const cellRenderer = (data: ResourceObject<Wallet>, key: string) => {
    if (key === 'icon') {
      return (
        <Icon
          name={currencyMetadataMap[data.currency]?.iconName}
          width={30}
          height={30}
        />
      );
    }

    if (key === 'name') {
      return currencyMetadataMap[data.currency]?.name ?? data.currency;
    }

    if (key === 'in_usd') {
      return data?.convertation?.value;
    }

    if (key === 'actions') {
      return (
        <ActionsList>
          <ActionsListItem>
            <ActionsListItemLink
              href='#'
              onClick={(e) => {
                e.preventDefault();
                handleWithdrawClick(data.currency);
              }}
            >
              <ActionsBtn>
                <Icon name={'arrowUp'} />
              </ActionsBtn>
              <ActionsName>{t('PAGES.BALANCE.TABLE_WITHDRAW')}</ActionsName>
            </ActionsListItemLink>
          </ActionsListItem>
          <ActionsListItem>
            <ActionsListItemLink
              href='#'
              onClick={(e) => {
                e.preventDefault();
                handleDepositClick(data.currency);
              }}
            >
              <ActionsBtn>
                <Icon name={'arrowDownBold'} />
              </ActionsBtn>
              <ActionsName>{t('PAGES.BALANCE.TABLE_DEPOSIT')}</ActionsName>
            </ActionsListItemLink>
          </ActionsListItem>
          <ActionsListItem>
            <ActionsListItemLink
              href='#'
              onClick={() => handleExchangeClick(data.currency)}
            >
              <ActionsBtn>
                <Icon name={'refresh'} />
              </ActionsBtn>
              <ActionsName>{t('PAGES.BALANCE.TABLE_TRANSFER')}</ActionsName>
            </ActionsListItemLink>
          </ActionsListItem>
        </ActionsList>
      );
    }
  };

  return (
    <Root>
      <Paper style={{ overflowX: 'scroll' }}>
        <Table
          columns={tableColumns}
          dataKeys={tableDataKeys}
          cellRenderer={cellRenderer}
          data={wallets}
        />
      </Paper>
    </Root>
  );
};

export default WalletsTable;
