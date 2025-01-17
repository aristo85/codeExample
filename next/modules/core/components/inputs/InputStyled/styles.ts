import styled, {css} from 'styled-components';

export const Root = styled.label<{isDisabled: boolean}>`
  position: relative;
  display: block;
  width: 100%;
  padding-bottom: 17px;
  opacity: ${props => (props.isDisabled ? 0.3 : 1)};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  line-height: 23px;
  ${({theme}) => css`
    font-size: ${theme.font.size.subtitle2};
    color: ${theme.colors.default};
  `}
`;

export const InputFieldWrapper = styled.div<{
  isError: boolean;
  isFocused: boolean;
  isFilled: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid ${({theme, isError}) => (isError ? 'red' : 'grey')};
  overflow: hidden;
  transition: ${props => props.theme.transition.fast};

  height: 48px;
  background: #ffffff !important;
  border: 3px solid
    ${({theme, isError, isFilled}) =>
      isFilled && !isError
        ? theme.colors.primary
        : isError
        ? 'red'
        : theme.colors.secondary};
  border-radius: 16px;

  &::after {
    content: '';
    position: absolute;
    top: calc(100% - 1px);
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transition: ${props => props.theme.transition.fast};
  }

  ${props =>
    props.isFocused &&
    css`
      &::after {
        transform: scaleX(1);
      }
    `}
`;

export const Adornment = styled.div<{
  position: 'left' | 'right';
  isPassword?: boolean;
}>`
  display: flex;

  ${props =>
    props.position === 'left' &&
    css`
      margin-left: 17px;
    `}

  ${props =>
    props.position === 'right' &&
    css`
      margin-left: 8px;
    `}

  ${props =>
    props.isPassword &&
    css`
      cursor: pointer;
    `}
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: ${props => props.theme.font.size.body2};
  font-weight: ${props => props.theme.font.weight.semiBold};
  padding-left: 17px;
  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }

  &:disabled {
    background-color: ${props => props.theme.colors.lightDefault};
    color: ${props => props.theme.colors.default};
  }

  &::placeholder {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  left: 0;
  color: red;
  font-size: 14px;
  width: 100%;
  white-space: break-spaces;

  ${({theme}) => theme.media.down('xs')`
    position: relative;
  `}
`;
