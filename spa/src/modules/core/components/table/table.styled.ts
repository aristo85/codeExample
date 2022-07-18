import styled, { css } from 'styled-components';

export const Root = styled.div<{ isLoading: boolean; isRecords: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ${(props) =>
    (props.isLoading || !props.isRecords) &&
    css`
      min-height: 400px;
    `};

  ${(props) => props.theme.media.down('xl')`
    overflow-x: scroll;
  `};
`;

export const TableWrapper = styled.table`
  position: relative;
  width: 100%;
  border-collapse: separate;
`;

export const Head = styled.thead`
  background-color: ${(props) => props.theme.palette.table.head};
`;

export const HeadRow = styled.tr`
  height: 50px;
`;

export const HeadCell = styled.th`
  height: 50px;
  text-align: start;
  vertical-align: middle;
  padding: 0 10px;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-size: ${({ theme }) => theme.font.size.body2};
  font-family: ${({ theme }) => theme.font.family.main};
  color: ${({ theme }) => theme.palette.common.black};

  &:first-child {
    border-radius: ${(props) => props.theme.shape.borderRadius.medium} 0 0
      ${(props) => props.theme.shape.borderRadius.medium};
  }

  &:last-child {
    border-radius: 0 ${(props) => props.theme.shape.borderRadius.medium}
      ${(props) => props.theme.shape.borderRadius.medium} 0;
  }
`;

export const Body = styled.tbody``;

export const BodyRow = styled.tr<{ clickable: boolean }>`
  transition: ${(props) => props.theme.transition.fast};

  ${(props) =>
    props.clickable &&
    css`
      cursor: pointer;

      &:hover {
        background-color: ${props.theme.palette.table.rowBgHover};
      }
    `}
`;

export const BodyCell = styled.td`
  padding: 16px 10px;
  border-bottom: 1px solid ${(props) => props.theme.palette.table.divider};
  font-size: 14px;
  color: ${(props) => props.theme.palette.common.gray};
`;

export const PaginationWrapper = styled.div`
  margin-top: auto;
  padding-top: 24px;
  display: flex;
  justify-content: center;
`;

export const EmptyListPlaceholder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  color: ${(props) => props.theme.palette.common.lightGray};
`;

export const TableRowQuantity = styled.div`
  display: flex;
  align-items: center;

  .tableRowQuantitySelect {
    max-width: 100px;
    width: 100%;
  }

  div {
    font-family: ${(props) => props.theme.font.family.main};
    font-size: ${(props) => props.theme.font.size.body3};
    font-weight: ${(props) => props.theme.font.weight.regular};
    color: ${(props) => props.theme.palette.common.gray};
  }
`;

export const TableRowQuantityLabel = styled.p`
  flex: 0 0 auto;
  margin-right: 15px;
  font-family: ${(props) => props.theme.font.family.main};
  font-size: ${(props) => props.theme.font.size.body3};
  font-weight: ${(props) => props.theme.font.weight.regular};
  color: ${(props) => props.theme.palette.common.gray};
`;
