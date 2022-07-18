import React from 'react';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';

import './funds-confirm.scss';

function FundsConfirm() {
  const { t } = useLocalization();

  return (
    <>
      <div className='main-content title'>
        <h1>{t('PAGES.ADD_FUNDS_CONFIRM.TITLE')}</h1>
        <p>{t('PAGES.ADD_FUNDS_CONFIRM.SUBTITLE')}</p>
      </div>
      <div className='funds-confirm'>
        <div className='funds-confirm-container'>
          <form
            action=''
            id='deposit-confirm-form'
            className='deposit-confirm-form'
          >
            <fieldset>
              <label htmlFor='from-where'>{t('FORMS.RECIPIENT')}</label>
              <input
                type='text'
                defaultValue='fruitin.pro'
                name='from-where'
                readOnly
              ></input>
            </fieldset>
            <fieldset>
              <label htmlFor='comments'>{t('FORMS.COMMENTS')}</label>
              <input
                type='text'
                defaultValue={`${t(
                  'FORMS.ADD_FUNDS_TO'
                )} P1029204682 [a.bykov@paycos.com]`}
                name='comments'
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
                name='fee'
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
              {t('FORMS.TOTAL')}: <span className='total-amount'>1.06 $</span>
            </p>
            <div className='form-submition'>
              <input
                type='button'
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
    </>
  );
}
export default FundsConfirm;
