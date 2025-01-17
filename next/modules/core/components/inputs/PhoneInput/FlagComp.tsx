import React, {FC} from 'react';
import {FlagImg} from './styles';

type Props = {
  country: string;
};

const FlagComp: FC<Props> = ({country}) => {
  return (
    <div style={{width: '24px', height: '24px'}}>
      <FlagImg
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
        alt="image"
        width={100}
        height={100}
      />
    </div>
  );
};

export default FlagComp;
