import styled, {css} from 'styled-components';
import Image from 'next/image';

export const BookingButtonWrapper = styled.div<{
  isPlacement?: boolean;
  isBookingDetail?: boolean;
}>`
  position: relative;
  min-width: 234px;
  min-height: 88px;
  height: ${({isPlacement, isBookingDetail}) =>
    isPlacement || isBookingDetail ? '88px' : '100%'};

  ${({theme}) => theme.media.down('xs')`
    width: 100%;
  `}
`;

export const BookingMapImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

export const BookingMapLinkButton = styled.button<{
  isMapOpened?: boolean;
  isPlacement?: boolean;
  isBookingDetail?: boolean;
}>`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 24px;
  gap: 10px;
  width: ${({isMapOpened, isPlacement, isBookingDetail}) =>
    isMapOpened
      ? '100%'
      : isPlacement
      ? '260px'
      : isBookingDetail
      ? '300px'
      : 'auto'};
  white-space: nowrap;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 56px;
  border-radius: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #1d7abd;

  ${({theme, isPlacement}) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${isPlacement
      ? theme.font.size.subtitle4
      : theme.font.size.subtitle2};
    font-family: ${theme.font.family.gothicDemi};

    ${({theme}) => theme.media.up('sm')`
    &:hover {
      background: #c6e1f3;
      color: #1d7abd;
    }
  `}

    ${theme.media.down('md')`
    width: 90%;
    `}
  `}
`;
