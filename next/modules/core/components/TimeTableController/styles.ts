import styled, {css} from 'styled-components';
import CloseBtnIcon from '../icons/CloseBtnIcon';
import DateInput from '../datePickers/DateInput';
import ButtonBasic from '../Buttons/ButtonBasic';
import CloseIcon from '../icons/CloseIcon';

export const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ScheduleRow = styled.div`
  display: flex;
  gap: 32px;
  border-bottom: 2px solid #c6e1f3;
  padding-bottom: 16px;
  margin-bottom: 8px;

  ${({theme}) => css`
    ${theme.media.down('md')`
      gap: 16px;
    `}
    ${theme.media.down('sm')`
      flex-direction: column;
      flex-wrap: none;
      gap: 16px;
    `}
  `}
`;

export const DeleteDateBtn = styled(CloseBtnIcon)`
  cursor: pointer;
`;

export const DateControllerWrapper = styled.div`
  width: fit-content;
  width: 292px;
  ${({theme}) => css`
    ${theme.media.down('md')`
      width: 210px;
    `}
    ${theme.media.down('smTab')`
      width: 160px;
    `}
  `}
`;

export const ScheduleDateInput = styled(DateInput)`
  &.MuiTextField-root {
    min-width: 100% !important;
    width: 100% !important;
  }
  input {
    padding: 3px 0 0 16px;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  gap: 32px;
  height: fit-content;
  align-items: center;
  position: relative;

  ${({theme}) => css`
    ${theme.media.down('sm')`
      flex-direction: column;
      align-items: baseline;
      width: 100%;
  `}
  `}
`;

export const TimesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-self: center;
  flex-wrap: wrap;

  ${({theme}) => css`
    ${theme.media.down('sm')`
      align-self: auto;
    `}
  `}
`;

export const TimesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  ${({theme}) => css`
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.semiBold};
  `}
`;

export const AddTimeBtn = styled.button`
  display: flex;
  gap: 8px;
  color: #1d7abd;
  cursor: pointer;
  border: none;
  background: #fff;
`;

export const TimeBtn = styled.button`
  display: flex;
  gap: 8px;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid var(--main-secondary, #8daec1);
  background: #fff;
  padding: 8px 8px 8px 12px;
  align-items: center;
  font-size: 16px;
  color: #45464f;
`;

export const TimeIcon = styled(CloseIcon)`
  color: red;
  svg {
    fill: red;
  }
`;

export const AddDateBtn = styled(ButtonBasic)`
  max-width: 213px;
  font-size: 16px;
  height: 34px;
  min-height: 34px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
  ${({theme}) => css`
    ${theme.media.down('sm')`
     position: absolute;
     flex-direction: row-reverse;
     right: 0;
     top: 20px;
    `}
  `}
`;

export const DuplicateBtn = styled(ButtonBasic)`
  font-size: 16px;
  height: 34px;
  min-height: 34px;
  width: fit-content;
  padding: 0 8px;
`;
