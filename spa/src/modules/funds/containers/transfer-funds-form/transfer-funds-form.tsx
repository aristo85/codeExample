import { FC, useMemo, useEffect, useState } from 'react';
import { useForm, Controller, useFormState } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// components
import Input from 'modules/core/components/input';
import InputNumber from 'modules/core/components/input-number';
import Select from 'modules/core/components/select/select';
// hooks
import { useWalletListQuery } from 'modules/wallet/hooks/use-wallet-list-query';
// import { useFormPersist } from 'modules/core/hooks/use-form-persist';
import { useLocalization } from 'modules/localization/hooks/use-localization';
import { useHistory, useLocation } from 'react-router';
// services
import { defaultCountWalletsPerPage } from 'modules/core/services/pagination.service';
// types
import type { SelectOption } from 'modules/core/components/select/select.interface';
import {
  TransferFundsFormProps,
  TransferFundsFormValues,
} from './transfer-funds-form.interface';
import {
  Root,
  Content,
  Form,
  FormRow,
  Info,
  FormSubmit,
  InfoTitle,
  InfoBlock,
  InfoBlockText,
  InfoBlockTitle,
} from './transfer-funds-form.styled';
import { useCommissionQuery } from 'modules/funds/hooks/use-commission-query';
import { setTimer } from 'modules/funds/services/funds-timer.service';
import { useDebounce } from 'modules/core/hooks/use-debounce';
import { AmountDescription } from '../add-funds-fiat-form/add-funds-fiat-form.styled';

const TransferFundsForm: FC<TransferFundsFormProps> = ({ onSubmit }) => {
  const { t } = useLocalization();
  const params = useLocation();
  const urlState: any = params.state;
  const history = useHistory();

  // const [minCommission, setminCommission] = useState(0);
  const [maxValueActiveWalet, setmaxValueActiveWalet] = useState(0);

  const bounceDelay = 500;
  const numberFixed = 8;

  // queries
  const walletList = useWalletListQuery({
    page: 1,
    per_page: defaultCountWalletsPerPage,
  });

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      email: yup
        .string()
        .email(t('FORM.VALIDATION.REQUIRED_EMAIL'))
        .required(t('FORM.VALIDATION.INVALID_EMAIL')),
      wallet: yup.string().required(t('FORM.VALIDATION.REQUIRED_WALLET')),
      amount: yup.number().required(t('FORM.VALIDATION.REQUIRED_AMOUNT')),
      total: yup.number().max(maxValueActiveWalet, `${t('FORMS.MAX_LIMIT')}`),
    });
  }, [maxValueActiveWalet]);
  // form
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    // clearErrors,
  } = useForm<TransferFundsFormValues>({
    defaultValues: {
      // value: '',
      wallet: urlState?.clickedFrom ?? null,
      email: '',
      amount: 0,
      description: '',
      fee: 0,
      total: 0,
    },
    resolver: yupResolver(validationSchema),
  });
  const formValues = watch();

  console.log(formValues.wallet);

  const { errors } = useFormState({ control });

  const debounceAmount = useDebounce(formValues.amount, bounceDelay);

  const commissionQuery = useCommissionQuery({
    currency: formValues.wallet,
    amount: `${formValues.amount}`,
    direction: 'out',
    transaction_type: 'Transfer',
  });

  // memo
  const walletSelectOptions = useMemo<SelectOption[]>(() => {
    if (!walletList.data?.list) {
      return [];
    }

    return walletList.data.list.map((wallet) => ({
      value: wallet.currency,
      title: wallet.currency,
    }));
  }, [walletList]);

  const activeWallet = useMemo(() => {
    const activeW = walletList.data?.list?.find(
      (wallet) => wallet.currency === formValues.wallet
    );

    return activeW;
  }, [walletList, formValues.wallet]);

  useEffect(() => {
    if (formValues.amount && formValues.wallet) {
      commissionQuery.refetch().then((res) => {
        const commission = +res.data?.commission ?? 0;

        setValue('fee', +commission.toFixed(numberFixed));
      });
    }
  }, [debounceAmount, formValues.wallet]);

  useEffect(() => {
    debounceAmount &&
      // commissionQuery?.data?.commission &&
      // formValues?.fee &&
      setValue(
        'total',
        +(+formValues?.amount + formValues.fee ?? 0).toFixed(numberFixed) ?? 0
      );
  }, [debounceAmount, activeWallet, formValues.fee]);

  // screen life
  useEffect(() => {
    const resetTime = 60000;
    const timer = setTimer(resetTime, history);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    activeWallet?.amount && setmaxValueActiveWalet(+activeWallet.amount);
  }, [activeWallet]);

  return (
    <Root>
      <Content>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <Controller
              control={control}
              render={({ field }) => (
                <Select
                  label={t('FORMS.TRANSFER.CHOOSE_CURRENCY')}
                  options={walletSelectOptions}
                  {...field}
                />
              )}
              name='wallet'
            />
          </FormRow>
          <FormRow>
            <Input
              label={t('FORMS.EMAIL')}
              error={errors?.email?.message}
              {...register('email')}
            />
          </FormRow>
          {/* <FormRow>
            <Input
              label={t('FORMS.TRANSFER.INVOICE')}
              value='1234567890-0987654321'
              disabled
              {...register('invoice_number')}
            />
          </FormRow> */}
          <FormRow>
            <InputNumber
              label={t('FORMS.AMOUNT')}
              disabled={formValues.wallet === null}
              error={errors?.amount?.message}
              {...register('amount')}
            />
          </FormRow>
          <FormRow>
            <Input
              label={t('MODALS.BALANCE.LBL.DESCRIPTION')}
              placeholder={t('MODALS.BALANCE.PLH.DESCRIPTION')}
              {...register('description')}
            />
          </FormRow>

          <Input
            name=''
            label={t('MODALS.BALANCE.FEE')}
            disabled
            endAdornment={
              <AmountDescription>{activeWallet?.currency}</AmountDescription>
            }
            value={formValues.fee}
          />

          <Input
            name=''
            label={t('MODALS.BALANCE.TOTAL')}
            disabled
            endAdornment={
              <AmountDescription>{activeWallet?.currency}</AmountDescription>
            }
            value={formValues.total}
            error={errors?.total?.message}
          />

          <FormSubmit
            text={t('FORM.BTN.COUNT')}
            type='submit'
            isLoading={commissionQuery.isLoading}
          />
        </Form>
        <Info>
          {activeWallet && (
            <InfoTitle>
              {t('FORMS.TRANSFER_CONFIRM_TO')} {activeWallet.currency}{' '}
              {t('MODALS.BALANCE.FROM.MY_WALLET')}
            </InfoTitle>
          )}
          <InfoBlock>
            {/* <InfoBlockTitle>${0.02}</InfoBlockTitle> */}
            <InfoBlockText>{t('FORMS.MIN_PER_ONE')}</InfoBlockText>
          </InfoBlock>
          <InfoBlock>
            <InfoBlockTitle>{t('FORMS.TERM')}</InfoBlockTitle>
            <InfoBlockText>{t('FORMS.TERM.EXECUT')}</InfoBlockText>
          </InfoBlock>
          <InfoBlock>
            <InfoBlockTitle>
              {t('FORMS.TRANSFER.INVOICE_DESCRIPTION')}
            </InfoBlockTitle>
            <InfoBlockText>
              {t('FORMS.TRANSFER.INVOICE_DESCRIPTION_TEXT')}
            </InfoBlockText>
          </InfoBlock>
        </Info>
      </Content>
    </Root>
  );
};

export default TransferFundsForm;
