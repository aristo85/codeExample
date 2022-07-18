import styled, { css } from 'styled-components';
// types
import type { Elevation } from 'styles/theme.types';

export const Root = styled.div<{
  border: boolean;
  elevation: Elevation;
}>`
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;

  ${({ border }) =>
    border &&
    css`
      border: 1px solid #ebebeb;
    `}

  ${({ elevation, theme }) => theme.elevation[elevation]}
`;
