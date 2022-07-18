import styled from 'styled-components';

export const Root = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  padding: 0;
  border: none;
  border-radius: ${(props) => props.theme.shape.borderRadius.circle};
  overflow: hidden;
`;
