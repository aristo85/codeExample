import React, {FC} from 'react';
import {
  ChildAgesContainer,
  ChildAgesSelect,
  CounterBlock,
  CounterButton,
  CounterContainer,
  CounterField,
  CounterNumber,
  CountersBlock,
  DropdownMenuContainer,
} from '@/modules/core/components/PeopleDropdown/components/DropdownMenu/styles';
import MinusIcon from '@/modules/core/components/icons/MinusIcon';
import PlusIcon from '@/modules/core/components/icons/PlusIcon';
import {
  Control,
  Controller,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormGetValues,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import {childAgeOptions} from '@/modules/core/components/PeopleDropdown/constants';
import {PlacementFilterValuesForm} from '@/modules/home/components/Filters';

export interface DropdownMenuProps {
  childAges: {value: string | null}[];
  handleSubmit: () => void;
  getValues: UseFormGetValues<PlacementFilterValuesForm>;
  appendChild: UseFieldArrayAppend<PlacementFilterValuesForm, 'childAges'>;
  removeChild: UseFieldArrayRemove;
  errors: FieldErrors<PlacementFilterValuesForm>;
  control: Control<PlacementFilterValuesForm, any>;
  setValue: UseFormSetValue<PlacementFilterValuesForm>;
  watch: UseFormWatch<PlacementFilterValuesForm>;
}
export const DropdownMenu: FC<DropdownMenuProps> = ({
  childAges,
  control,
  errors,
  handleSubmit,
  getValues,
  appendChild,
  removeChild,
  setValue,
  watch,
}) => {
  const isMobile = useMatchMedia(`(max-width: ${breakpoints.xs}px)`);
  const childAgesNodes = childAges.map((_, index) => (
    <Controller
      key={index}
      name={`childAges.${index}.value`}
      control={control}
      render={({field}) => {
        return (
          <ChildAgesSelect
            options={childAgeOptions}
            value={field.value}
            onChange={value => {
              field.onChange(value);
            }}
            error={errors?.childAges?.[index]?.value?.message}
            placeholder="Возраст"
          />
        );
      }}
    />
  ));

  return (
    <DropdownMenuContainer isMobile={isMobile}>
      <CountersBlock>
        <CounterContainer>
          <CounterField>Взрослые</CounterField>
          <CounterBlock>
            <CounterButton
              type="button"
              onClick={() =>
                setValue('numOfAdult', getValues('numOfAdult') - 1)
              }
              disabled={watch('numOfAdult') < 2}>
              <MinusIcon />
            </CounterButton>
            <CounterNumber>{watch('numOfAdult')}</CounterNumber>
            <CounterButton
              type="button"
              onClick={() =>
                setValue('numOfAdult', getValues('numOfAdult') + 1)
              }>
              <PlusIcon />
            </CounterButton>
          </CounterBlock>
        </CounterContainer>
        <CounterContainer>
          <CounterField>Дети</CounterField>
          <CounterBlock>
            <CounterButton
              type="button"
              disabled={childAges.length === 0}
              onClick={() => removeChild(childAges.length - 1)}>
              <MinusIcon />
            </CounterButton>
            <CounterNumber>{childAges.length}</CounterNumber>
            <CounterButton
              type="button"
              onClick={() => appendChild({value: null})}>
              <PlusIcon />
            </CounterButton>
          </CounterBlock>
        </CounterContainer>
      </CountersBlock>
      <ChildAgesContainer>{childAgesNodes}</ChildAgesContainer>
      <ButtonBasic dark onClick={handleSubmit} type="button">
        Готово
      </ButtonBasic>
    </DropdownMenuContainer>
  );
};
