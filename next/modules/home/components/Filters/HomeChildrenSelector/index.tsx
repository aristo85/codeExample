import React, {FC, useState} from 'react';
import {StylizationProps} from '@/modules/core/types';
import {
  ChildAgesContainer,
  ChildAgesSelect,
  DropdownMenuContainer,
  HomeChildrenNumberInputButton,
  HomeChildrenNumberInputButtonWrapper,
  HomeChildrenNumberInputContainer,
  HomeChildrenNumberInputValue,
  HomeChildrenNumberInputWrapper,
  HomeChildrenSelectorWrapper,
} from './styles';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import {
  Control,
  Controller,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
} from 'react-hook-form';
import ArrowSelectUp from '@/modules/core/components/icons/ArrowSelectUp';
import MobileFilterCounter from '@/modules/core/components/MobileFilterCounter';
import {childAgeOptions} from '@/modules/core/components/PeopleDropdown/constants';
import {PlacementFilterValuesForm} from '@/modules/home/components/Filters';

type Props = {
  value: {value: string | null}[];
  setValue: UseFormSetValue<PlacementFilterValuesForm>;
  control: Control<PlacementFilterValuesForm, any>;
  watch: UseFormWatch<PlacementFilterValuesForm>;
  trigger: UseFormTrigger<PlacementFilterValuesForm>;
  appendChild: UseFieldArrayAppend<PlacementFilterValuesForm, 'childAges'>;
  removeChild: UseFieldArrayRemove;
  errors: FieldErrors<PlacementFilterValuesForm>;
  isMobile: boolean;
} & StylizationProps;

const HomeChildrenSelector: FC<Props> = ({
  value,
  setValue,
  control,
  watch,
  trigger,
  errors,
  appendChild,
  removeChild,
  className,
  isMobile,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const children = watch('childAges');

  const removeChildHandler = () => {
    removeChild(value?.length - 1);

    if (value?.length - 1 > 0) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  const submit = () => {
    setValue('childAges', children);
    void trigger('childAges');

    if (children.every(item => item.value !== null)) {
      setIsModalOpen(false);
    }
  };

  const childAgesNodes = value?.map((currentValue, index) => {
    if (isMobile)
      return (
        <Controller
          key={`${currentValue.value}-${index}`}
          name={`childAges.${index}.value`}
          control={control}
          render={({field}) => {
            return (
              <MobileFilterCounter
                key={`${currentValue.value}-${index}`}
                onAddButtonClick={() => {
                  if (Number(field.value) < childAgeOptions.length - 1)
                    field.onChange(Number(field.value) + 1);
                }}
                onDecreaseButtonClick={() => {
                  if (Number(field.value) > 0)
                    field.onChange(Number(field.value) - 1);
                }}
                longCounter={true}
                counter={
                  <>{`${
                    field.value !== null ? field.value : '0'
                  } ${pluralizationFn(Number(field.value), [
                    'год',
                    'года',
                    'лет',
                  ])}`}</>
                }
                minValue={0}
              />
            );
          }}
        />
      );

    return (
      <Controller
        key={`${currentValue.value}-${index}`}
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
    );
  });

  const onAddButtonClick = () => {
    const value = isMobile ? '0' : null;
    appendChild({value});
    setIsModalOpen(true);
  };

  if (isMobile) {
    return (
      <div style={{position: 'relative', width: '100%'}}>
        <MobileFilterCounter
          onAddButtonClick={onAddButtonClick}
          onDecreaseButtonClick={removeChildHandler}
          counter={value?.length}
          label={'Кол-во детей'}
        />
        {isModalOpen && (
          <DropdownMenuContainer isMobile={false} isHomePage={true}>
            <ChildAgesContainer>{childAgesNodes}</ChildAgesContainer>
            <ButtonBasic dark onClick={submit} type="button">
              Готово
            </ButtonBasic>
          </DropdownMenuContainer>
        )}
      </div>
    );
  }

  return (
    <HomeChildrenSelectorWrapper className={className}>
      <HomeChildrenNumberInputWrapper className={className}>
        <HomeChildrenNumberInputContainer>
          <HomeChildrenNumberInputButtonWrapper>
            <HomeChildrenNumberInputButton
              type="button"
              onClick={onAddButtonClick}>
              <ArrowSelectUp style={{rotate: '180deg'}} />
            </HomeChildrenNumberInputButton>
            <HomeChildrenNumberInputButton
              type="button"
              onClick={removeChildHandler}
              disabled={value?.length < 1}>
              <ArrowSelectUp />
            </HomeChildrenNumberInputButton>
          </HomeChildrenNumberInputButtonWrapper>

          <HomeChildrenNumberInputValue>
            {value?.length}
          </HomeChildrenNumberInputValue>
        </HomeChildrenNumberInputContainer>

        <HomeChildrenNumberInputValue>
          {pluralizationFn(value?.length, ['ребенок', 'ребенка', 'детей'])}
        </HomeChildrenNumberInputValue>
      </HomeChildrenNumberInputWrapper>

      {isModalOpen && (
        <DropdownMenuContainer isMobile={false}>
          <ChildAgesContainer>{childAgesNodes}</ChildAgesContainer>
          <ButtonBasic dark onClick={submit} type="button">
            Готово
          </ButtonBasic>
        </DropdownMenuContainer>
      )}
    </HomeChildrenSelectorWrapper>
  );
};

export default HomeChildrenSelector;
