import styled, { css } from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast-container {
    width: 230px;
    right: 40px;
  }
  .Toastify__toast {
    flex: 0 1 100%;
    padding: 7px 14px 7px 11px;
    margin-bottom: 25px;
    overflow: visible;
    background: #f4f6f9;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    line-height: 18px;
    word-wrap: break-word;

    ${(props) => props.theme.media.down('sm')`
      margin: 20px;
    `}

    ${({ theme }) => css`
      border-radius: ${theme.shape.borderRadius.medium};
      font-family: ${theme.font.family.auxiliary};
      font-size: ${theme.font.size.auxiliary1};
    `}
  }
  .Toastify__toast--error {
    border: 1px solid red;
    .Toastify__toast-body {
      ${({ theme }) => css`
        color: ${theme.palette.common.black};
        border-color: ${theme.palette.common.red};
      `}
    }
    .Toastify__progress-bar {
      ${({ theme }) => css`
        background: ${theme.palette.common.red};
      `}
    }

    .Toastify__close-button {
      ${({ theme }) => css`
        background: ${theme.palette.common.red};
      `}
    }
  }
  .Toastify__toast-body {
    max-width: 100%;
    padding: 0;
    ${({ theme }) => css`
      color: ${theme.palette.common.black};
    `}
  }
  .Toastify__progress-bar--default {
    ${({ theme }) => css`
      background: ${theme.palette.common.primary};
    `}
  }
  .Toastify__close-button {
    position: absolute;
    right: -10px;
    top: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 21px;
    height: 21px;
    opacity: 1;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    ${({ theme }) => css`
      border-radius: ${theme.shape.borderRadius.circle};
      background: ${theme.palette.common.primary};
      color: ${theme.palette.common.white};
    `}
    svg {
      width: 10px;
      height: 10px;
    }
  }
`;
