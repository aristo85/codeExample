import styled, { css } from 'styled-components';

export const BalanceLink = styled.div`
  max-width: 100px;
  flex: 0 1 100%;
  display: flex;
  flex-wrap: nowrap;
  padding: 7px;
  margin-bottom: 13px;
  align-items: center;
  transition: ${(props) => props.theme.transition.fast};
  border: 1px solid;
  border-radius: ${(props) => props.theme.shape.borderRadius.medium};
  svg {
    width: 41px;
    height: 30px;
    margin-right: 7px;
    border-radius: ${(props) => props.theme.shape.borderRadius.circle};
  }
  &:hover {
    box-shadow: 0px 3px 3px 0px rgb(0 0 0 / 7%);
  }
`;

export const BalanceAmount = styled.p`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    width: 100%;
    align-items: start;
    align-content: center;
    font-size: ${theme.font.size.body3};
    line-height: 21px;
    margin-bottom: 0;
  `}
`;

export const BalanceAmountFractional = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.size.auxiliary3};
    line-height: 12px;
  `}
`;
