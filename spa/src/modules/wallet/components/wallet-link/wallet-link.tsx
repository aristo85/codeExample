import React, { FC } from 'react';
// components
import Icon from 'modules/core/components/icon';
// types
import type { WalletLinkProps } from './wallet-link.interface';
import type { IconName } from 'modules/core/components/icon/icon.interface';

import {
  BalanceLink,
  BalanceAmount,
  BalanceAmountFractional,
} from './wallet-link.styled';

const WalletLink: FC<WalletLinkProps> = ({ wallet }) => {
  const currencyMatch: Record<string, { icon: IconName; color: string }> = {
    USD: {
      icon: 'dollarWhiteCircle',
      color: '#77C46F',
    },
    RUB: {
      icon: 'rubleWhiteCircle',
      color: '#3F51B5',
    },
    EUR: {
      icon: 'euroWhiteCircle',
      color: '#3CBEEF',
    },
    BTC: {
      icon: 'bitcoinWhiteCircle',
      color: '#F7931A',
    },
    ETH: {
      icon: 'ethereumWhiteCircle',
      color: '#6489A4',
    },
    TON: {
      icon: 'tonWhiteCircle',
      color: '#03b2cb',
    },
    XRP: {
      icon: 'xrpWhiteCircle',
      color: '#64BEF6',
    },
    FRTN: {
      icon: 'frtnWhiteCircle',
      color: '#F69B1A',
    },
    DASH: {
      icon: 'dashWhiteCircle',
      color: '#008CE7',
    },
    EOS: {
      icon: 'eosWhiteCircle',
      color: '#BC8F8F',
    },
    ADA: {
      icon: 'adanaWhiteCircle',
      color: '#FF69B4',
    },
    LTC: {
      icon: 'ltcWhiteCircle',
      color: '#16c784',
    },
    XLM: {
      icon: 'xlmWhiteCircle',
      color: '#800080',
    },
    XMR: {
      icon: 'xmrWhiteCircle',
      color: '#F26822',
    },
    BCH: {
      icon: 'bchWhiteCircle',
      color: '#009644',
    },
    USDC: {
      icon: 'usdcWhiteCircle',
      color: '#2775CA',
    },
    WETH: {
      icon: 'wethWhiteCircle',
      color: '#E82574',
    },
    ANC: {
      icon: 'ancWhiteCircle',
      color: '#5FAC46',
    },
    GAS: {
      icon: 'gasWhiteCircle',
      color: '#01F1A0',
    },
    NEO: {
      icon: 'neoWhiteCircle',
      color: '#58BF00',
    },
    DAI: {
      icon: 'daiWhiteCircle',
      color: '#F4B731',
    },
    USDT: {
      icon: 'usdtWhiteCircle',
      color: '#27A17C',
    },
  };

  const [round, decimal] = wallet.amount.split('.');

  return (
    <BalanceLink
      style={{
        color: currencyMatch[wallet.currency]?.color,
        borderColor: currencyMatch[wallet.currency]?.color,
      }}
      key={wallet.id}
    >
      <Icon
        name={currencyMatch[wallet.currency]?.icon}
        width={30}
        height={30}
      />
      <BalanceAmount
        style={{
          color: currencyMatch[wallet.currency]?.color,
        }}
      >
        {round}.<BalanceAmountFractional>{decimal}</BalanceAmountFractional>
      </BalanceAmount>
    </BalanceLink>
  );
};

export default WalletLink;
