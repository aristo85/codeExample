import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QrCodeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  background-color: #f4f6f9;
  border-radius: ${(props) => props.theme.shape.borderRadius.medium};
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 35px 0;

  button {
    margin: 0 10px;
  }
`;

export const DoneButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 45px;
  background-color: #fcce23;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;
`;
