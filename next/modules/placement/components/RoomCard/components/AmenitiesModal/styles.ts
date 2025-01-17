import styled, {css} from 'styled-components';
import CloseIcon from '@/modules/core/components/icons/CloseIcon';

export const ModalContent = styled.div`
  position: relative;
  background: #ffffff;
  border-radius: 32px;
  padding: 32px 32px 32px 32px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 884px;
  width: calc(100% - 20px);
  max-height: 80%;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    margin: 20px 0 20px 0;
  }

  ${({theme}) => theme.media.down('xs')`
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
  color: #1d7abd;
  cursor: pointer;
  background: #fff;
  z-index: 1;
`;

export const ModalHeaderTitle = styled.h3`
  line-height: 32px;
  ${({theme}) => css`
    letter-spacing: 0.15px;
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle1};
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down('md')`
    `};
  `}
`;

export const ModalHeaderBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
