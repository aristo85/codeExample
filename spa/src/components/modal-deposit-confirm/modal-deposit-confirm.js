import React, { useState } from 'react';
import Modal from 'react-modal';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';

import './modal-deposit-confirm.scss';

Modal.setAppElement('#root');

function ModalDepositConfirm() {
  const { t } = useLocalization();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button id='deposit-btn' onClick={() => setModalIsOpen(true)}>
        OPEN
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
          },
        }}
      >
        <div className='modal-deposit-confirm'>
          <button className='close-modal' onClick={() => setModalIsOpen(false)}>
            &times;
          </button>
          <div className='modal-deposit-confirm-container'>
            <form
              action=''
              id='deposit-confirm-form'
              className='deposit-confirm-form'
            >
              <div className='modal-deposit-confirm-title'>
                <h1>{t('MODALS.BALANCE.CONFIRM.TITLE')}</h1>
              </div>
              <fieldset>
                <label htmlFor='from-where'>
                  {t('MODALS.BALANCE.RECIPIENT')}
                </label>
                <input
                  type='text'
                  defaultValue='fruitin.pro'
                  name='from-where'
                  readOnly
                ></input>
              </fieldset>
              <fieldset>
                <label htmlFor='comments'>
                  {t('MODALS.BALANCE.LBL.COMMENTS')}
                </label>
                <input
                  type='text'
                  defaultValue={`${t(
                    'FORMS.ADD_FUNDS_TO'
                  )} P1029204682 [a.bykov@paycos.com]'
                  name='comments`}
                  readOnly
                ></input>
              </fieldset>
              <fieldset>
                <label htmlFor='order-id'>{t('FORMS.ORDER_ID')}</label>
                <input
                  type='text'
                  defaultValue='1234555213'
                  name='order-id'
                  readOnly
                ></input>
              </fieldset>
              <fieldset>
                <label htmlFor='amount'>{t('MODALS.BALANCE.LBL.AMOUNT')}</label>
                <input
                  type='text'
                  defaultValue='1.00$'
                  name='amount'
                  readOnly
                ></input>
              </fieldset>
              <fieldset>
                <label htmlFor='method'>{t('FORMS.METHOD')}</label>
                <input
                  type='text'
                  defaultValue='Visa'
                  name='method'
                  readOnly
                ></input>
              </fieldset>
              <p className='total'>
                {t('MODALS.BALANCE.TOTAL')}:
                <span className='total-amount'>1.06 $</span>
              </p>
              <div className='form-submition'>
                <input
                  type='submit'
                  defaultValue={t('FORM.BTN.CONTINUE')}
                  className='form-submit'
                  id='form-btn'
                />
              </div>
              <a href='#' className='go-back'>
                {t('FORM.BTN.GO_BACK')}
              </a>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalDepositConfirm;
