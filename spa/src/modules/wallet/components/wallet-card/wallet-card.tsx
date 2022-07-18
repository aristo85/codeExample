import React, { FC, memo, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
import { useProfileQuery } from 'modules/user/hooks/use-profile-query';
// import { useCryptoPriceQuery } from 'modules/funds/hooks/use-crypto-price-query';
// actions
// import {
//   walletRequestStart,
//   walletSendStart,
// } from 'modules/wallet/wallet.actions';
// components
import Icon from 'modules/core/components/icon';
// utils
import { currencyMetadataMap } from 'modules/wallet/wallet.utils';
// types
import type { WalletCardProps } from './wallet-card.interface';
// styled component
import {
  BalanceCard,
  BalanceCardHeader,
  BalanceCardHeaderCurrencyImg,
  BalanceCardWalletInfo,
  BalanceCardWalletCurrency,
  BalanceEquivalent,
  BalanceCardAmount,
  BalanceAmount,
  CurrencyContraction,
  BalanceCardButtonsContainer,
  BalanceCardButton,
  BalanceCardButtonLink,
  BalanceCardButtonImg,
  BalanceCardButtonLabel,
  BalanceCardHoldAmount,
} from './wallet-card.styled';

const WalletCard: FC<WalletCardProps> = ({ wallet }) => {
  // hooks
  const { t } = useLocalization();
  // const dispatch = useDispatch();
  const history = useHistory();
  const profile = useProfileQuery();

  // queries
  // const cryptoPrice = useCryptoPriceQuery(
  //   {
  //     currency: wallet.currency,
  //     currency_target: 'USDT',
  //   },
  //   {
  //     enabled: wallet.wallet_type === 'crypto',
  //   }
  // );

  // const handleDepositClick = useCallback(() => {
  //   dispatch(walletRequestStart(wallet.id));
  // }, [dispatch, wallet.id]);

  const handleDepositClick = useCallback(() => {
    history.push('/funds', { clickedFrom: wallet.currency });
  }, [history]);

  const handleWithdrawClick = useCallback(() => {
    history.push('/transfer', { clickedFrom: wallet.currency });
  }, [history]);

  // const handleWithdrawClick = useCallback(() => {
  //   dispatch(walletSendStart(wallet.id));
  // }, [dispatch, wallet.id]);

  const handleExchangeClick = useCallback(() => {
    // if(+wallet.amount < 0)
    history.push('/exchange', { clickedFrom: wallet.currency });
  }, [history]);

  return (
    <BalanceCard>
      <BalanceCardHeader>
        <BalanceCardHeaderCurrencyImg>
          <Icon name={currencyMetadataMap[wallet.currency]?.iconName} />
        </BalanceCardHeaderCurrencyImg>
        <BalanceCardWalletInfo>
          <BalanceCardWalletCurrency>
            {wallet.code ?? wallet.currency}
          </BalanceCardWalletCurrency>
          {wallet?.convertation?.value && (
            <BalanceEquivalent>
              {profile.data?.user?.currency === 'USD' ? '$' : '€'}{' '}
              {(+wallet.convertation.value).toFixed(2)}
            </BalanceEquivalent>
          )}
        </BalanceCardWalletInfo>
      </BalanceCardHeader>
      <BalanceCardAmount>
        <BalanceAmount>{wallet.amount}</BalanceAmount>
        <CurrencyContraction>{wallet.currency}</CurrencyContraction>
      </BalanceCardAmount>
      <BalanceCardHoldAmount>
        <BalanceEquivalent>
          {wallet.broxus_frozen &&
            `${t('PAGES.BALANCE.IN_HOLD')} ${wallet.broxus_frozen} ${
              wallet.currency
            }`}
        </BalanceEquivalent>
      </BalanceCardHoldAmount>
      <BalanceCardButtonsContainer>
        <BalanceCardButton>
          <BalanceCardButtonLink onClick={handleWithdrawClick}>
            <BalanceCardButtonImg>
              <Icon name={'arrowUp'} />
            </BalanceCardButtonImg>
            <BalanceCardButtonLabel>
              {t('PAGES.BALANCE.WITHDRAW')}
            </BalanceCardButtonLabel>
          </BalanceCardButtonLink>
        </BalanceCardButton>
        <BalanceCardButton>
          <BalanceCardButtonLink onClick={handleDepositClick}>
            <BalanceCardButtonImg>
              <Icon name={'arrowDownBold'} />
            </BalanceCardButtonImg>
            <BalanceCardButtonLabel>
              {t('PAGES.BALANCE.DEPOSIT')}
            </BalanceCardButtonLabel>
          </BalanceCardButtonLink>
        </BalanceCardButton>
        <BalanceCardButton>
          <BalanceCardButtonLink onClick={handleExchangeClick}>
            <BalanceCardButtonImg>
              <Icon name={'refresh'} />
            </BalanceCardButtonImg>
            <BalanceCardButtonLabel>
              {t('PAGES.BALANCE.EXCHANGE')}
            </BalanceCardButtonLabel>
          </BalanceCardButtonLink>
        </BalanceCardButton>
      </BalanceCardButtonsContainer>
    </BalanceCard>
  );
};

export default memo(WalletCard);
