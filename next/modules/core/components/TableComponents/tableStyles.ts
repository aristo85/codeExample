import styled from 'styled-components';
import FilterArrowIcon from '@/modules/core/components/icons/FilterArrowIcon';

export const TableContainer = styled.h2`
  ${({theme}) => `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 100px;
    overflow-x: auto;
  `}
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #1d7abd;
`;

export const TableHead = styled.thead`
  border-bottom: 1px solid #1d7abd;
  background: #8daec1;
  color: white;
  height: 65px;
`;

export const TableHeaderCell = styled.th`
  text-align: center;
  padding: 8px;
  cursor: default;
  justify-content: center;
  &:not(:last-child) {
    border-right: 1px solid #1d7abd; /* Add border between columns in header */
  }
  ${({theme}) => `
    width: 100%;
    padding: 16px;
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
    font-size: 14px;
  `}

  ${({theme}) => theme.media.down('xs')`
     padding: 8px;;
  `}
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  height: 56px;
  cursor: pointer;

  &:hover {
    background: rgba(141, 174, 193, 0.2);
  }
`;

export const ExcursionTableRow = styled.tr`
  height: 56px;
`;

export const HeaderCellWithSort = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;

  ${({theme}) => `
    color: ${theme.colors.white};
    font-family: ${theme.font.family.gothicDemi};
    font-size: ${theme.font.size.body3};
    font-weight: ${theme.font.weight.semiBold};
  `}
`;

export const TableCell = styled.td`
  border-bottom: 1px solid #1d7abd; /* Add border at the bottom of each cell */
  &:not(:last-child) {
    border-right: 1px solid #1d7abd; /* Add border between columns */
  }
  ${({theme}) => `
    width: 100%;
    padding: 16px;
    color: ${theme.colors.default};
    font-family: ${theme.font.family.gothicBook};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};   
  `}

  ${({theme}) => theme.media.down('xs')`
     padding: 8px;;
  `}
`;

export const PlacementTitle = styled.h3`
  ${({theme}) => `
    width: 100%;
    color: ${theme.colors.primary};
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
  `}
`;

export const FilterArrowIconUp = styled(FilterArrowIcon)`
  transform: rotate(180deg);
  float: right;
`;

export const FilterArrowIconDown = styled(FilterArrowIcon)`
  float: right;
`;

export const TableTitleWithPointer = styled.h3`
  ${({theme}) => `
    color: ${theme.colors.primary};
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    cursor: pointer;
  `}
`;

export const TableCellValue = styled.h4<{oneLine?: boolean}>`
  ${({theme, oneLine}) => `
    width: 100%;
    white-space: ${oneLine ? 'nowrap' : 'normal'};
    font-family: ${theme.font.family.gothicBook};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.body2};
  `}
`;

export const TableCellValueWithCopyIcon = styled.div`
  ${({theme}) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    align-items: center;
    font-family: ${theme.font.family.gothicBook};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.body2};
  `}
`;
