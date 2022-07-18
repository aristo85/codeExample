import React, { useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';

import './modal-add-wallet.scss';

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
  singleValue: (provided) => ({
    fontWeight: 500,
  }),
};

function ModalAddWallet() {
  const { t } = useLocalization();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const chosenCurrency = [
    {
      value: 'USD',
      label: 'USD',
    },
    {
      value: 'EUR',
      label: 'EUR',
    },
    {
      value: 'RUB',
      label: 'RUB',
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
        <div className='modal-add-wallet'>
          <button className='close-modal' onClick={() => setModalIsOpen(false)}>
            &times;
          </button>
          <div className='modal-add-wallet-container'>
            <form
              action=''
              id='modal-add-wallet-form'
              className='modal-add-wallet-form'
            >
              <div className='modal-add-wallet-title'>
                <h1>{t('MODALS.ADD_WALLET.TITLE')}</h1>
              </div>
              <fieldset>
                <label>{t('MODALS.BALANCE.LBL.CHOOSE_CURRENCY')}</label>
                <Select
                  styles={customStyles}
                  options={chosenCurrency}
                  defaultValue={chosenCurrency[0]}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  isSearchable={false}
                />
              </fieldset>
              <div className='form-submition'>
                <input
                  type='button'
                  className='form-submit'
                  id='form-btn'
                  value={t('FORM.BTN.ADD_WALLET')}
                />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalAddWallet;
