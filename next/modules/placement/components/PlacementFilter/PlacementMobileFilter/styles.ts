import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import DateInput from '@/modules/core/components/datePickers/DateInput';
import InputSelect from '@/modules/core/components/inputs/Select';
import styled, {css} from 'styled-components';
import Checkbox from '@/modules/core/components/Checkbox';

export const FilterWrapper = styled.div`
  background: white;
  display: block;
  z-index: 1;
  width: 100%;
  padding: 24px 0 24px 0;
  margin-right: 16px;
`;

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FilterSelect = styled(InputSelect)`
  & .optionsMenu {
    max-height: 400px;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar-track {
      margin: 0 0 6px 0;
    }
  }
`;

export const FilterDateWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const FilterDateInput = styled(DateInput)`
  input {
    min-width: 180px;
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
