import styled, {css} from 'styled-components';
import Link from 'next/link';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${({theme}) => theme.media.down('sm')`
    gap: 24px;
    padding-bottom: 16px;
  `}
`;

export const BreadcrumbsBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({theme}) => theme.media.down('sm')`
    padding-bottom: 16px;
    ${theme.media.down('xs')`
    `}
  `}
`;

export const DetailHeadSection = styled.div`
  display: flex;
  gap: 32px;
  ${({theme}) => theme.media.down('sm')`
      flex-direction: column-reverse;
  `}
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const GallerySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const FeaturesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AdvantageBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  min-width: 244px;
  border-radius: 24px;
  background: #8daec1;
  height: fit-content;

  ${({theme}) => theme.media.down('sm')`
        width: 100%;
  `}
`;

export const AdvantageText = styled.h3`
  line-height: 22px;
  color: white;
  border-bottom: 2px solid currentColor;
  padding-bottom: 8px;
  ${({theme}) => css`
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `}
`;

export const BlockTitle = styled.h3`
  line-height: 32px;
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle1};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `}
`;

export const BlockText = styled.p`
  line-height: 22px;
  white-space: pre-line;
  ${({theme}) => css`
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicBook};
  `}
`;

export const AmenitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 16px;
`;

export const Divider = styled.div`
  height: 2px;
  background: #c6e1f3;
`;

export const DetailBookingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({theme}) => theme.media.down('md')`
    flex-direction: column;
    ${theme.media.down('sm')`
    `}
  `}
`;

export const TitleText = styled.h2`
  line-height: 32px;
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle1};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
    ${theme.media.down('xs')`
      font-family: ${theme.font.family.gothicMedium};
    `};
  `}
`;

export const BookingHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LinkToChangeData = styled(Link)`
  ${({theme}) => css`
    color: ${theme.colors.primary};
    margin-left: 12px;
    ${theme.media.down('xs')`
      margin-left: 0;
    `};
  `}
`;

export const AvailableRoomInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 24px;
  align-items: center;
  column-gap: 8px;
  row-gap: 6px;
  ${({theme}) => css`
    ${theme.media.down('xs')`
      align-items: start;
    `}
  `}
`;

export const BookingAvailableRooms = styled(TitleText)`
  margin-bottom: 24px;
`;

export const DateBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    ${theme.media.down('sm')`
      align-items: start;
      flex-direction: column;
      gap: 2px;
    `};
  `}
`;

export const InfoTitle = styled.h3`
  display: flex;
  flex-direction: row;
  gap: 6px;
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `}
`;

export const SubTitle = styled.span`
  padding-top: 1.6px;
  text-decoration-line: underline;
  text-underline-offset: 2px;
  font-weight: bold;
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
  `}
`;

export const BookingAvailableRoomsDate = styled.span`
  ${({theme}) => css`
    text-decoration-line: underline;
    font-weight: bold;
    padding: 0 4px;
    ${theme.media.down('xs')`
        display: flex;
        flex-direction: column;
        padding:0;
    `}
  `}
`;

export const RoomsContainer = styled.div`
  ${({theme}) => css`
    display: grid;
    grid-template-columns: 216px 1fr;
    gap: 64px;

    ${theme.media.down('md')`
      display: flex;
      flex-direction: column;
      gap: 16px;      
    `};
  `}
`;

export const RoomsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const RoomGroupContainer = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 32px;
  border: 1px solid #000;
  padding: 24px;
`;

export const RoomGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SmallScreenAccordionContainer = styled.div`
  margin-top: 20px;
`;

export const AccordionWrapper = styled.div`
  h2 {
    margin-left: 40%;
  }
`;

export const BookingButton = styled(ButtonBasic)`
  width: 100%;
  height: 56px;
  ${({theme}) => css`
    font-size: ${theme.font.size.subtitle2};
    font-family: ${theme.font.family.gothicDemi};
  `};

  ${({theme}) => theme.media.down('xs')`
  `}
`;

export const FilterBlock = styled.div`
  width: 326px;
  flex: 1;
`;
