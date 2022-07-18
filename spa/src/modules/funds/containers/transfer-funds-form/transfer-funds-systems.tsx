import { FC, useEffect, useMemo, useState } from 'react';
// components
import Icon from 'modules/core/components/icon/icon';
import Select from 'modules/core/components/select/select';
// hooks
import { useWalletListQuery } from 'modules/wallet/hooks/use-wallet-list-query';
// import { useFormPersist } from 'modules/core/hooks/use-form-persist';
import { useLocalization } from 'modules/localization/hooks/use-localization';
// services
import { defaultCountWalletsPerPage } from 'modules/core/services/pagination.service';
// types
import type { SelectOption } from 'modules/core/components/select/select.interface';
import { TransferFundsSystemProps } from './transfer-funds-form.interface';
import { SystemRoot } from './transfer-funds-form.styled';
import TransferFundsOtherSystemForm from '../transfer-funds-otherSystem-form/trsnsfer-funds-otherSystem-form';
import TransferFundsForm from './transfer-funds-form';
import { useDispatch, useSelector } from 'react-redux';
import { walletSendStart } from 'modules/wallet/wallet.actions';
import { useLocation } from 'react-router';
import { selectFundsTransferSystemSelector } from 'modules/funds/funds.selectors';
import TransferFundsFiatForm from '../trnsfer-funds-fiat/trsnsfer-funds-fiat-form';
import { fundsTransferSystemSelectorDisable } from 'modules/funds/funds.actions';
// utils
import { currencyMetadataMap } from 'modules/wallet/wallet.utils';

const TransferFundsSystems: FC<TransferFundsSystemProps> = ({ onSubmit }) => {
  const params = useLocation();
  const urlState: any = params.state;
  const [paymentSystem, setpaymentSystem] = useState(null);

  // queries
  const { t } = useLocalization();
  const walletList = useWalletListQuery({
    page: 1,
    per_page: defaultCountWalletsPerPage,
  });
  const isSysSelectorDisabled = useSelector(selectFundsTransferSystemSelector);

  // memo
  const walletSelectOptions = useMemo<SelectOption[]>(() => {
    if (!walletList.data?.list) {
      return [];
    }

    return walletList.data.list
      .sort((a: any, b: any) => a.convertation.value - b.convertation.value)
      .reverse()
      .map((wallet) => {
        const currencyMetadata = currencyMetadataMap[wallet.currency];

        return {
          value: wallet.currency,
          title: wallet.currency,
          subtitle: currencyMetadata?.name ?? wallet.currency,
          startAdornment: (
            <Icon name={currencyMetadata?.iconName} width={30} height={30} />
          ),
        };
      });
  }, [walletList]);

  // @aristo/////////////////
  const dispatch = useDispatch();
  // const handleCrypto = useCallback(() => {
  //   dispatch(walletSendStart(activeWallet.id));
  // }, [dispatch, activeWallet]);

  useEffect(() => {
    if (
      paymentSystem &&
      paymentSystem !== 'internal' &&
      paymentSystem !== 'fiat'
    ) {
      const activeW = walletList.data?.list?.find(
        (wallet) => wallet.currency === paymentSystem
      );

      dispatch(walletSendStart(activeW.id));
    }
  }, [paymentSystem]);
  // @aristo/////////////////_

  useEffect(() => {
    isSysSelectorDisabled && dispatch(fundsTransferSystemSelectorDisable());
  }, []);

  useEffect(() => {
    if (urlState) {
      urlState.fromRedirect && setpaymentSystem('fiat');
      urlState.clickedFrom && setpaymentSystem('internal');
      !urlState.fromRedirect && !urlState.clickedFrom && setpaymentSystem(null);
    } else {
      setpaymentSystem(null);
    }
  }, [urlState]);

  return (
    <SystemRoot>
      <Select
        value={paymentSystem}
        onChange={(value) => setpaymentSystem(value)}
        label={t('FORMS.SYSTEM')}
        options={[
          {
            value: 'internal',
            title: 'FRUITIN',
            // subtitle: '0%',
            startAdornment: <Icon name='fruitin' width={30} height={30} />,
          },
          {
            value: 'fiat',
            title: 'VISA',
            subtitle: '',
            startAdornment: <Icon name='visaMaster' width={30} height={30} />,
          },
          ...walletSelectOptions,
        ]}
        disabled={isSysSelectorDisabled}
      />
      {paymentSystem === 'internal' && (
        <TransferFundsForm onSubmit={onSubmit} />
      )}
      {paymentSystem === 'fiat' && <TransferFundsFiatForm />}
      {paymentSystem !== 'fiat' &&
        paymentSystem !== 'internal' &&
        paymentSystem && <TransferFundsOtherSystemForm />}
    </SystemRoot>
  );
};

export default TransferFundsSystems;
