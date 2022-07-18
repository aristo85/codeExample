import styled, { css } from 'styled-components';
// components
import Paper from 'modules/core/components/paper';

export const Root = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 472px;
  min-height: 430px;
  width: 100%;

  .confirm-question {
    ${({ theme }) => css`
      font-weight: ${theme.font.weight.semiBold};
    `}
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ActionWrapper = styled.div`
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;
