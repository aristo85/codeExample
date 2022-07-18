import React, { useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';

import './modal-deposit-add.scss';

Modal.setAppElement('#root');

const customStyles = {
  option: (provided) => ({
    ...provided,
    borderBottom: '1px dotted #c1c1c1',
    color: '#C1C1C1',
    padding: 10,
    backgroundColor: 'transparent',
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: '100%',
    display: 'flex',
    borderBottom: '1px solid #c1c1c1',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '5px 0',
    // margin: "5px 0",
    // height: "45px",
    '&:last-child': '',
  }),
  components: () => ({
    IndicatorSeparator: () => null,
    // eslint-disable-next-line no-undef
    backgroundColor: isSelected ? 'red' : null,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 0,
    color: '#858585', // Custom colour
  }),
  // singleValue: (provided) => {
  //   const opacity = 0.5;
  //   const transition = "opacity 300ms";

  //   return { ...provided, opacity, transition };
  // },
};

function ModalDeposit() {
  const { t } = useLocalization();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const optionsBalance = [
    {
      value: '0.00',
      label: (
        <div className='currency-options usd'>
          <span className='balance-amount'>0.00</span>
          <span className='currency-name'>USD balance</span>
        </div>
      ),
    },
    {
      value: '0.00',
      label: (
        <div className='currency-options euro'>
          <span className='balance-amount'>0.01</span>
          <span className='currency-name'>EUR balance</span>
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

  const chosenCurrency = [
    {
      value: 'USD',
      label: 'USD',
    },
    {
      value: 'EUR',
      label: 'EUR',
    },
  ];

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
        <div className='modal-deposit-add'>
          <button className='close-modal' onClick={() => setModalIsOpen(false)}>
            &times;
          </button>
          <div className='modal-deposit-add-container'>
            <form
              action=''
              id='modal-deposit-add-form'
              className='modal-deposit-add-form'
            >
              <div className='modal-deposit-add-title'>
                <h1>{t('MODALS.BALANCE.ADD.TITLE')}</h1>
              </div>
              <fieldset>
                <label>{t('MODALS.BALANCE.ADD.ACCOUNT')}</label>
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
                <label>{t('MODALS.BALANCE.LBL.CHOOSE_SYSTEM')}</label>
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
              <fieldset className='currency-amount'>
                <label>{t('MODALS.BALANCE.LBL.AMOUNT')}</label>
                <input type='number' placeholder='$ 0.00' />
                <span className='pseudo-placeholder'>USD</span>
              </fieldset>
              <fieldset className='total'>
                <label>{t('MODALS.BALANCE.TOTAL')}</label>
                <input type='number' placeholder='$ 0.00' />
                <Select
                  className='chosen-currency'
                  styles={customStyles}
                  options={chosenCurrency}
                  defaultValue={chosenCurrency[0]}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  isSearchable={false}
                />
                {/* <span className="pseudo-placeholder">USD</span> */}
              </fieldset>
              <div className='form-submition'>
                <input
                  type='submit'
                  className='form-submit'
                  id='form-btn'
                  value={t('FORM.BTN.CONTINUE')}
                />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalDeposit;
