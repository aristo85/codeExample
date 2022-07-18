import styled from 'styled-components';

export const Root = styled.div``;

export const Form = styled.form``;

export const FormRow = styled.fieldset`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AmountDescription = styled.span`
  font-family: 'Futura PT', sans-serif;
  font-size: 12px;
  color: ${(props) => props.theme.palette.common.gray};
`;

export const InfoRowsWrapper = styled.div``;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.palette.common.lightGray};

  &:last-child {
    border-bottom: 0;
    margin-bottom: 45px;
  }
`;

export const InfoRowName = styled.span`
  font-family: 'Circe', sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.palette.common.lightGray};
`;

export const InfoRowValue = styled.span`
  font-family: 'FuturaPT', sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.palette.common.black};
  max-width: 50%;
  word-wrap: break-word;
  text-align: end;
`;

export const InfoFirstFormRowValue = styled.span`
  font-family: 'FuturaPT', sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.palette.common.black};
  max-width: 50%;
  word-wrap: break-word;
  text-align: end;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const GoBackAction = styled.button`
  padding: 15px;
  font-size: 14px;
  color: ${(props) => props.theme.palette.common.primary};
  background-color: transparent;
  border: none;
  width: fit-content;
  margin: 0 auto;
  text-decoration: underline;
`;
