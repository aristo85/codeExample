import React, {useState} from 'react';
import OpenEyeIcon from '@/modules/core/components/icons/OpenEyeIcon';
import ClosedEyeIcon from '@/modules/core/components/icons/ClosedEyeIcon';

const EyeIcon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleIcon = () => {
    setIsVisible(prev => !prev);
  };
  return isVisible ? (
    <ClosedEyeIcon onClick={toggleIcon} />
  ) : (
    <OpenEyeIcon onClick={toggleIcon} />
  );
};

export default EyeIcon;
