import React, { FC } from 'react';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';
import {
  Root,
  InfoContainer,
  InfoContainerBlock,
  InfoContainerBlockParagraph,
  InfoContainerBlockSpan,
  OrderID,
  // OrderComments,
  OrderAmount,
} from './transfer-funds-fiat-card-form.styled';

import visa from '../../../../assets/icons/visa-logo.svg';
import '../../../../components/pay/pay.scss';

const TransferFundsFiatCardForm: FC = () => {
  const { t } = useLocalization();

  return (
    <Root>
      {/* <div className='main-content title'>
        <h1>{t('PAGES.PAY.TITLE')}</h1>
        <p>{t('PAGES.PAY.SUBTITLE')}</p>
      </div> */}
      <InfoContainer>
        <InfoContainerBlock>
          <OrderID>
            <InfoContainerBlockParagraph>
              {t('FORMS.ORDER_ID')}
            </InfoContainerBlockParagraph>
            <InfoContainerBlockSpan>
              {t('FORMS.ADD_FUNDS_TO')} P1029204682 [a.bykov@paycos.com]
            </InfoContainerBlockSpan>
          </OrderID>
          {/* <OrderComments>
            <InfoContainerBlockParagraph>
              {t('FORMS.COMMENTS')}
            </InfoContainerBlockParagraph>
            <InfoContainerBlockSpan>1234555213</InfoContainerBlockSpan>
          </OrderComments> */}
          <OrderAmount>
            <InfoContainerBlockParagraph>
              {t('FORMS.AMOUNT')}
            </InfoContainerBlockParagraph>
            <InfoContainerBlockParagraph>
              1.06 <span className='currency-sign'>$</span>
            </InfoContainerBlockParagraph>
          </OrderAmount>
        </InfoContainerBlock>
      </InfoContainer>
      <div className='pay-confirm container'>
        <div className='pay-confirm-info'>
          <form
            autoComplete='off'
            action=''
            id='pay-confirm-form'
            className='pay-confirm-form'
          >
            <div className='cards-block'>
              <div className='card-front'>
                <img src={visa} />
                <fieldset className='card-number'>
                  <label htmlFor='card-number'>
                    {t('FORMS.CARD_NUMBER_LENGTH')}
                  </label>
                  <input
                    type='text'
                    name='card-number'
                    className='form-control'
                    // maxLength='23'
                    // size='23'
                    required
                  />
                </fieldset>
                <div className='card-group'>
                  <fieldset className='card-expiry'>
                    <label htmlFor='expiry'>{t('FORMS.CARD.EXPIRY')}</label>
                    <input
                      type='text'
                      name='expiry-month'
                      className='form-control'
                      // maxLength='2'
                      // size='2'
                      required
                    />
                    <span>/</span>
                    <input
                      type='text'
                      name='expiry-year'
                      className='form-control'
                      // maxLength='2'
                      // size='2'
                      required
                    />
                  </fieldset>
                  <fieldset className='card-owner'>
                    <label htmlFor='cardholder-name'>
                      {t('FORMS.CARD.CARDHOLDER')}
                    </label>
                    <input
                      type='text'
                      name='cardholder-name'
                      className='form-control'
                      required
                    />
                  </fieldset>
                </div>
              </div>
              <div className='card-back'>
                <span />
                <fieldset className='card-cvv'>
                  <input
                    type='password'
                    name='card-cvv'
                    className='form-control'
                    // maxLength='3'
                    // size='3'
                    required
                  />
                  <label htmlFor='card-cvv'>{t('FORMS.CARD.CVV')}</label>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='form-submition'>
        <input
          type='button'
          value={t('FORM.BTN.PAY')}
          className='form-submit'
          id='form-btn'
        />
      </div>
    </Root>
  );
};

export default TransferFundsFiatCardForm;
