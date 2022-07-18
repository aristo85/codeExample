import styled from 'styled-components';

export const PseudoButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Root = styled.div`
  display: flex;
  min-width: 60px;

  ${PseudoButton}:active {
    svg {
      filter: ${(props) => props.theme.palette.sidebar.menuIconColor};
    }
  }
`;

export const ColumnTitle = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-size: ${({ theme }) => theme.font.size.body2};
  font-family: ${({ theme }) => theme.font.family.main};
  color: ${({ theme }) => theme.palette.common.black};
  margin-right: 7px;
`;
