import React, {FC} from 'react';
import {
  CardDescription,
  CardInformationContainer,
  CardName,
  CardTypeContainer,
} from '@/modules/core/components/CardType/styles';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

interface SelectTypeProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  widthOption: '260px' | '100%'; // 100% - to stretch the select card in a block
  onClickButtonHandler: () => void;
}

const CardType: FC<SelectTypeProps> = ({
  name,
  description,
  icon,
  widthOption,
  onClickButtonHandler,
}) => {
  return (
    <CardTypeContainer $width={widthOption}>
      <CardInformationContainer>
        {icon}
        <CardName>{name}</CardName>
        <CardDescription>{description}</CardDescription>
      </CardInformationContainer>
      <ButtonBasic dark small onClick={onClickButtonHandler}>
        Зарегистрировать объект
      </ButtonBasic>
    </CardTypeContainer>
  );
};

export default CardType;
