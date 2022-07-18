import styled, { css } from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  border-bottom: 1px solid ${(props) => props.theme.palette.common.lightGray};

  &:last-child {
    border-bottom: 0;
  }
`;

export const Title = styled.span`
  flex: 0 0 20%;
  ${({ theme }) => css`
    font-family: ${theme.font.family.auxiliary};
    font-size: ${theme.font.size.body3};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.palette.common.lightGray};
  `}
`;

export const Value = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.main};
    font-size: ${theme.font.size.body3};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.palette.common.black};
    text-align: right;
  `}
`;
