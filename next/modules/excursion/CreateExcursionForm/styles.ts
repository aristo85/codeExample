import styled, {css} from 'styled-components';
import {FilterCheckbox} from '@/modules/home/components/Filters/MobileFilters/styles';
import InputStyled from '@/modules/core/components/inputs/InputStyled';
import InputSelect from '@/modules/core/components/inputs/Select';

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  margin-top: 32px;
`;

export const MapTipTitle = styled.h3`
  color: #1d7abd;
`;
export const ExcursionTextBlock = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormInput = styled(InputStyled)<{mobileh?: number}>`
  padding-bottom: 5px;
  flex-basis: 49%;

  ${({theme, mobileh}) => css`
    ${theme.media.down('sm')`
      > div.inputwrapper {
      height: ${mobileh ?? 48}px;
    }
     input {
      padding-bottom: ${mobileh ? 0.4 * mobileh : '10'}px;
    }
     input::placeholder {
      white-space: normal;
    }
    `}
  `}
`;

export const FormPhoneWrapper = styled.div`
  flex-basis: 49%;
`;

export const GuideWrapper = styled.div`
  display: flex;
  gap: 32px;

  ${({theme}) => css`
    ${theme.media.down('sm')`
     flex-direction: column;
    `}
  `}
`;

export const GuideInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
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

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #8daec1;
`;

export const FormSelector = styled(InputSelect)<{mobileh?: number}>`
  flex-basis: 49%;

  & .optionsMenu {
    max-height: 200px;
    overflow-y: scroll;
    ${props => props.theme.scrollbar.thinSecondary}
  }

  ${({theme, mobileh, error}) => css`
    .error {
      bottom: -18px;
    }

    ${theme.media.down('sm')`
   .selector {
    height: ${mobileh ?? 48}px;
    padding-right: 20px;
  }
  `}
  `}
`;

export const MultiplyWrapper = styled.div`
  display: block;
  position: relative;
  flex-basis: 49%;
  width: 100%;

  ${({theme}) => css`
    ${theme.media.down('md')`
     display: flex;
     flex-direction: column;
    `}
  `}
`;

export const Step2Row = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;

  ${({theme}) => css`
    ${theme.media.down('lg')`
     flex-direction: column;
    `}
  `}
`;

export const ExcursionTypesSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;
`;

export const RegistrationClose = styled.div`
  display: flex;
  gap: 9px;
  flex-direction: column;

  ${({theme}) => css`
    ${theme.media.down('md')`
      gap: 9px;
  `}
  `}
`;

export const RegistrationCloseLabel = styled.h3`
  font-size: 20px;
  font-weight: 400;
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    ${theme.media.down('lg')`
    `}
  `}
`;

export const Step2InfoLabel = styled.p`
  color: #8daec1;
  font-size: 14px;
`;

export const WitchChildrenCheckbox = styled(FilterCheckbox)`
  position: absolute;
  top: 0;
  right: 0;

  ${({theme}) => css`
    ${theme.media.down('md')`
      position: static;
      align-self: start;
    `}
  `}
`;
export const Checkbox = styled(FilterCheckbox)`
  ${({theme}) => css`
    .checkboxLabel {
      color: #222121;
      font-family: ${theme.font.family.gothicBook};
      font-size: 16px;
    }
    ${theme.media.down('sm')`
      align-items: flex-start;
      svg {
        margin-top: 10px;
      }
    `}
  `}
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;

  ${({theme}) => css`
    ${theme.media.down('sm')`
    
    `}
  `}
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
  gap: 16px;

  ${({theme}) => css`
    ${theme.media.down('sm')`
    flex-direction: column;
    `}
  `};
`;

export const ImageWrapper = styled.div`
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

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
