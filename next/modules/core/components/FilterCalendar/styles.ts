import styled, {css} from 'styled-components';
import ArrowSelectUp from '@/modules/core/components/icons/ArrowSelectUp';

export const FilterCalendarWrapper = styled.div<{isOpen: boolean}>`
  position: absolute;
  top: 60px;
  width: 607px;
  min-height: 312px;
  display: flex;
  left: 50%;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  background: #fff;
  transform: scaleY(0);
  z-index: 1;
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 16px;

  ${props =>
    props.isOpen &&
    css`
      transform: scaleY(1) translateX(-50%);

      ${({theme}) => theme.media.down('md')`
        left: 10%;
      `};

      ${({theme}) => theme.media.down('sm')`
        transform: translateX(-50%);
        left: 50%;
        width: 100%;
        max-width: 607px;
      `};
    `}
`;

export const FilterMainContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  height: 64px;
`;

export const FilteredValue = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-size: 20px;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  cursor: pointer;

  ${({theme}) => css`
    ${theme.media.down('screen1200')`
      font-size: 18px;
    `};
    ${theme.media.down('md')`
      padding: 0 4px;
    `};
    ${theme.media.down('xxs')`
      padding: 0 4px;
      font-size: 16px;
    `};
  `}
`;
export const FilterCalendarBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 31px;

  ${({theme}) => theme.media.down('xs')`
   display: flex;
    flex-direction: column;
    gap: 0;
  `};
`;

export const InteractionButtons = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const CalendarButtonArrow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
  align-items: center;
`;

export const ArrowLeftButton = styled(ArrowSelectUp)`
  transform: rotate(90deg);
`;

export const ArrowRightButton = styled(ArrowSelectUp)`
  transform: rotate(-90deg);
`;

export const ButtonTitle = styled.span`
  ${({theme}) => css`
    position: relative;
    font-size: ${theme.font.size.body3};
    font-family: ${theme.font.family.gothicDemi};
    color: ${theme.colors.primary};
    grid-column: 2;
    text-align: center;
    &::after {
      cursor: default;
      content: '';
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 100%;
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `}
`;

export const MobileDateFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 30px;
  tab-index: 0;
`;

export const MobileDateFilterContent = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 12px;
  border: 3px solid #1d7abd;
`;

export const MobileDateTitle = styled.h3`
  ${({theme}) => css`
    font-size: ${theme.font.size.subtitle2};
    font-family: ${theme.font.family.gothicDemi};
    color: ${theme.colors.default};
  `}
`;

export const MobileDateHeaderBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 10px;
`;

export const MobileDateTitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  text-transform: capitalize;
`;
