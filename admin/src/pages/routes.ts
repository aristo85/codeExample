import type { RouteProps } from 'react-router';
// pages
import Login from 'pages/login';
import Transactions from 'pages/transactions';
import Users from 'pages/users';
import ClientsWallets from 'pages/clients-wallets';
import CommissionSettings from 'pages/commission-settings';
import UserDetails from 'pages/user-details';
import AdminSettings from 'pages/admin-settings';
import ReferenceCountries from './references/countries/reference-countries';
import CreateNewCountry from 'pages/references/countries/create-country';
import OperationTypes from './references/operation-types/OperationTypes';
import CreateNewOperationType from 'pages/references/operation-types/CreateOperation';
// import ClientRoles from './references/client-limits/client-limits';
// import ClientCreateNewRole from './references/client-limits/client-create-limit';
import ClientStatuses from './references/client-statuses/client-statuses';
import ClientCreateNewStatus from 'pages/references/client-statuses/client-create-status';
// import CryptoExchanges from 'pages/references/crypto-exchanges/crypto-exchanges';
// import CreateNewCryptoBurse from './references/crypto-exchanges/create-new-burse';
import FiatProviders from './references/fiat-providers/FiatProviders';
import CreateNewFiatProvider from 'pages/references/fiat-providers/fiat-provider-create';
import CreateOpration from './references/operation-types/CreateOperation';
import ReferenceCurrencies from 'pages/references/currencies/reference-currencies';
import CreateNewCurrency from 'pages/references/currencies/create-currency';
import ClientCreateNewGroup from './references/buisness-groups/client-create-group';
import ClientGroups from './references/buisness-groups/client-groups';
import ClientCreateNewLimit from './references/client-limits/client-create-limit';
import ClientLimits from './references/client-limits/client-limits';
import CreateNewCommission from './commission-settings/create-commission';
import Supports from './support/supports';
import supportDetails from './support-details';

export type Route = {} & RouteProps;

export const routes: Route[] = [
  {
    component: Login,
    path: '/login',
    exact: true,
  },
  {
    component: Transactions,
    path: '/',
    exact: true,
  },
  {
    component: Users,
    path: '/users',
    exact: true,
  },
  {
    component: UserDetails,
    path: '/users/:id',
    exact: true,
  },
  {
    component: ClientsWallets,
    path: '/clients-wallets',
    exact: true,
  },
  {
    component: CommissionSettings,
    path: '/commission-settings',
    exact: true,
  },
  {
    component: CreateNewCommission,
    path: '/commission-settings/create-new-commission',
    exact: true,
  },
  {
    component: Supports,
    path: '/support',
    exact: true,
  },
  {
    component: supportDetails,
    path: '/supports/:id/:uid',
    exact: true,
  },
  {
    component: AdminSettings,
    path: '/admin-settings',
    exact: true,
  },
  {
    component: ReferenceCountries,
    path: '/reference-countries',
    exact: true,
  },
  {
    component: CreateNewCountry,
    path: '/reference-countries/create-new-country',
    exact: true,
  },
  {
    component: OperationTypes,
    path: '/reference-operations',
    exact: true,
  },
  {
    component: CreateNewOperationType,
    path: '/reference-operations/create-new-operation',
    exact: true,
  },
  {
    component: CreateOpration,
    path: '/reference-countries/create-new-operation',
    exact: true,
  },
  {
    component: ClientLimits,
    path: '/reference-client-limits',
    exact: true,
  },
  {
    component: ClientCreateNewLimit,
    path: '/reference-client-limits/create-new-limit',
    exact: true,
  },
  {
    component: ClientStatuses,
    path: '/reference-client-statuses',
    exact: true,
  },
  {
    component: ClientCreateNewStatus,
    path: '/reference-client-statuses/create-new-status',
    exact: true,
  },
  {
    component: ClientGroups,
    path: '/reference-client-groups',
    exact: true,
  },
  {
    component: ClientCreateNewGroup,
    path: '/reference-client-groups/create-new-group',
    exact: true,
  },
  // {
  //   component: CryptoExchanges,
  //   path: '/reference-crypto-exchanges',
  //   exact: true,
  // },
  // {
  //   component: CreateNewCryptoBurse,
  //   path: '/reference-crypto-exchanges/create-new-burse',
  //   exact: true,
  // },
  {
    component: FiatProviders,
    path: '/reference-fiat-providers',
    exact: true,
  },
  {
    component: CreateNewFiatProvider,
    path: '/reference-fiat-providers/create-new-provider',
    exact: true,
  },
  {
    component: ReferenceCurrencies,
    path: '/reference-currencies',
    exact: true,
  },
  {
    component: CreateNewCurrency,
    path: '/reference-currencies/create-new-currency',
    exact: true,
  },
];
