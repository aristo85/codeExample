import styled, {css} from 'styled-components';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

export const RoomCardTextValue = styled.p<{highlighted?: boolean}>`
  align-items: center;
  display: inline-block;

  ${({theme, highlighted}) => css`
    color: ${highlighted ? theme.colors.primary : theme.colors.default};
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

export const RoomServiceName = styled.span<{
  highlighted?: boolean;
  bold?: boolean;
}>`
  ${({theme, highlighted, bold}) => css`
    color: ${highlighted ? theme.colors.primary : theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-family: ${highlighted || bold
      ? theme.font.family.gothicMedium
      : theme.font.family.gothicBook};
    font-weight: ${theme.font.weight.regular};

    &:first-letter {
      text-transform: capitalize;
    }
    ${theme.media.down('md')`
    `};
  `}
`;

export const RoomServiceValue = styled.span`
  ${({theme}) => css`
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

export const RoomCardDetailBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 0;
    ${theme.media.down('md')`
      padding: 16px 0 0;
    `};
  `}
`;

export const RoomCardDetailInformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RoomRateTitle = styled.h3`
  ${({theme}) => css`
    white-space: normal;
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-family: ${theme.font.family.gothicMedium};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down('md')`
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

export const RoomCardBookingBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px 0;
    align-items: center;
    ${theme.media.down('md')`
      align-items: flex-end;
      padding: 0 0 16px;
    `};
  `}
`;

export const RoomPriceAndButtonContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    ${theme.media.down('md')`
    `};
  `}
`;

export const RoomCardPrice = styled.h3`
  ${({theme}) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.subtitle2};
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
    white-space: nowrap;
  `};
`;

export const BookingCardRoomButton = styled(ButtonBasic)`
  display: block;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  cursor: pointer;
  height: 40px;
  gap: 10px;
  align-self: flex-end;
  ${({theme}) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.size.subtitle2};
    font-family: ${theme.font.family.gothicDemi};
  `};
  ${({theme}) => theme.media.down('sm')`
    width: 100%;
  `}
`;

export const RoomInformationWrapper = styled.div`
  border-top: 2px solid #c6e1f3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  ${({theme}) => theme.media.down('md')`
    flex-direction: column;
    gap: 16px;
  `}
`;

export const RoomBookingTip = styled.h4`
  ${({theme}) => css`
    color: #4f4f4f;
    font-size: ${theme.font.size.body3};
    font-family: ${theme.font.family.gothicBook};
    font-weight: ${theme.font.weight.regular};
    text-align: justify;
    align-self: flex-end;
  `};
`;

export const RoomServiceBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    ${theme.media.down('md')`
    `};
  `}
`;
