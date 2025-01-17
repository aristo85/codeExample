import React, {FC} from 'react';
import {SuccessContainer, SuccessSubTitle, SuccessTitle} from './styles';
import BigCheckIcon from '@/modules/core/components/icons/BigCheckIcon';
import {useRouter} from 'next/router';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

interface PaymentSuccessComponentProps {
  icon?: React.ReactNode;
  paymentTitle: string;
  paymentSubTitle: string;
  buttonInfo: {
    href: (id: string) => string;
    title: string;
  };
}
const SuccessComponent: FC<PaymentSuccessComponentProps> = ({
  icon,
  paymentTitle,
  paymentSubTitle,
  buttonInfo,
}) => {
  const router = useRouter();
  const {id} = router.query;

  return (
    <SuccessContainer>
      {icon ? icon : <BigCheckIcon />}
      <SuccessTitle>{paymentTitle}</SuccessTitle>
      <SuccessSubTitle>{paymentSubTitle}</SuccessSubTitle>
      <a href={buttonInfo.href(id as string)}>
        <ButtonBasic dark type={'button'}>
          {buttonInfo.title}
        </ButtonBasic>
      </a>
    </SuccessContainer>
  );
};

export default SuccessComponent;
