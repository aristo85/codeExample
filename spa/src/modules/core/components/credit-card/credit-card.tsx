import { FC, memo } from 'react';
import {
  CardsBlock,
  CardFront,
  CardBaseFieldset,
  CardBaseLabel,
  CardNumber,
  CardNumberField,
  CardGroup,
  CardExpiryLabel,
  CardExpiryField,
  CardExpiryDivider,
  CardOwnerField,
  CardMagniteLine,
  CardOwner,
  CardOwnerLabel,
  CardBack,
  CardCVV,
  CardCVVLabel,
  CardCVVField,
} from './credit-card.styled';
// components
import Icon from 'modules/core/components/icon';
// types
import type { CreditCardProps } from './credit-card.interface';
// hooks
import { useLocalization } from 'modules/localization/hooks/use-localization';

const CreditCard: FC<CreditCardProps> = ({
  variant,
  cardNumberInputProps,
  expiryMonthInputProps,
  expiryYearInputProps,
  holderNameInputProps,
  cvvInputProps,
}) => {
  const { t } = useLocalization();

  return (
    <CardsBlock>
      <CardFront>
        <Icon name={variant === 'visa' ? 'visaLogo' : 'visaMaster'} />
        <CardNumber>
          <CardBaseLabel>{t('FORMS.CARD_NUMBER_LENGTH')}</CardBaseLabel>
          <CardNumberField
            type='text'
            name='card-number'
            className='form-control'
            maxLength={16}
            size={16}
            required
            {...cardNumberInputProps}
          />
        </CardNumber>
        <CardGroup>
          <CardBaseFieldset>
            <CardExpiryLabel htmlFor='expiry'>
              {t('FORMS.CARD.EXPIRY')}
            </CardExpiryLabel>
            <CardExpiryField
              type='text'
              name='expiry-month'
              className='form-control'
              maxLength={2}
              size={2}
              required
              {...expiryMonthInputProps}
            />
            <CardExpiryDivider>/</CardExpiryDivider>
            <CardExpiryField
              type='text'
              name='expiry-year'
              className='form-control'
              maxLength={2}
              size={2}
              required
              {...expiryYearInputProps}
            />
          </CardBaseFieldset>
          <CardOwner>
            <CardOwnerLabel htmlFor='cardholder-name'>
              {t('FORMS.CARD.CARDHOLDER')}
            </CardOwnerLabel>
            <CardOwnerField
              type='text'
              name='cardholder-name'
              className='form-control'
              required
              {...holderNameInputProps}
            />
          </CardOwner>
        </CardGroup>
      </CardFront>
      <CardBack>
        <CardMagniteLine />
        <CardCVV>
          <CardCVVField
            type='password'
            name='card-cvv'
            className='form-control'
            maxLength={3}
            size={3}
            required
            {...cvvInputProps}
          />
          <CardCVVLabel>{t('FORMS.CARD.CVV')}</CardCVVLabel>
        </CardCVV>
      </CardBack>
    </CardsBlock>
  );
};

export default memo(CreditCard);
