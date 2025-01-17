import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import DateInput from '@/modules/core/components/datePickers/DateInput';
import InputSelect from '@/modules/core/components/inputs/Select';
import styled, {css} from 'styled-components';
import Checkbox from '@/modules/core/components/Checkbox';

export const FilterWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FilterSelect = styled(InputSelect)``;

export const FilterDateWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const FilterDateInput = styled(DateInput)`
  input {
    padding: 3px 0 0 16px;
  }
`;

export const FilterBTn = styled(ButtonBasic)`
  height: 56px;
  font-size: 20px;
`;

export const FilterCheckbox = styled(Checkbox)`
  ${props =>
    props.value
      ? css`
          svg {
            fill: ${props.theme.colors.primary};
          }
        `
      : css`
          svg {
            fill: ${props.theme.colors.secondary};
          }
        `}
  border-radius: 4px;
`;
