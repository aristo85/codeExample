import styled from 'styled-components';

export const Root = styled.div`
  thead tr {
    th:last-child {
      text-align: center;
    }
  }

  tbody tr {
    justify-content: space-between;
    td {
      vertical-align: middle;
      width: 16.666%;
    }
  }

  .tableRowQuantity {
    display: none;
  }
`;

export const ActionsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const ActionsListItem = styled.li`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background: #f4f6f9;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  text-align: center;
  border-radius: ${(props) => props.theme.shape.borderRadius.circle};
  transition: ${(props) => props.theme.transition.fast};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: ${(props) => props.theme.palette.common.primary};
    border-color: transparent;
    box-sizing: border-box;
    transition: ${(props) => props.theme.transition.fast};
    a {
      color: ${(props) => props.theme.palette.common.primary};
      div {
        align-items: center;
        filter: ${(props) => props.theme.palette.balance.hoverWhiteIcon};
      }
    }
  }
`;

export const ActionsListItemLink = styled.a`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 0;
  text-align: center;
  transition: ${(props) => props.theme.transition.fast};
`;

export const ActionsBtn = styled.div`
  transition: ${(props) => props.theme.transition.fast};
  filter: ${(props) => props.theme.palette.sidebar.menuIconColor};
`;

export const ActionsBtnIcon = styled.img`
  width: 10px;
  height: 10px;
`;

export const RootListView = styled.div`
  position: relative;
  min-height: 400px;
`;

export const ActionsName = styled.span``;

export const Form = styled.form`
  display: flex;
  width: 50%;
  padding: 0 40px;
  margin: 10px 0;
  justify-content: space-between;
  align-items: center;

  ${(props) => props.theme.media.down('md')`
    width: auto;
    flex-direction: column;
  `}
`;
