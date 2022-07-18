import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
// components
import Input from 'modules/core/components/input';
import Button from 'modules/core/components/button';
import DateInput from 'modules/core/components/date-input';
import Select from 'modules/core/components/select';
// types
import type { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import type { SelectOption } from 'modules/core/components/select/select.interface';
// hooks
import { useTransactionTypesListQuery } from 'modules/transaction/hooks/use-transaction-types-list-query';
import { useLocalization } from 'modules/localization/hooks/use-localization';

import type { TransactionsListFilterProps } from './transactions-list-filter.interface';
import { Root, FilterFields, Actions } from './transactions-list-filter.styled';

const TransactionsListFilter: FC<TransactionsListFilterProps> = ({
  isOpen,
  onApply,
}) => {
  const { t } = useLocalization();
  // state
  const [operationId, setOperationId] = useState('');
  const [fromDate, setFromDate] = useState<MaterialUiPickersDate>(null);
  const [toDate, setToDate] = useState<MaterialUiPickersDate>(null);
  const [type, setType] = useState<null | string>(null);
  const [status, setStatus] = useState<null | string>(null);
  // queries
  const transactionTypes = useTransactionTypesListQuery();
  // memo
  const transactionTypeOptions = useMemo<SelectOption[]>(
    () =>
      transactionTypes.data?.types.map((transactionType) => ({
        value: transactionType,
        title: transactionType,
      })) ?? [],
    [transactionTypes.data]
  );

  const statusOptions = [
    { value: 'approved', title: 'Approved' },
    { value: 'pending', title: 'Pending' },
    { value: 'init', title: 'Init' },
    { value: 'declined', title: 'Declined' },
  ];

  const resetFilter = () => {
    setOperationId('');
    setFromDate(null);
    setToDate(null);
    setType(null);
    setStatus(null);
  };

  useEffect(() => {
    if (!isOpen) {
      resetFilter();
    }
  }, [isOpen]);

  const handleOperationIdChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setOperationId(e.target.value);
    },
    []
  );

  const handleApply = useCallback(() => {
    onApply({
      from: fromDate,
      to: toDate,
      type,
      operationId,
      status,
    });
  }, [onApply, fromDate, toDate, operationId, type, status]);

  if (!isOpen) {
    return null;
  }

  return (
    <Root>
      <FilterFields>
        <Input
          name='id'
          label={t('FILTER.OPERATION_ID')}
          value={operationId}
          onChange={handleOperationIdChange}
        />
        <DateInput
          value={fromDate}
          onChange={setFromDate}
          label={t('FILTER.OPERATION_FROM')}
          format='dd.MM.yyyy'
        />
        <DateInput
          value={toDate}
          onChange={setToDate}
          label={t('FILTER.OPERATION_TILL')}
          format='dd.MM.yyyy'
        />
        <Select
          label={t('FILTER.OPERATION_TYPE')}
          value={type}
          onChange={setType}
          options={transactionTypeOptions}
        />
        <Select
          label={t('FILTER.OPERATION_STATUS')}
          value={status}
          onChange={setStatus}
          options={statusOptions}
        />
      </FilterFields>
      <Actions>
        <Button text={t('FILTER.APPLY')} onClick={handleApply} />
        <br />
        <br />
        <Button text={t('FILTER.RESET')} onClick={resetFilter} />
      </Actions>
    </Root>
  );
};

export default TransactionsListFilter;
