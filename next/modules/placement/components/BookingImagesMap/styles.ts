import styled, {css} from 'styled-components';
import Image from 'next/image';
import {Location} from '@/modules/placement/components/BookingImagesMap/index';

interface BookingImageProps {
  remainingElements: number;
  isMobile?: boolean;
  location?: Location;
  IsTertiaryImageExists?: boolean;
}
export const BookingImageMapWrapper = styled.div<{
  isSecondaryImageExists: boolean;
  location: Location;
}>`
  ${({theme, isSecondaryImageExists, location}) => css`
    display: grid;
    grid-gap: 32px;
    width: 100%;
    margin: 42px 0 24px;
    grid-template-columns: 60% calc(40% - 32px);
    grid-template-rows: 210px 210px;
    height: 452px;

    ${location === Location.PLACEMENT &&
    isSecondaryImageExists &&
    css`
      grid-template-columns: 60% auto;
      grid-template-rows: 258px 210px;
      height: 500px;
    `}

    ${location !== Location.PLACEMENT &&
    css`
      grid-template-columns: ${isSecondaryImageExists
        ? `calc(76% - 16px) 24%`
        : `100%`};
      grid-template-rows: 1fr 1fr;
      grid-gap: 16px;
      height: 328px;
      margin: 0;
    `}

    ${theme.media.down('sm')`
      grid-gap: 12px;
      margin: 24px 0;
      grid-template-columns: calc(50% - 6px) calc(50% - 6px);
      grid-template-rows: 156px 156px 100px;
      height: ${isSecondaryImageExists ? '424px' : '260px'};

      ${
        location !== Location.PLACEMENT &&
        css`
          height: ${isSecondaryImageExists ? '312px' : '156px'};
          grid-template-rows: 156px 156px;
          //grid-template-rows: 1fr;
        `
      }
      
      ${
        !isSecondaryImageExists &&
        location === Location.PLACEMENT &&
        css`
          grid-template-rows: 156px 100px;
          height: 256px;
        `
      }
    `};
  `}
`;

export const BookingMainContainer = styled.div`
  position: relative;
  cursor: pointer;
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  ${({theme}) => css`
    ${theme.media.down('sm')`
       grid-column: 1 / span 2;
       grid-row: 1 / span 1;
    `}
  `}
`;

export const BookingSecondaryContainer = styled.div`
  position: relative;
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  ${({theme}) => css`
    ${theme.media.down('sm')`
        grid-column: 1 / span 1;
        grid-row: 2 / span 1;
    `}
  `}
`;

export const BookingTertiaryContainer = styled.div`
  position: relative;
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  ${({theme}) => css`
    ${theme.media.down('sm')`
        grid-column: 2 / span 1;
        grid-row: 2 / span 1;
    `}
  `}
`;

export const BookingTertiaryImage = styled(Image)<BookingImageProps>`
  border-radius: 32px;
  cursor: pointer;
  ${({remainingElements}) =>
    remainingElements > 0 &&
    css`
      filter: brightness(50%);
    `}
`;
export const BookingMainImage = styled(Image)`
  border-radius: 32px;
`;

export const BookingSecondaryImage = styled(Image)<BookingImageProps>`
  border-radius: 32px;
  cursor: pointer;
  ${({remainingElements, location, IsTertiaryImageExists}) => css`
    ${location === Location.PLACEMENT &&
    remainingElements &&
    IsTertiaryImageExists &&
    css`
      filter: brightness(50%);
    `}

    ${({theme}) => css`
      ${theme.media.down('sm')`
        filter: none;
    `}
    `}
  `}
`;

export const BookingMapButtonWrapper = styled.div<{
  isSecondaryImageExists: boolean;
}>`
  ${({theme, isSecondaryImageExists}) => css`
    grid-column: 2 / span 1;
    grid-row: ${isSecondaryImageExists ? '2 / span 1' : '1 / span 1'};
    height: 100%;
    ${theme.media.down('sm')`
       grid-column: 1 / span 2;
       margin-top: 12px;
       grid-row: ${isSecondaryImageExists ? '3 / span 1' : '2 / span 1'};
       height: 88px;
    `}
  `}
`;

export const SeeAllImagesText = styled.h2`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
  cursor: pointer;
  ${({theme}) => `
    color: ${theme.colors.white};
    font-size: ${theme.font.size.subtitle1};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
    `};
`;
