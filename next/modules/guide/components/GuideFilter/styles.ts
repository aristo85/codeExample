import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import DateInput from '@/modules/core/components/datePickers/DateInput';
import InputSelect from '@/modules/core/components/inputs/Select';
import styled, {css} from 'styled-components';
import Checkbox from '@/modules/core/components/Checkbox';

export const GuideFilterWrapper = styled.div`
  position: relative;
  padding: 16px;
  gap: 24px;
  max-width: 1180px;
  min-height: 158px;
  background: ${({theme}) => theme.colors.secondary};
  border-radius: 24px;
  ${props => props.theme.media.down('lg')`
    width: 100%;
  `}
`;

export const GuideFilterForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  flex-direction: column;

  ${({theme}) => theme.media.down('sm')`
      width: 100%;
      flex-direction: column;
    `}
`;

export const GuideFilterSelect = styled(InputSelect)`
  & .optionsMenu {
    max-height: 400px;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar-track {
      margin: 0 0 6px 0;
    }
  }
`;

export const GuideFilterDateInput = styled(DateInput)`
  input {
    padding: 3px 0 0 16px;
  }
`;

export const GuideFilterButton = styled(ButtonBasic)`
  width: 100%;
  height: 63px;
  align-self: center;
`;

export const FilterCheckbox = styled(Checkbox)`
  .Mui-checked {
    background: #fff;
    border-radius: 0;
  }
  ${props =>
    props.value
      ? css`
          input {
            background: #fff;
          }
          svg {
            fill: ${props.theme.colors.primary};
            width: 28px;
            height: 28px;
          }
        `
      : css`
          svg {
            fill: #fff;
            background: white;
            width: 20px;
            height: 20px;
            border-radius: 4px;
          }
        `}
`;
