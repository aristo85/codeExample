import {PeopleSelectorContainer} from '@/modules/core/components/PeopleDropdown/styles';
import {PeopleHeaderSelector} from '@/modules/core/components/PeopleDropdown/components/Header';
import {FC, useRef, useState} from 'react';
import {DropdownMenu} from '@/modules/core/components/PeopleDropdown/components/DropdownMenu';
import {useOutsideClick} from '@/modules/core/hooks/useOutsideClick';

import {
  FieldArrayWithId,
  UseFormGetValues,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  FieldErrors,
  Control,
  UseFormSetValue,
  UseFormWatch,
  UseFormTrigger,
} from 'react-hook-form';
import {PlacementFilterValuesForm} from '@/modules/home/components/Filters';

interface PeopleSelectorProps {
  childAges: FieldArrayWithId<PlacementFilterValuesForm, 'childAges', 'id'>[];
  getValues: UseFormGetValues<PlacementFilterValuesForm>;
  appendChild: UseFieldArrayAppend<PlacementFilterValuesForm, 'childAges'>;
  removeChild: UseFieldArrayRemove;
  errors: FieldErrors<PlacementFilterValuesForm>;
  control: Control<PlacementFilterValuesForm, any>;
  setValue: UseFormSetValue<PlacementFilterValuesForm>;
  watch: UseFormWatch<PlacementFilterValuesForm>;
  trigger: UseFormTrigger<PlacementFilterValuesForm>;
  handleFormSubmit?: () => void;
  isBookingDetail?: boolean;
}

const PeopleSelector: FC<PeopleSelectorProps> = ({
  getValues,
  childAges,
  appendChild,
  removeChild,
  errors,
  control,
  setValue,
  watch,
  trigger,
  handleFormSubmit,
  isBookingDetail,
}) => {
  const [isOpenSelector, setIsOpenSelector] = useState<boolean>(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  const isChildAgesValid = watch('childAges')?.every(
    child => child.value !== null,
  );

  useOutsideClick({
    ref: selectorRef,
    handler: () => {
      if (isChildAgesValid) {
        setIsOpenSelector(false);
      }
    },
  });

  const submit = async () => {
    const isValidatedSuccessfully = await trigger('childAges');
    if (isValidatedSuccessfully) {
      setIsOpenSelector(false);
      !isBookingDetail && handleFormSubmit && handleFormSubmit();
    }
  };

  const DropDownComponent = (
    <DropdownMenu
      watch={watch}
      handleSubmit={submit}
      errors={errors}
      control={control}
      childAges={childAges}
      setValue={setValue}
      removeChild={removeChild}
      appendChild={appendChild}
      getValues={getValues}
    />
  );

  return (
    <PeopleSelectorContainer ref={selectorRef}>
      <PeopleHeaderSelector
        watch={watch}
        isOpenSelector={isOpenSelector}
        onClickHandler={() => {
          if (isOpenSelector && isChildAgesValid) {
            setIsOpenSelector(false);
          } else {
            setIsOpenSelector(true);
          }
        }}
      />
      {isOpenSelector && DropDownComponent}
    </PeopleSelectorContainer>
  );
};

export default PeopleSelector;
