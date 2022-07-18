import { FC } from 'react';
// components
import Tabs from 'modules/core/components/tabs';
// hooks
// import { useLocalization } from 'modules/localization/hooks/use-localization';
// types
import { Tab } from 'modules/core/components/tabs/tabs.interface';
// icons
import { ReactComponent as StyleList } from 'assets/icons/style-list.svg';
import { ReactComponent as StyleCards } from 'assets/icons/style-cards.svg';
// import { ReactComponent as StylePreferences } from 'assets/icons/style-preferences.svg';

import type { WalletFilterProps } from './wallet-filter.interface';
import { Root, OptionsTabs } from './wallet-filter.styled';

const WalletFilter: FC<WalletFilterProps> = ({
  // walletTypeFilter,
  // onWalletTypeFilterChange,
  viewTab,
  onViewTabChange,
}) => {
  // const { t } = useLocalization();

  // const walletTypeTabs: Tab[] = [
  //   {
  //     value: 'all',
  //     name: t('TABS.PANE.ALL_ACCOUNTS'),
  //   },
  //   {
  //     value: 'popularcrypto',
  //     name: t('TABS.PANE.POPULAR'),
  //   },
  //   {
  //     value: 'crypto',
  //     name: t('TABS.PANE.ALL_CRYPTO'),
  //   },
  //   {
  //     value: 'tokens',
  //     name: t('TABS.PANE.TOKENS'),
  //   },
  //   // {
  //   //   value: 'fiat',
  //   //   name: t('TABS.PANE.FIAT'),
  //   // },
  // ];

  const viewTabs: Tab[] = [
    {
      value: 'cards',
      name: <StyleCards />,
    },
    {
      value: 'list',
      name: <StyleList />,
    },
    // {
    //   value: 'preferences',
    //   name: <StylePreferences />,
    // },
  ];

  return (
    <Root>
      {/* <Tabs
        activeTab={walletTypeFilter}
        tabs={walletTypeTabs}
        onChange={onWalletTypeFilterChange}
      /> */}
      <OptionsTabs>
        <Tabs activeTab={viewTab} tabs={viewTabs} onChange={onViewTabChange} />
      </OptionsTabs>
    </Root>
  );
};

export default WalletFilter;
