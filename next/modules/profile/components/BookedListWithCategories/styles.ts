import styled, {css} from 'styled-components';
import DateInput from '@/modules/core/components/datePickers/DateInput';

export const BookedItemsContainer = styled.div<{isPartner: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 30px;

  ${({theme, isPartner}) => css`
    min-width: ${isPartner ? '530px' : 'unset'};
    width: ${isPartner ? '80%' : '100%'};
    ${theme.media.down('screen1200')`
      ${
        isPartner &&
        css`
          width: 60%;
          min-width: 450px;
        `
      }
    `}
    ${theme.media.down('md')`
      ${
        isPartner &&
        css`
          width: 100%;
          min-width: unset;
        `
      }
    `}
    ${theme.media.down('xs')`
     margin-bottom: 60px;
    `}
  `}
`;

export const BookedTabHeaderContainer = styled.div`
  position: relative;
`;

export const BookedDivider = styled.div`
  height: 12px;
  background-color: #c6e1f3;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const BookedItemsBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DefaultText = styled.h3`
  ${({theme}) => css`
    font-size: ${theme.font.size.subtitle2};
    text-align: center;
    font-family: ${theme.font.family.gothicMedium};
    color: ${theme.colors.primary};
  `}
`;

export const DateInteraction = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`;

export const BookedDateInput = styled(DateInput)``;

export const DateString = styled.h3`
  ${({theme}) => css`
    font-size: ${theme.font.size.subtitle1};
    font-family: ${theme.font.family.gothicMedium};
    color: ${theme.colors.default};
    ${theme.media.down('xs')`
      
    `}
  `}
`;

export const DateInputWrapper = styled.div`
  max-width: 292px;
`;
