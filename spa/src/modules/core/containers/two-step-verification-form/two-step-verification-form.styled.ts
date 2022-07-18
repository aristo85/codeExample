import styled, { css } from 'styled-components';
// components
import Paper from 'modules/core/components/paper';

export const Root = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 472px;
  min-height: 430px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  ${({ theme }) => css`
    font-family: ${theme.font.family.auxiliary};
    font-weight: ${theme.font.weight.semiBold};
    font-size: ${theme.font.size.heading2};
  `}
`;

export const Subtitle = styled.span`
  margin-bottom: 10px;
  ${({ theme }) => css`
    font-family: ${theme.font.family.main};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.subtitle2};
    color: ${theme.palette.common.lightGray};
  `}
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const ActionWrapper = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
