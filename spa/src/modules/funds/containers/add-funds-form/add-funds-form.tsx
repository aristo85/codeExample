import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import QRCode from 'react-qr-code';
// components
import Select from 'modules/core/components/select';
import Icon from 'modules/core/components/icon';
import Input from 'modules/core/components/input';
import IconButton from 'modules/core/components/icon-button';
// import SocialButton from 'modules/core/components/social-button';
import Spinner from 'modules/core/components/spinner';
import Button from 'modules/core/components/button';
// hooks
import { useWalletListQuery } from 'modules/wallet/hooks/use-wallet-list-query';
import { useProfileQuery } from 'modules/user/hooks/use-profile-query';
import { useDepositCreateMutation } from 'modules/wallet/hooks/use-deposit-create-mutation';
import { useLocalization } from 'modules/localization/hooks/use-localization';
import { useCopyToClipboard } from 'modules/core/hooks/use-copy-to-clipboard';
// types
import type { SelectOption } from 'modules/core/components/select/select.interface';
// utils
import { currencyMetadataMap } from 'modules/wallet/wallet.utils';
// services
import WalletUrlLocationService from 'modules/wallet/services/wallet-url-location.service';
import { defaultCountWalletsPerPage } from 'modules/core/services/pagination.service';

import {
  SystemRoot,
  Root,
  Form,
  Info,
  InputSpinner,
  QrCodeWrapper,
  InfoCue,
  // SocialButtons,
  // SocialButtonWrapper,
  Actions,
} from './add-funds-form.styled';
import {
  InfoTitle,
  InfoBlock,
  InfoBlockTitle,
  InfoBlockText,
} from 'modules/funds/containers/add-funds-fiat-form/add-funds-fiat-form.styled';
import { useLocation } from 'react-router';
import AddFundsFiatForm from '../add-funds-fiat-form/add-funds-fiat-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectFundsTransferSystemSelector } from 'modules/funds/funds.selectors';
import { fundsTransferSystemSelectorDisable } from 'modules/funds/funds.actions';

const walletUrlLocationService = new WalletUrlLocationService();

const AddFundsForm: FC = () => {
  // hooks
  const { t } = useLocalization();
  const [addressRef, copyAddressToClipboard] = useCopyToClipboard();
  const params = useLocation();
  const urlState: any = params.state;
  const dispatch = useDispatch();
  // queries
  const userEmail = useProfileQuery().data?.user?.email;
  const walletList = useWalletListQuery({
    page: 1,
    per_page: defaultCountWalletsPerPage,
  });
  const depositCreateMutation = useDepositCreateMutation();
  const isSysSelectorDisabled = useSelector(selectFundsTransferSystemSelector);
  // state
  const [activeWalletCurrency, setActiveWalletCurrency] = useState<
    string | null
  >(null);
  // memo
  const activeWallet = useMemo(() => {
    return walletList.data?.list?.find(
      (wallet) => wallet.currency === activeWalletCurrency
    );
  }, [walletList.data, activeWalletCurrency]);
  const walletOptions = useMemo<SelectOption[]>(() => {
    if (!walletList.data?.list) {
      return [];
    }

    return walletList.data?.list
      ?.sort((a: any, b: any) => a.convertation.value - b.convertation.value)
      .reverse()
      .map((wallet) => {
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
  }, [walletList.data]);
  const qrCodeUrl = useMemo(() => {
    if (depositCreateMutation.data && activeWallet) {
      return walletUrlLocationService.createWalletSendUrlParams(
        activeWallet.id,
        depositCreateMutation.data.blockchain_address
      );
    }
  }, [depositCreateMutation.data, activeWallet]);

  useEffect(() => {
    if (activeWallet?.wallet_type === 'crypto') {
      depositCreateMutation.mutate({ wallet_id: activeWallet.id });
    }
  }, [activeWallet]);

  const handleCryptoFormSubmit = useCallback(() => {
    setActiveWalletCurrency(null);
  }, []);

  useEffect(() => {
    isSysSelectorDisabled && dispatch(fundsTransferSystemSelectorDisable());
  }, []);

  // useEffect(() => {
  //   urlState?.fromRedirect && setActiveWalletCurrency('fiat');
  //   !urlState && setActiveWalletCurrency(null);
  // }, [urlState]);
  useEffect(() => {
    if (urlState) {
      urlState.fromRedirect && setActiveWalletCurrency('fiat');
      urlState.clickedFrom && setActiveWalletCurrency(urlState.clickedFrom);
      !urlState.fromRedirect &&
        !urlState.clickedFrom &&
        setActiveWalletCurrency(null);
    } else {
      setActiveWalletCurrency(null);
    }
  }, [urlState]);

  return (
    <SystemRoot>
      <Select
        label={t('FORMS.ACCOUNT')}
        value={activeWalletCurrency}
        options={[
          {
            value: 'fruitin',
            title: 'FRUITIN',
            subtitle: '',
            startAdornment: <Icon name='fruitin' width={30} height={30} />,
          },
          {
            value: 'fiat',
            title: 'VISA',
            subtitle: '',
            startAdornment: <Icon name='visaMaster' width={30} height={30} />,
          },
          ...walletOptions,
        ]}
        onChange={setActiveWalletCurrency}
        disabled={isSysSelectorDisabled}
      />
      {activeWalletCurrency && activeWalletCurrency !== 'fiat' && (
        <Root>
          <Form>
            {activeWallet?.wallet_type === 'fiat' && (
              <span>Fiat support coming soon</span>
            )}
            {activeWalletCurrency === 'fruitin' && (
              <>
                <Input
                  ref={addressRef}
                  name='address'
                  label={t('MODALS.BALANCE.LBL.ADRESS')}
                  value={userEmail}
                  readOnly
                  endAdornment={
                    <IconButton
                      icon='copy'
                      size='small'
                      onClick={copyAddressToClipboard}
                    />
                  }
                />
                {/* <SocialButtons>
                  <SocialButtonWrapper>
                    <SocialButton name='viber' />
                  </SocialButtonWrapper>
                  <SocialButtonWrapper>
                    <SocialButton name='messenger' />
                  </SocialButtonWrapper>
                  <SocialButtonWrapper>
                    <SocialButton name='mail' />
                  </SocialButtonWrapper>
                  <SocialButtonWrapper>
                    <SocialButton name='telegram' />
                  </SocialButtonWrapper>
                  <SocialButtonWrapper>
                    <SocialButton name='more' />
                  </SocialButtonWrapper>
                </SocialButtons> */}
                <Actions>
                  <Button
                    text={t('FORM.BTN.DONE')}
                    onClick={handleCryptoFormSubmit}
                  />
                </Actions>
              </>
            )}
            {activeWallet?.wallet_type === 'crypto' && (
              <>
                <Input
                  ref={addressRef}
                  name='address'
                  label={t('MODALS.BALANCE.LBL.ADRESS')}
                  value={depositCreateMutation.data?.blockchain_address}
                  readOnly
                  endAdornment={
                    depositCreateMutation.isLoading ? (
                      <InputSpinner size='small' isLoading />
                    ) : (
                      <IconButton
                        icon='copy'
                        size='small'
                        onClick={copyAddressToClipboard}
                      />
                    )
                  }
                />
                {/* <SocialButtons>
                  <SocialButtonWrapper>
                    <SocialButton name='viber' />
                  </SocialButtonWrapper>
                  <SocialButtonWrapper>
                    <SocialButton name='messenger' />
                  </SocialButtonWrapper>
                  <SocialButtonWrapper>
                    <SocialButton name='mail' />
                  </SocialButtonWrapper>
                  <SocialButtonWrapper>
                    <SocialButton name='telegram' />
                  </SocialButtonWrapper>
                  <SocialButtonWrapper>
                    <SocialButton name='more' />
                  </SocialButtonWrapper>
                </SocialButtons> */}
                <Actions>
                  <Button
                    text={t('FORM.BTN.DONE')}
                    onClick={handleCryptoFormSubmit}
                  />
                </Actions>
              </>
            )}
          </Form>
          <Info>
            {activeWallet?.wallet_type === 'crypto' && (
              <QrCodeWrapper>
                <Spinner isLoading={!qrCodeUrl} isAbsolute>
                  {qrCodeUrl && <QRCode value={qrCodeUrl} size={100} />}
                </Spinner>
              </QrCodeWrapper>
            )}
            {activeWalletCurrency === 'fruitin' && (
              <div>
                <InfoTitle>
                  {t('FORMS.TRANSFER_FROM')} FRUITIN {''}
                  {t('FORMS.TRANSFER_TO')} {''}
                  FRUITIN
                </InfoTitle>

                <InfoBlock>
                  <InfoBlockTitle>
                    {t('FORMS.ADD_FUNDS.FRUITIN_METHOD')}
                  </InfoBlockTitle>
                  {/* <InfoBlockText></InfoBlockText> */}
                </InfoBlock>
                <InfoBlock>
                  <InfoBlockTitle>{t('FORMS.TERM')}</InfoBlockTitle>
                  <InfoBlockText>{t('FORMS.TERM.EXECUT')}</InfoBlockText>
                </InfoBlock>
              </div>
            )}
            <InfoCue>{t('PAGES.ADD_BALANCE_CLUE')}</InfoCue>
          </Info>
        </Root>
      )}
      {activeWalletCurrency === 'fiat' && <AddFundsFiatForm />}
    </SystemRoot>
  );
};

export default AddFundsForm;
