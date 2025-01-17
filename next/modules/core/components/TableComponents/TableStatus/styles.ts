import styled, {css} from 'styled-components';
import {TableStatusEnum} from '@/modules/excursion/excursion.types';

export const TableStatusContainer = styled.div<{$width?: number}>`
  ${({$width}) => css`
    width: ${$width ? `${$width}px` : `100px`};
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
  `}
`;

const getStatusColor = (status: TableStatusEnum) => {
  switch (status) {
    case TableStatusEnum.ACTIVE:
      return '#6FCF97';
    case TableStatusEnum.CHECK:
      return '#EFAA40';
    case TableStatusEnum.DISABLED:
      return '#EB5757';
    default:
      return 'transparent';
  }
};
export const StatusPin = styled.span<{status: TableStatusEnum}>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({status}) => getStatusColor(status)};
`;

export const StatusText = styled.h3`
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-family: ${theme.font.family.gothicBook};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-style: normal;
    line-height: normal;
  `}
`;
