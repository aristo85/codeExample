import React from 'react';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';

import './exchange-confirm.scss';

function ExchangeConfirm() {
  const { t } = useLocalization();

  return (
    <>
      <div className='main-content title'>
        <h1>{t('PAGES.EXCHANGE_CONFIRM.TITLE')}</h1>
        <p>{t('PAGES.EXCHANGE_CONFIRM.SUBTITLE')}</p>
      </div>
      <div className='exchange-confirm'>
        <div className='exchange-confirm-container'>
          <form
            action=''
            id='deposit-confirm-form'
            className='deposit-confirm-form'
          >
            <fieldset>
              <label htmlFor='recipient'>{t('FORMS.RECIPIENT')}</label>
              <input
                type='text'
                defaultValue='fruitin.pro'
                name='recipient'
                readOnly
              ></input>
            </fieldset>
            <fieldset>
              <label htmlFor='to-account'>{t('FORMS.COMMENTS')}</label>
              <p className='comments'>
                {t('FORMS.TRANSFER_FROM')} Bd2003e44930 {t('FORMS.TRANSFER_TO')}
                <br></br> K1029204682 [someman@gmail.com]
              </p>
              {/* <input
                type="text"
                defaultValue="Transfer from Bd2003e44930 to K1029204682 [someman@gmail.com]"
                name="to-account"
                readOnly
              ></input> */}
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
              <label htmlFor='amount'>{t('FORMS.AMOUNT')}</label>
              <input
                type='text'
                defaultValue='1.00$'
                name='amount'
                readOnly
              ></input>
            </fieldset>
            <fieldset>
              <label htmlFor='fee'>{t('FORMS.FEE')}</label>
              <input
                type='text'
                defaultValue='0.06$'
                name='amount'
                readOnly
              ></input>
            </fieldset>
            <fieldset>
              <label htmlFor='method'>{t('FORMS.METHOD')}</label>
              <input
                type='text'
                defaultValue='FRUITIN wallet'
                name='method'
                readOnly
              ></input>
            </fieldset>
            <p className='total'>
              {t('FORMS.TOTAL')}: <span className='total-amount'>1.06 $</span>
            </p>
            <div className='form-submition'>
              <input
                type='button'
                defaultValue={t('FORM.BTN.EXCHANGE')}
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
    </>
  );
}
export default ExchangeConfirm;
