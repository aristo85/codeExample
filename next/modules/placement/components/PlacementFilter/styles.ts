import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import DateInput from '@/modules/core/components/datePickers/DateInput';
import InputSelect from '@/modules/core/components/inputs/Select';
import styled from 'styled-components';

export const FiltersNavbar = styled.div<{isBookingDetail?: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${({isBookingDetail}) => isBookingDetail && 'height: 100%;'}
`;

const submitBtnWidth = '200px';

export const FilterWrapper = styled.div<{isBookingDetail?: boolean}>`
  position: relative;
  padding: 16px;
  gap: 24px;
  max-width: 1180px;
  min-height: 158px;
  background: ${({theme}) => theme.colors.secondary};
  border-radius: 24px;
  min-width: 300px;
  ${({isBookingDetail}) => isBookingDetail && 'flex: 1;'}

  ${props => props.theme.media.down('lg')`
    width: 100%;
  `}
`;

export const FilterForm = styled.form<{isBookingDetail?: boolean}>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
  color: ${({theme}) => theme.colors.default};
  ${({isBookingDetail}) => isBookingDetail && 'height: 100%;'}
`;

export const FilterFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
`;

export const FilterDateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FilterDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  label {
    margin-bottom: 8px;
  }
`;

export const FilterTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
`;

export const FilterSelect = styled(InputSelect)`
  label {
    margin-bottom: 8px;
  }
  & .optionsMenu {
    max-height: 400px;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar-track {
      margin: 0 0 6px 0;
    }
  }
`;

export const FilterDateInput = styled(DateInput)`
  input {
    min-width: 180px;
    padding: 3px 0 0 16px;
  }
`;

export const FilterBTn = styled(ButtonBasic)<{isBookingDetail?: boolean}>`
  margin-top: auto;
  height: 56px !important;
  font-size: 18px;
  line-height: 24px;

  ${props => props.theme.media.down('md')`
    width: ${!props.isBookingDetail && submitBtnWidth};
    align-self: flex-start;
  `}
`;

export const DateCounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StepperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  gap: 16px;
  height: 95px;
  background: #ffffff;
  border: 3px solid #1d7abd;
  border-radius: 16px;
`;

export const DaysLabel = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
`;
