import styled from 'styled-components';
// components
import Paper from 'modules/core/components/paper';

export const Root = styled(Paper)`
  max-width: 668px;
  margin: 20px auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormRow = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;
