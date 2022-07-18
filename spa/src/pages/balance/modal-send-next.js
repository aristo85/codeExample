import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import "./withdrawal-estimation.scss";

Modal.setAppElement("#root");

function WithdrawalEstimation({
  isOpen,
  toggleModal,
  apiService,
  fromWallet,
  withdrawal,
  onError
}) {
  const onSubmit = (e) => {
    e.preventDefault();
    apiService
      .sendMoney(fromWallet.id, withdrawal.money.amount, withdrawal.address)
      .then((result) => {
        toggleModal(false);
      })
      .catch((err) => {
        onError(err);
      });
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.35)",
          },
        }}
      >
        <div className="send-next-modal">
          <button className="close-modal" onClick={() => toggleModal(false)}>
            &times;
          </button>
          <div className="send-next-modal-container">
            <form
              action=""
              id="crypto-send-next-form"
              className="crypto-send-next-form"
            >
              <div className="send-next-modal-title">
                <h1>Send {fromWallet.currency}</h1>
              </div>
              <fieldset>
                <label htmlFor="from-where">From</label>
                <input
                  type="text"
                  defaultValue={fromWallet.code}
                  name="from-where"
                  readOnly
                />
              </fieldset>
              <fieldset>
                <label htmlFor="to-where">To</label>
                <input
                  type="text"
                  defaultValue={withdrawal.address}
                  name="to-where"
                  readOnly
                />
              </fieldset>
              <fieldset>
                <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  defaultValue={withdrawal.money.toString()}
                  name="amount"
                  readOnly
                />
              </fieldset>
              <fieldset>
                <label htmlFor="fee">Fee</label>
                <input
                  type="text"
                  defaultValue={withdrawal.fee.toString()}
                  name="fee"
                  readOnly
                />
              </fieldset>
              <fieldset>
                <label htmlFor="total">Total</label>
                <input
                  type="text"
                  defaultValue={withdrawal.total.toString()}
                  name="total"
                  readOnly
                />
              </fieldset>
              <div className="form-submition">
                <input
                  type="submit"
                  defaultValue="Continue"
                  className="form-submit"
                  id="form-btn"
                  onClick={onSubmit}
                />
              </div>
              <a href="#" className="go-back">
                Go Back
              </a>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default WithdrawalEstimation;
