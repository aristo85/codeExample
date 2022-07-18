import styled, { css } from 'styled-components';
import type { BorderRadius } from 'styles/theme.types';

import type { IconButtonSize } from './icon-button.interface';

export const Root = styled.button<{
  size: IconButtonSize;
  borderRadius: BorderRadius;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: #f4f6f9;
  border: 1px solid #ebebeb;
  border-radius: ${({ theme, borderRadius }) =>
    theme.shape.borderRadius[borderRadius]};

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          width: 20px;
          height: 20px;
        `;
      default:
        return css``;
    }
  }}
`;
