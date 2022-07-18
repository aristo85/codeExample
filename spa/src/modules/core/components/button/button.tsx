import { FC, memo, useRef } from 'react';
// components
import { Root } from './button.styled';
import Spinner from 'modules/core/components/spinner';
// hooks
import { useRippleEffect } from 'modules/core/hooks/use-ripple-effect';

import type { ButtonProps } from './button.interface';

const Button: FC<ButtonProps> = ({
  text,
  backgroundColor,
  disabled,
  isLoading = false,
  variant = 'contained',
  borderRadius = 'medium',
  style,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useRippleEffect(buttonRef);

  return (
    <Root
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      disabled={disabled || isLoading}
      variant={variant}
      type='button'
      style={style}
      ref={buttonRef}
      {...props}
    >
      <Spinner isLoading={isLoading} isAbsolute size='small' color='white'>
        {text}
      </Spinner>
    </Root>
  );
};

export default memo(Button);
