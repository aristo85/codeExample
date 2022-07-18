import styled, { css } from 'styled-components';
import type { BorderRadius, Color } from 'styles/theme.types';
import type { ButtonVariant } from './button.interface';

export const Root = styled.button<{
  borderRadius?: BorderRadius;
  backgroundColor?: Color;
  variant: ButtonVariant;
  isLoading?: boolean;
}>`
  position: relative;
  width: 180px;
  height: 45px;
  overflow: hidden;
  transition: background ${({ theme }) => theme.transition.middle};
  outline: 0;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.btn.hoverBackground};
  }

  ${(props) => {
    switch (props.variant) {
      case 'text':
        return css`
          width: auto;
          height: fit-content;
          margin: 0;
          padding: 0;
          border: 0;
          background-color: transparent;
          border-radius: 0;
          border-bottom: 1px solid
            ${({ theme }) => theme.palette.common.primary};
          color: ${({ theme }) => theme.palette.common.primary};
          font-family: ${({ theme }) => theme.font.family.main};
          font-weight: ${({ theme }) => theme.font.weight.regular};
          font-size: ${({ theme }) => theme.font.size.body3};

          &:hover {
            background-color: transparent;
          }
        `;
      case 'contained':
        return css`
          position: relative;
          border-color: transparent;
          background-color: ${({ theme }) => theme.palette.common.primary};
          border-radius: ${({ theme }) => theme.shape.borderRadius.small};
          transition: ${({ theme }) => theme.transition.fast};
          color: ${({ theme }) => theme.palette.btn.textColor};
          font-family: ${({ theme }) => theme.font.family.auxiliary};
          font-weight: ${({ theme }) => theme.font.weight.bold};
        `;
      default:
        return css``;
    }
  }}

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${({ theme }) => theme.palette.common.lightGray};

      &:hover {
        background-color: ${({ theme }) => theme.palette.common.lightGray};
      }
    `}
  ${(props) =>
    props.isLoading &&
    css`
      background-color: ${({ theme }) => theme.palette.common.lightGray};
    `}
`;
