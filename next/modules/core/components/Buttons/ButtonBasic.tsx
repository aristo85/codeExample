import React, {ButtonHTMLAttributes, FC, ReactNode} from 'react';
import {BtnStyled} from './styles';

type Props = {
  children: string | ReactNode;
  dark?: boolean;
  small?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonBasic: FC<Props> = ({children, dark, small, ...props}) => {
  return (
    <BtnStyled dark={dark} small={small} {...props}>
      {children}
    </BtnStyled>
  );
};

export default ButtonBasic;
