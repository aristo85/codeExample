import styled, { css } from 'styled-components';

export const Root = styled.label`
  position: relative;
  display: block;
  width: 100%;
  padding-bottom: 17px;
`;

export const InputFieldWrapper = styled.div<{
  isError: boolean;
  isFocused: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid
    ${({ theme, isError }) =>
      isError ? 'red' : theme.palette.common.lightGray};
  overflow: hidden;
  transition: ${(props) => props.theme.transition.fast};

  &::after {
    content: '';
    position: absolute;
    top: calc(100% - 1px);
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.palette.common.primary};
    transform: scaleX(0);
    transition: ${(props) => props.theme.transition.fast};
  }

  ${(props) =>
    props.isFocused &&
    css`
      &::after {
        transform: scaleX(1);
      }
    `}
`;

export const InputField = styled.input`
  font-family: 'FuturaPT', sans-serif;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: ${(props) => props.theme.font.size.body2};
  font-weight: ${(props) => props.theme.font.weight.semiBold};
  padding-left: 9px;

  &:disabled {
    background-color: transparent;
    color: ${(props) => props.theme.palette.common.lightGray};
  }

  &::placeholder {
    color: ${(props) => props.theme.palette.common.lightGray};
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 3px;
  ${({ theme }) => css`
    font-family: ${theme.font.family.auxiliary};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.palette.common.lightGray};
  `}
`;

export const Adornment = styled.div<{ position: 'left' | 'right' }>`
  display: flex;

  ${(props) => props.position === 'left' && css``}

  ${(props) =>
    props.position === 'right' &&
    css`
      margin-left: 8px;
    `}
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  color: red;
  font-size: 14px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
