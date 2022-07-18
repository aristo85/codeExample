// components
import Icon from 'modules/core/components/icon/icon';
// types
import type { IconName } from 'modules/core/components/icon/icon.interface';
import type { ResourceObject } from 'modules/core/types/resource.types';
import type { Wallet } from 'modules/wallet/types/wallet.types';
import type { SelectOption } from 'modules/core/components/select/select.interface';
// import { GetExchangePairsResponse } from 'modules/funds/types/funds-api.types';

// hard-coded available pairList
export const allPairs = ['BTC', 'ETH', 'TON', 'USDC', 'USDT'];

type CurrencyMetadata = {
  name: string;
  iconName: IconName;
  secondaryIconName: IconName;
};

export const currencyMetadataMap: Record<string, CurrencyMetadata> = {
  USD: {
    name: 'USD',
    iconName: 'dollarCircle',
    secondaryIconName: 'dollar',
  },
  RUB: {
    name: 'RUB',
    iconName: 'rubleCircle',
    secondaryIconName: 'rub',
  },
  EUR: {
    name: 'EUR',
    iconName: 'euro',
    secondaryIconName: 'eur',
  },
  BTC: {
    name: 'BTC',
    iconName: 'bitcoinCircleOrange',
    secondaryIconName: 'bitcoin',
  },
  ETH: {
    name: 'ETH',
    iconName: 'ethereum',
    secondaryIconName: 'eth',
  },
  TON: {
    name: 'TON',
    iconName: 'tonCircle',
    secondaryIconName: 'ton',
  },
  FRTN: {
    name: 'FRTN',
    iconName: 'frtnCircle',
    secondaryIconName: 'frtn',
  },
  XRP: {
    name: 'XRP',
    iconName: 'xrpCircle',
    secondaryIconName: 'xrp',
  },
  EOS: {
    name: 'EOS',
    iconName: 'eosCircle',
    secondaryIconName: 'eos',
  },
  DASH: {
    name: 'DASH',
    iconName: 'dashCircle',
    secondaryIconName: 'dash',
  },
  ADA: {
    name: 'ADA',
    iconName: 'adaCircle',
    secondaryIconName: 'ada',
  },
  LTC: {
    name: 'LTC',
    iconName: 'ltcCircle',
    secondaryIconName: 'ltc',
  },
  XLM: {
    name: 'XLM',
    iconName: 'xlmCircle',
    secondaryIconName: 'xlm',
  },
  XMR: {
    name: 'XMR',
    iconName: 'xmrCircle',
    secondaryIconName: 'xmr',
  },
  BCH: {
    name: 'BCH',
    iconName: 'bchCircle',
    secondaryIconName: 'bch',
  },
  USDC: {
    name: 'USDC',
    iconName: 'usdcCircle',
    secondaryIconName: 'usdc',
  },
  WETH: {
    name: 'WETH',
    iconName: 'wethCircle',
    secondaryIconName: 'weth',
  },
  ANC: {
    name: 'ANC',
    iconName: 'ancCircle',
    secondaryIconName: 'anc',
  },
  GAS: {
    name: 'GAS',
    iconName: 'gasCircle',
    secondaryIconName: 'gas',
  },
  NEO: {
    name: 'NEO',
    iconName: 'neoCircle',
    secondaryIconName: 'neo',
  },
  DAI: {
    name: 'DAI',
    iconName: 'daiCircle',
    secondaryIconName: 'dai',
  },
  USDT: {
    name: 'USDT',
    iconName: 'usdtCircle',
    secondaryIconName: 'usdt',
  },
  WBTC: {
    name: 'WBTC',
    iconName: 'wbtcCircle',
    secondaryIconName: 'wbtc',
  },
};

export const getWalletsSelectOptions = (
  walletList: ResourceObject<Wallet>[]
): SelectOption[] => {
  return walletList.map((wallet) => {
    const currencyMetadata = currencyMetadataMap[wallet.currency];

    return {
      value: wallet.currency,
      title: wallet.amount,
      subtitle: currencyMetadata?.name ?? wallet.currency,
      startAdornment: (
        <Icon name={currencyMetadata?.iconName} width={30} height={30} />
      ),
    };
  });
};

export const getExchangeWalletsSelectOptions = (
  walletList: ResourceObject<Wallet>[]
): SelectOption[] => {
  const list = walletList.filter(
    (wallet) => allPairs.includes(wallet.currency) && +wallet.amount > 0
  );

  return list.map((wallet) => {
    const currencyMetadata = currencyMetadataMap[wallet.currency];

    return {
      value: wallet.currency,
      title: wallet.amount,
      subtitle: currencyMetadata?.name ?? wallet.currency,
      startAdornment: (
        <Icon name={currencyMetadata?.iconName} width={30} height={30} />
      ),
    };
  });
};

export const getDestinationWalletsPairOptions = (
  // pairList: GetExchangePairsResponse[],
  targetCurrency: string
): SelectOption[] => {
  const pairs = allPairs.includes(targetCurrency)
    ? allPairs.filter((curr) => curr !== targetCurrency)
    : [];

  return pairs.map((currency) => {
    const currencyMetadata = currencyMetadataMap[currency];

    return {
      value: currency,
      title: '',
      subtitle: currencyMetadata?.name ?? currency,
      startAdornment: (
        <Icon name={currencyMetadata?.iconName} width={30} height={30} />
      ),
    };
  });
};
