import styled, {css} from 'styled-components';

export const CalendarMonthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  background: #ffffff;
  border-radius: 13px;
  gap: 14px;
`;

export const CalendarCaption = styled.div`
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
  `}
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: space-between;
  text-transform: capitalize;
  color: #222121;
`;

export const CalendarWeekDayHeader = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
  width: 100%;
`;

export const CalendarWeekDayTr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

export const CalendarWeekDayTh = styled.th`
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    color: #a0a3bd;
  `};

  width: 24px;
  height: 12px;
  line-height: 22px;
  text-transform: capitalize;
  text-align: center;
`;

export const CalendarWeekTr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

export const CalendarDayTd = styled.td<{
  selected: boolean;
  selectable: boolean;
  startRadius: boolean;
  endRadius: boolean;
}>`
  ${({theme, selected, startRadius, endRadius, selectable}) => css`
    background: ${selected ? '#8daec1' : 'transparent'};
    color: ${selected
      ? '#222121'
      : !selected && selectable
      ? '#222121'
      : '#EAEAEA'};
    border-radius: ${startRadius
      ? '20px 0 0 20px'
      : endRadius
      ? '0 20px 20px 0'
      : '0'};
    cursor: ${selectable ? 'pointer' : 'not-allowed'};
  `};
  border-block-start: 1px solid transparent;
  border-spacing: 0;
  height: 30px;
  width: 24px;
  outline: none;
  padding: 0;
  text-align: center;
  justify-content: center;
`;

export const CalendarDayTdSpan = styled.span`
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: 13px;
    font-weight: 600;
  `}
`;
