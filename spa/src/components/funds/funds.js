import React from 'react';
import Select from 'react-select';

// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';

import './funds.scss';

const customStyles = {
  option: (provided) => ({
    ...provided,
    borderBottom: '1px dotted #c1c1c1',
    color: '#C1C1C1',
    padding: 6,
    backgroundColor: 'transparent',
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: '100%',
    display: 'flex',
    borderBottom: '1px solid #c1c1c1',
    // paddingBottom: 0,
    padding: 0,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '5px 0px',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '14px',
    fontWeight: 500,
  }),
  components: () => ({
    IndicatorSeparator: () => null,
    // eslint-disable-next-line no-undef
    backgroundColor: isSelected ? 'red' : null,
  }),
  dropdownIndicator: () => ({
    padding: 0,
    color: '#858585', // Custom colour
  }),
};

function Funds() {
  const optionsBalance = [
    {
      value: '0.00',
      label: (
        <div className='account-options usd'>
          <span className='balance-amount'>0.00</span>
          <span className='account-name'>USD balance</span>
        </div>
      ),
    },
    {
      value: '0.00',
      label: (
        <div className='account-options euro'>
          <span className='balance-amount'>0.01</span>
          <span className='account-name'>EUR balance</span>
        </div>
      ),
    },
    {
      value: '0.00',
      label: (
        <div className='account-options bitcoin'>
          <span className='balance-amount'>0.00</span>
          <span className='account-name'>BTC balance</span>
        </div>
      ),
    },
  ];

  const chosenSystem = [
    {
      value: 'Visa',
      label: (
        <div className='system-options visa'>
          <span className='system-name'>Visa</span>
          <p>
            from <span className='system-commission'>3.99%</span>
          </p>
        </div>
      ),
    },
    {
      value: 'MasterCard',
      label: (
        <div className='system-options master'>
          <span className='system-name'>MasterCard</span>
          <p>
            from <span className='system-commission'>3.99%</span>
          </p>
        </div>
      ),
    },
  ];

  const chosenAccount = [
    {
      value: 'USD',
      label: 'USD',
    },
    {
      value: 'EUR',
      label: 'EUR',
    },
  ];

  const { t } = useLocalization();

  return (
    <>
      <div className='main-content title'>
        <h1>{t('PAGES.ADD_FUNDS.TITLE')}</h1>
        <p>{t('PAGES.ADD_FUNDS.SUBTITLE')}</p>
      </div>
      <div className='funds'>
        <div className='funds-container'>
          <form action='' id='funds-form' className='funds-form'>
            <fieldset>
              <label>{t('FORMS.ACCOUNT')}</label>
              <Select
                styles={customStyles}
                options={optionsBalance}
                defaultValue={optionsBalance[0]}
                components={{
                  IndicatorSeparator: () => null,
                }}
                isSearchable={false}
              />
            </fieldset>
            <fieldset>
              <label>{t('FORMS.SYSTEM')}</label>
              <Select
                styles={customStyles}
                options={chosenSystem}
                defaultValue={chosenSystem[0]}
                components={{
                  IndicatorSeparator: () => null,
                }}
                isSearchable={false}
              />
            </fieldset>
            <fieldset className='account-amount'>
              <label>{t('FORMS.AMOUNT')}</label>
              <input type='number' placeholder='$ 0.00' />
              <span className='pseudo-placeholder'>USD</span>
            </fieldset>
            <fieldset className='total'>
              <label>{t('FORMS.TOTAL')}</label>
              <div className='total-group'>
                <input type='number' placeholder='$ 0.00' />
                <Select
                  className='chosen-account'
                  styles={customStyles}
                  options={chosenAccount}
                  defaultValue={chosenAccount[0]}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  isSearchable={false}
                />
              </div>
            </fieldset>
            <div className='form-submition'>
              <input
                type='button'
                className='form-submit'
                id='form-btn'
                value={t('FORM.BTN.CONTINUE')}
              />
            </div>
          </form>
          <div className='funds-form-info-container'>
            <div className='funds-form-info'>
              <h3>{t('FORMS.ADD_FUNDS.TITLE')}</h3>
              <div className='max-per-one'>
                <span>$7,500</span>
                <p>{t('FORMS.MAX_PER_ONE')}</p>
              </div>
              <div className='comimission'>
                <span>{t('FORMS.ADD_FUNDS.COMISSION')}</span>
                <p>{t('FORMS.COMISSION.DESCR')}</p>
              </div>
              <div className='additional-info'>
                <p>{t('FORMS.ADD_FUNDS.COMISSION.ADD_INFO')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Funds;
