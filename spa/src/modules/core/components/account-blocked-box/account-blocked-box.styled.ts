import styled, { css } from 'styled-components';

// components
import Paper from 'modules/core/components/paper';
import Button from 'modules/core/components/button';

export const Root = styled.div``;

export const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 74vh;
  padding: 25px;
  margin: 40px auto;
  background: #ffffff;
  text-align: center;
`;

export const BlockedTitle = styled.h2`
  margin-bottom: 22px;
  line-height: 31px;
  ${({ theme }) => css`
    color: ${theme.palette.common.red};
    font-size: ${theme.font.size.subtitle1};
    font-weight: ${theme.font.weight.semiBold};
  `}
`;

export const BlockedSubTitle = styled.p`
  max-width: 392px;
  margin: 0 auto 22px auto;
  line-height: 21px;
  ${({ theme }) => css`
    color: ${theme.palette.common.lightGray};
    font-size: ${theme.font.size.body3};
    font-family: ${theme.font.family.auxiliary}, sans-serif;
  `}
`;

export const SupportButton = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.palette.common.red};
  `}
`;
