import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import Modal from 'modules/core/components/modal';
import { useDispatch, useSelector } from 'react-redux';
import QRCode from 'react-qr-code';
// components
import Input from 'modules/core/components/input';
import IconButton from 'modules/core/components/icon-button';
import Spinner from 'modules/core/components/spinner';
// import SocialButton from 'modules/core/components/social-button';
// selectors
import { selectWalletIdToRequest } from 'modules/wallet/wallet.selectors';
// actions
import { walletRequestCancel } from 'modules/wallet/wallet.actions';
// hooks
import { useWalletListQuery } from 'modules/wallet/hooks/use-wallet-list-query';
import { useDepositCreateMutation } from 'modules/wallet/hooks/use-deposit-create-mutation';
import { useLocalization } from 'modules/localization/hooks/use-localization';
// services
import WalletUrlLocationService from 'modules/wallet/services/wallet-url-location.service';
import { defaultCountWalletsPerPage } from 'modules/core/services/pagination.service';

import {
  Root,
  QrCodeWrapper,
  // IconsWrapper,
  DoneButton,
} from './request-wallet-modal.styled';

const walletUrlLocationService = new WalletUrlLocationService();

const RequestWalletModal = () => {
  const { t } = useLocalization();
  // hooks
  const dispatch = useDispatch();
  // queries
  const walletList = useWalletListQuery({
    page: 1,
    per_page: defaultCountWalletsPerPage,
  });
  const depositCreateMutation = useDepositCreateMutation();
  // selectors
  const activeWalletId = useSelector(selectWalletIdToRequest);
  // memo
  const activeWallet = useMemo(
    () => walletList.data?.list?.find((wallet) => wallet.id === activeWalletId),
    [walletList, activeWalletId]
  );
  const qrCodeUrl = useMemo(() => {
    if (depositCreateMutation.data && activeWalletId) {
      return walletUrlLocationService.createWalletSendUrlParams(
        activeWalletId,
        depositCreateMutation.data.blockchain_address
      );
    }
  }, [activeWalletId, depositCreateMutation]);
  // refs
  const addressTextFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (activeWalletId) {
      depositCreateMutation.mutate(
        { wallet_id: activeWalletId },
        {
          onError: () => {
            dispatch(walletRequestCancel());
          },
        }
      );
    }
  }, [activeWalletId]);

  const handleModalClose = useCallback(() => {
    dispatch(walletRequestCancel());
    depositCreateMutation.reset();
  }, [dispatch, depositCreateMutation]);

  const handleCopyClick = useCallback(() => {
    if (addressTextFieldRef.current) {
      addressTextFieldRef.current.select();
      document.execCommand('copy');
    }
  }, []);

  return (
    <Modal
      isOpen={!!activeWalletId}
      title={`${t('MODALS.BALANCE.REQUEST')} ${activeWallet?.currency}`}
      onClose={handleModalClose}
      style={{
        content: {
          minWidth: 472,
          minHeight: 300,
        },
      }}
    >
      <Spinner isLoading={depositCreateMutation.isLoading} isAbsolute>
        <Root>
          {qrCodeUrl && (
            <QrCodeWrapper>
              <QRCode value={qrCodeUrl} size={100} />
            </QrCodeWrapper>
          )}
          <Input
            ref={addressTextFieldRef}
            name='address'
            label={t('MODALS.BALANCE.LBL.ADRESS')}
            value={depositCreateMutation.data?.blockchain_address}
            readOnly
            endAdornment={
              <IconButton icon='copy' size='small' onClick={handleCopyClick} />
            }
          />
          {/* <IconsWrapper>
            <SocialButton name='viber' />
            <SocialButton name='messenger' />
            <SocialButton name='telegram' />
            <SocialButton name='mail' />
            <SocialButton name='more' />
          </IconsWrapper> */}
          <DoneButton onClick={handleModalClose}>
            {t('FORM.BTN.DONE')}
          </DoneButton>
        </Root>
      </Spinner>
    </Modal>
  );
};

export default RequestWalletModal;
