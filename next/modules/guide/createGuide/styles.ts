import styled, {css} from 'styled-components';
import InputStyled from '@/modules/core/components/inputs/InputStyled';
import InputSelect from '@/modules/core/components/inputs/Select';
import {FilterCheckbox} from '@/modules/home/components/Filters/MobileFilters/styles';
import DateInput from '@/modules/core/components/datePickers/DateInput';

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  margin-top: 32px;
`;

export const GuideWrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  ${({theme}) => css`
    ${theme.media.down('sm')`
     flex-direction: column;
    `}
  `}
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-self: stretch;
  ${({theme}) => css`
    ${theme.media.down('sm')`
    width: 100%;
    `}
  `};
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${({theme}) => css`
    ${theme.media.down('sm')`
    width: 100%;
    `}
  `};
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const GuideInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
  width: 100%;
`;

export const FormInput = styled(InputStyled)<{
  mobileh?: number;
  isStepOne?: boolean;
}>`
  flex-basis: 48.9%;

  ${({theme, mobileh, isStepOne}) => css`
    ${theme.media.down(isStepOne ? 'md' : 'lg')`
      flex-basis: 100%;
    `}
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

export const GuideContacts = styled.div`
  display: flex;
  gap: 32px;

  ${({theme}) => css`
    ${theme.media.down('md')`
     flex-direction: column;
    `}
  `}
`;

export const FormPhoneWrapper = styled.div`
  flex-basis: 48.9%;
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

export const FormSelector = styled(InputSelect)<{mobileh?: number}>`
  flex-basis: 48.9%;

  & .optionsMenu {
    max-height: 200px;
    overflow-y: scroll;
    ${props => props.theme.scrollbar.thinSecondary}
  }

  ${({theme, mobileh, error}) => css`
    .error {
      bottom: -18px;
    }
    ${({theme}) => css`
      ${theme.media.down('lg')`
      flex-basis: 100%;
    `}
    `}
    ${theme.media.down('sm')`
   .selector {
    height: ${mobileh ?? 48}px;
    padding-right: 20px;
  }
  `}
  `}
`;

export const WitchChildrenCheckbox = styled(FilterCheckbox)`
  position: absolute;
  top: 0;
  right: 0;

  ${({theme}) => css`
    ${theme.media.down('lg')`
      position: static;
      align-self: start;
    `}
  `}
`;

export const Step2InfoLbel = styled.p`
  color: #8daec1;
  font-size: 14px;
`;

export const InformationTxt = styled.p`
  color: #8daec1;
  font-size: 16px;
  line-height: 22px;

  span {
    color: #222121;
  }
`;

export const PhotoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${({theme}) => css`
    ${theme.media.down('sm')`
    flex-direction: column;
    `}
  `};
`;

export const BirthdateInput = styled(DateInput)`
  flex-grow: 1;
  min-width: 100% !important;
  margin-top: 3px;
  input {
    padding: 3px 0 0 16px;
  }
`;
