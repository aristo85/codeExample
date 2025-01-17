import styled, {css} from 'styled-components';

export const CalendarMonthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 12px;
  background: #ffffff;
  border-radius: 13px;
`;

export const CalendarCaption = styled.div`
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
  `}
  display: flex;
  gap: 16px;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 16px;
  color: #222121;
`;

export const CalendarCaptionButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
`;

export const CalendarWeekDayRow = styled.div`
  display: flex;
  justify-content: stretch;
`;

export const CalendarWeekDay = styled.div`
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  `}
  text-transform: capitalize;
  text-align: center;
  line-height: 14px;
  padding: 14px 14px;
`;

export const CalendarWeek = styled.div`
  display: flex;
  justify-content: stretch;
  margin: 11px 0 0;
`;

export const CalendarDay = styled.div<{
  selected: boolean;
  selectable: boolean;
  empty: boolean;
  hasPlaces: boolean;
}>`
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  `}
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 14px;
  padding: ${({hasPlaces}) => (hasPlaces ? '6px 7px' : '14px 14px')};
  color: ${({selected, hasPlaces}) =>
    selected || hasPlaces ? '#ffffff' : '#222121'};
  background: ${({selected, hasPlaces, empty}) =>
    empty
      ? 'transparent'
      : selected
      ? '#219653'
      : hasPlaces
      ? '#1D7ABD'
      : 'transparent'};
  border-radius: 32px;
  cursor: ${({hasPlaces, selectable, empty}) =>
    hasPlaces && selectable && !empty ? 'pointer' : 'auto'};
`;

export const CalendarDayPlaces = styled.div`
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicBook};
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
  `}
  text-align: center;
  line-height: 7px;
  color: #ffffff;
`;
