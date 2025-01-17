import styled, {css} from 'styled-components';

export const RoomCardContainer = styled.div`
  ${({theme}) => css`
    border-radius: 32px;
    border: 2px solid ${theme.colors.secondary};
    display: flex;
    padding: 24px;
    gap: 24px;
    flex-direction: row;
    ${theme.media.down('sm')`
      flex-direction: column;
      padding: 0px;
      gap: 16px;
    `};
  `}
`;

export const RoomCardMainInformation = styled.div`
  ${({theme}) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    ${theme.media.down('md')`
    `};
  `}
`;

export const RoomCardRoomInformation = styled.div`
  ${({theme}) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    ${theme.media.down('md')`
    `};
  `}
`;

export const RoomCardTextValue = styled.h3`
  ${({theme}) => css`
    white-space: pre-line;
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-family: ${theme.font.family.gothicBook};
    font-weight: ${theme.font.weight.regular};
    &:first-letter {
      text-transform: capitalize;
    }
    ${theme.media.down('md')`
    `};
  `}
`;

export const RoomDetailsBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    ${theme.media.down('md')`
    `};
  `}
`;

export const RoomNameTitle = styled.h3`
  ${({theme}) => css`
    white-space: normal;
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle1};
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down('sm')`
      font-size: ${theme.font.size.subtitle2};
      margin: 0;
  `};
  `}
`;

export const RoomHeaderBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 24px;
    align-items: flex-start;
    ${theme.media.down('md')`
    `};
  `}
`;

export const RoomAllServicesButton = styled.button`
  ${({theme}) => css`
    letter-spacing: 0.15px;
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.subtitle1};
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    ${theme.media.down('md')`
    `};
  `}
`;

export const RoomAmenitiesBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px 24px;
    width: 100%;
    ${theme.media.down('md')`
    `};
  `}
`;

export const RoomAmenitiesItemBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    ${theme.media.down('md')`
    `};
  `}
`;

export const RoomCardContentBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    gap: 24px;
    justify-content: space-between;
    width: 100%;
    ${theme.media.down('sm')`
      flex-direction: column;
    `};
  `}
`;
export const RoomInformationContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    ${theme.media.down('md')`
    `};
  `}
`;

export const AmenityRoomBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
`;

export const AmenityRoomMobileContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 24px;
    ${theme.media.down('sm')`
      padding-bottom: 0;
    `};
  `}
`;

export const AmenityRoomContainer = styled.ul`
  ${({theme}) => css`
    list-style: none;
    column-gap: 24px;
    padding: 0;
    column-count: 3;
    ${theme.media.down('sm')`
      column-count: 2;
    `};
  `}
`;

export const AmenityCategoryBlock = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  break-inside: avoid;
  padding-bottom: 16px;
`;

export const AmenityBlock = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const AmenityItemBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const AmenityItemName = styled.h4`
  ${({theme}) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.size.body2};
    font-family: ${theme.font.family.gothicBook};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down('md')`
    `};
  `}
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const AmenityCategoryTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 40px;
`;
export const AmenityCategoryTitle = styled.h3`
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body1};
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down('sm')`
      font-size: ${theme.font.size.body2};
      font-family: ${theme.font.family.gothicMedium};
    `};
  `}
`;

export const MobileRoomHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: -10px;
  gap: 3px;
  align-items: end;
`;

export const MobileRoomBtn = styled.h3`
  margin: 0;
  ${({theme}) => css`
    letter-spacing: 0.15px;
    white-space: nowrap;
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.subtitle4};
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
  `}
`;

export const MobileCardBody = styled.div`
  ${({theme}) => css`
    display: flex;
    padding: 0 16px;
    gap: 16px;
    flex-direction: column;
  `}
`;

export const MobileModalAmenities = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `}
`;

export const MobileModalAmenitiesTitle = styled.h3`
  ${({theme}) => css`
    line-height: 28px;
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle2};
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
  `}
`;
