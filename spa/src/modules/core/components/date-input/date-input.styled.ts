import styled, { css } from 'styled-components';

export const Root = styled.div`
  width: 100%;
  padding-bottom: 17px;

  .MuiTextField-root {
    width: 100%;
  }

  .MuiInputBase-input {
    font-family: ${(props) => props.theme.font.family.main};
    font-size: ${(props) => props.theme.font.size.body2};
    font-weight: ${(props) => props.theme.font.weight.semiBold};
    padding-left: 9px;
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  }

  .MuiInput-underline:after {
    border-bottom-width: 0;
  }

  .MuiFormLabel-root {
    ${({ theme }) => css`
      font-family: ${theme.font.family.auxiliary};
      font-size: ${theme.font.size.subtitle2};
      font-weight: ${theme.font.weight.regular};
      color: ${theme.palette.common.lightGray};
    `}

    &.Mui-error {
      color: ${(props) => props.theme.palette.common.lightGray};
    }

    &.Mui-focused {
      color: ${(props) => props.theme.palette.common.lightGray};
    }
  }

  label + .MuiInput-formControl {
    margin-top: 15px;
  }

  .MuiFormHelperText-root {
    position: absolute;
    top: 100%;
    ${({ theme }) => css`
      font-family: ${theme.font.family.main};
      font-size: ${theme.font.size.body3};
      font-weight: ${theme.font.weight.regular};
    `}
  }

  .MuiInput-underline:before {
    border-bottom-color: ${(props) => props.theme.palette.common.lightGray};
  }
`;
