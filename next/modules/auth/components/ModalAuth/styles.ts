import styled from 'styled-components';
import MainLogo from '@/modules/core/components/icons/MainLogo';
import CloseIcon from '@/modules/core/components/icons/CloseIcon';

export const ModalContent = styled.div`
  position: relative;
  width: 628px;
  background: #ffffff;
  border-radius: 32px;
  padding: 40px 32px 32px 32px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({theme}) => theme.media.down('sm')`
    width: 100vw;
    height: 100%;
    border-radius: 0px;
  `}
`;

export const ModalTitle = styled.p`
  font-size: 24px;
  line-height: 27px;
  color: #222121;
  text-align: center;
`;

export const CloseBtn = styled(CloseIcon)`
  position: absolute;
  top: 17px;
  right: 20px;
  color: #1d7abd;
  cursor: pointer;
  background: #fff;
  z-index: 1;
`;

export const MainMobileLogo = styled(MainLogo)`
  display: none;
  ${({theme}) => theme.media.down('sm')`
    display: block;
    margin: 0 auto 50px auto;
    // margin: 0 auto;
  `}
`;
