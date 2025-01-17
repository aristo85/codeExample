import {ButtonHTMLAttributes, FC} from 'react';
import {MobileButtonStyle} from '@/modules/core/components/MobileButton/styles';
import MobileButtonIcon from '@/modules/core/components/icons/MobileButtonIcon';

interface MobileButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const MobileButton: FC<MobileButtonProps> = ({onClick, isActive}) => {
  return (
    <MobileButtonStyle onClick={onClick} isActive={isActive}>
      <MobileButtonIcon fill={isActive ? '#1D7ABD' : '#22212152'} />
    </MobileButtonStyle>
  );
};

export default MobileButton;
