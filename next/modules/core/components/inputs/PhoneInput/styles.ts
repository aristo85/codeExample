import styled, {css} from 'styled-components';
import Image from 'next/image';
import InputSelect from '../Select';
import {getCountryCallingCode} from 'react-phone-number-input';

export const Label = styled.label`
  display: block;
  line-height: 23px;
  ${({theme}) => css`
    font-size: ${theme.font.size.subtitle2};
    color: ${theme.colors.default};
  `}
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

export const PhoneWithoutCodeContainer = styled.div`
  width: 100%;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  width: 100%;
  margin-top: -20px;
`;

export const FlagImg = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const CountrySelect = styled(InputSelect)<{from?: string}>`
  .selector {
    border: ${({from}) => (from === 'profile' ? '2px' : '3px')} solid
      ${props => props.theme.colors.secondary};
  }
  .selector:focus {
    border-color: ${props => props.theme.colors.primary};
  }
  max-width: ${props => {
    const length = props.value
      ? getCountryCallingCode(props.value as any).length
      : 1;
    return `${105 + length * 10}px`;
  }};
  .optionsMenu {
    top: 70%;
    width: fit-content;
    overflow-y: auto;
    max-height: 200px;
    ${props => props.theme.scrollbar.thinSecondary}
  }
`;

export const PhoneInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
