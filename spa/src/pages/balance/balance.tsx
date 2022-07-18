import React, { FC } from 'react';
// containers
import BalanceBoard from 'modules/wallet/containers/balance-board';
// import SendWalletModal from 'modules/wallet/containers/send-wallet-modal';
import RequestWalletModal from 'modules/wallet/containers/request-wallet-modal';

const Balance: FC = () => {
  return (
    <>
      <BalanceBoard />
      {/* <SendWalletModal /> */}
      <RequestWalletModal />
    </>
  );
};

export default Balance;
