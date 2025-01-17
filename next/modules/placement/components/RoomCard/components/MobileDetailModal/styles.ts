import styled, {css} from 'styled-components';
import CloseIcon from '@/modules/core/components/icons/CloseIcon';

export const ModalContent = styled.div`
  position: relative;
  background: #ffffff;
  border-radius: 10px 10px 0 0;
  padding: 70px 16px 16px 16px;
  top: 5%;
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &::-webkit-scrollbar-track {
    margin: 20px 0;
  }
`;

export const CloseBtn = styled(CloseIcon)`
  background: #fff;
  z-index: 1;
`;

export const ModalHeaderTitle = styled.h3`
  margin: 0 auto;
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: 17px;
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
  `}
`;

export const ModalHeaderBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #8daec1;
  padding: 16px;
`;

export const BodyContent = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
