import styled from 'styled-components';

export const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export const Content = styled.div`
  min-width: none;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: ${(props) => props.theme.shape.borderRadius.medium};
  padding: 44px 60px;
  ${(props) => props.theme.media.down('md')`
    min-width: 255px !important;
    padding: 40px;
  `}
`;

export const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.palette.common.black};
  opacity: 0.4;
  z-index: -1;
`;

export const CloseButton = styled.button`
  position: absolute;
  left: 100%;
  bottom: calc(100% + 1px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: ${(props) => props.theme.shape.borderRadius.circle};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  border: none;

  ${(props) => props.theme.media.down('sm')`
   bottom: calc(100% + 10px);
    left: auto;
    right: -20px;
  `}
`;

export const Title = styled.span`
  font-family: 'Circe', sans-serif;
  color: ${(props) => props.theme.palette.common.black};
  font-size: 32px;
  margin-bottom: 15px;
  width: 100%;
  text-align: center;
  font-weight: 600;
`;
