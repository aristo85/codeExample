import InputStyled from '@/modules/core/components/inputs/InputStyled';
import InputSelect from '@/modules/core/components/inputs/Select';
import styled, {css} from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BodyContainer = styled.div`
  display: flex;
  gap: 52px;

  ${({theme}) => css`
    ${theme.media.down('md')`
      flex-direction: column;
      gap: 24px;
  `}
  `}
`;

export const MainContainer = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  width: 100%;

  ${({theme}) => css`
    ${theme.media.down('md')`
      gap: 0px;
  `}
  `}
`;

export const BookingFormAdditionalData = styled.div.attrs({
  className: 'infoBlock',
})`
  ${({theme}) => css`
    width: min-content;
    max-width: 328px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    ${theme.media.down('md')`
        max-width: 100%;
        flex-direction: row;
        width: 100%;
        gap: 24px;
      `}

    ${theme.media.down('sm')`
        flex-direction: column;
        gap: 24px;
      `}
  `}
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  margin-top: 32px;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: start;
`;

export const ChosenDate = styled.p`
  color: #222121;
  font-size: 16px;
  line-height: 22px;
  span {
    color: #27ae60;
  }
`;

export const FormSelector = styled(InputSelect)<{mobileh?: number}>`
  width: 288px;
  .optionsMenu {
    overflow: inherit;
  }

  ${({theme, mobileh, error}) => css`
    ${theme.media.down('sm')`
     .selector {
      height: ${mobileh ?? 48}px;
      padding-right: 20px;
    }
    `}
  `}
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Step2Row = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
  position: relative;

  ${({theme}) => css`
    ${theme.media.down('sm')`
     flex-direction: column;
    `}
  `}
`;

export const FormInput = styled(InputStyled)<{
  mobileh?: number;
  fullWidth?: boolean;
}>`
  ${({theme, mobileh, fullWidth}) => css`
    flex-basis: ${fullWidth ? '100%' : '48%'};
    ${theme.media.down('sm')`
      > div.inputwrapper {
      height: ${mobileh ?? 48}px;
    }
    input {
      margin-top: -${mobileh ? 0.4 * mobileh : 0}px;
    }
     input::placeholder {
      white-space: normal;
    }
    `}
  `}
`;

export const FormPhoneWrapper = styled.div`
  flex-basis: 48%;

  ${({theme}) => css`
    ${theme.media.down('sm')`
    width: 100%;
    `}
  `}
`;

export const MaximumTxt = styled.p`
  margin-top: -32px;
  color: #8daec1;
  font-size: 14px;
`;

export const Step3Section = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  ${({theme}) => css`
    ${theme.media.down('sm')`
     flex-direction: column;
    `}
  `}
`;

export const FieldWrapper = styled.div`
  min-width: 30%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FieldTitle = styled.p`
  color: #222121;
  font-size: 24px;
  white-space: nowrap;
`;

export const FieldTxt = styled.p`
  color: #4f4f4f;
  font-size: 20px;
`;

export const Divider = styled.div`
  height: 2px;
  background: #c6e1f3;
`;

export const CalendarFooterWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-top: 32px;

  ${({theme}) => css`
    ${theme.media.down('sm')`
     flex-direction: column;
    `}
  `}
`;
