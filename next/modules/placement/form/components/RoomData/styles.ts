import styled from 'styled-components';
import Image from 'next/image';

export const BookingFormRoomData = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 16px;
  max-width: 80%;
  cursor: pointer;
`;

export const RoomImage = styled(Image)`
  border: 2px solid #1d7abd;
  border-radius: 16px;
`;

export const RoomDetailBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RoomName = styled.h3`
  display: flex;
  align-items: flex-end;
  ${({theme}) => `
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular}
  `};
`;

export const RoomDetail = styled.h3`
  display: flex;
  align-items: flex-end;
  ${({theme}) => `
    color: ${theme.colors.secondary};
    font-size: ${theme.font.size.body3};
    font-weight: ${theme.font.weight.regular}
  `};
`;

export const RoomCost = styled.h3`
  display: flex;
  align-items: flex-end;
  ${({theme}) => `
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.bold}
  `};
`;
