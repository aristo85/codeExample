import styled, { css } from 'styled-components';

export const Root = styled.div<{ isAbsolute: boolean }>`
  width: fit-content;
  height: fit-content;
  ${({ isAbsolute }) =>
    isAbsolute &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
`;
