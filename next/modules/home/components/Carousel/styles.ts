import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Image from 'next/image';

export const SwiperContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  position: relative;
`;

export const CarouselItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CarouselImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 155px;
`;

export const ItemImage = styled(Image)`
  border-radius: 20px;
  object-fit: cover;
`;

export const ItemTitle = styled.h2`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  overflow-wrap: anywhere;
  margin-right: auto;
`;

export const BaseArrow = styled.div`
  position: absolute;
  top: 30%;
  width: 45px;
  height: 45px;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transform: matrix(1, 0, 0, -1, 0, 0);
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;
  color: #222121;
  z-index: 1;

  ${({theme}) => theme.media.down('md')`
    display: none;
  `}
`;

export const CustomRightArrow = styled(BaseArrow).attrs({
  as: ArrowForwardIosIcon,
})`
  right: -50px;
  ${({theme}) => theme.media.down('screen1270')`
    right: 0;
  `}
`;

export const CustomLeftArrow = styled(BaseArrow).attrs({as: ArrowBackIosIcon})`
  left: -50px;
  padding: 10px 0px 10px 10px;
  ${({theme}) => theme.media.down('screen1270')`
    left: 0;
  `}
`;
