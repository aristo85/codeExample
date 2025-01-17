import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import {FormControlLabel} from '@mui/material';
import styled, {css} from 'styled-components';

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 24px;
  grid-row-gap: 8px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #8daec1;
    border-radius: 10px;
    height: 50px !important;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ${({theme}) => theme.media.down('lg')`
    display: flex;
    flex-direction: column;
  `}
`;

export const PayFullAmountButton = styled(ButtonBasic)`
  width: auto;
  white-space: nowrap;
  font-size: 24px;
`;

export const PayPartialAmountButton = styled(ButtonBasic)`
  width: auto;
  white-space: nowrap;
  font-size: 24px;
`;

export const TextAreaContainer = styled.div`
  grid-column: 1 / 3;
`;

export const FormLine = styled.span`
  grid-column: 1 / 3;
  height: 2px;
  background: #c6e1f3;
  width: 100%;
  margin-top: 6px;
  margin-bottom: 20px;
`;

export const FormButtonsBlock = styled.div`
  grid-column: 1 / 3;
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-end;
`;

export const BookingFormTitle = styled.h2`
  grid-column: 1 / 3;
  width: 100%;
  height: 30px;
  margin-bottom: 16px;
  ${({theme}) => css`
    font-size: ${theme.font.size.subtitle1};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.default};
  `}
`;

export const BookingGuestContainer = styled.div`
  grid-column: 1 / 3;
`;

export const BookingGuestTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

export const InputFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 24px;
  ${({theme}) => theme.media.down('lg')`
    flex-direction: column;
    gap: 0;
  `}
`;

export const RadioWrapper = styled.div`
  margin-bottom: 24px;
`;

export const SwitcherGuestControlLabel = styled(FormControlLabel)``;

export const SwitcherGuestLabel = styled.span`
  font-family: ${({theme}) => theme.font.family.gothicMedium};
  font-size: ${({theme}) => theme.font.size.subtitle2};
  color: ${({theme}) => theme.colors.default};
`;
