import styled from 'styled-components';

export const BalanceCard = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.palette.common.white};
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.shape.borderRadius.medium};
  transition: ${(props) => props.theme.transition.fast};

  ${(props) => props.theme.elevation[1]};
  &:hover {
    ${(props) => props.theme.transition.fast};
    ${(props) => props.theme.elevation[3]};
  }
`;

export const BalanceCardHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const BalanceCardHeaderCurrencyImg = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const BalanceCardWalletInfo = styled.div`
  margin-left: 20px;
`;

export const BalanceCardWalletCurrency = styled.span`
  font-size: ${({ theme }) => theme.font.size.subtitle1};
  color: ${({ theme }) => theme.palette.common.black};
`;
export const BalanceEquivalent = styled.p`
  margin-top: 3px;
  color: ${({ theme }) => theme.palette.common.gray};
`;

export const BalanceCardAmount = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const BalanceCardHoldAmount = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -10px;
  margin-bottom: 20px;
`;

export const BalanceAmount = styled.p`
  font-size: ${({ theme }) => theme.font.size.heading1};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-family: ${({ theme }) => theme.font.family.auxiliary};
`;

export const CurrencyContraction = styled.span`
  margin-left: 15px;
  font-size: ${({ theme }) => theme.font.size.body1};
  color: ${({ theme }) => theme.palette.common.black};
`;

export const BalanceCardButtonsContainer = styled.div`
  margin-bottom: 3px;
  display: flex;
  justify-content: center;
`;

export const BalanceCardButtonLabel = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

export const BalanceCardButtonImg = styled.div`
  filter: ${(props) => props.theme.palette.sidebar.menuIconColor};
`;

export const BalanceCardButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 31px;
  background: #f4f6f9;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  text-align: center;
  transition: ${(props) => props.theme.transition.fast};

  &:nth-of-type(1),
  &:nth-of-type(2) {
    margin-right: 25px;
  }

  &:hover {
    width: 110px;
    background-color: ${({ theme }) => theme.palette.common.primary};
    border-color: transparent;
    box-sizing: border-box;
    a {
      font-weight: ${({ theme }) => theme.font.weight.semiBold};
      font-size: ${({ theme }) => theme.font.size.body2};
      color: ${({ theme }) => theme.palette.common.white};

      ${BalanceCardButtonImg} {
        display: flex;
        align-items: center;
        margin-right: 4px;
        filter: ${({ theme }) => theme.palette.balance.hoverWhiteIcon};
      }
    }
  }
`;

export const BalanceCardButtonLink = styled.a`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 0;
  transition: ${(props) => props.theme.transition.fast};
  cursor: pointer;
`;
