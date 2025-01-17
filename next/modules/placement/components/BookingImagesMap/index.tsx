import React, {FC, useState} from 'react';
import {
  BookingImageMapWrapper,
  BookingMainContainer,
  BookingMainImage,
  BookingMapButtonWrapper,
  BookingSecondaryContainer,
  BookingSecondaryImage,
  BookingTertiaryContainer,
  BookingTertiaryImage,
  SeeAllImagesText,
} from '@/modules/placement/components/BookingImagesMap/styles';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import BookingMapButton from '@/modules/placement/components/BookingMapButton';
import ModalGallery from '@/modules/placement/components/BookingImageGallery';

export interface BookingImageMapProps {
  images: string[];
  mapLink?: string;
  location: Location;
}

export enum Location {
  PLACEMENT = 'PLACEMENT',
  GUIDE = 'GUIDE',
  EXCURSION = 'EXCURSION',
}

const BookingImageMap: FC<BookingImageMapProps> = ({
  images,
  mapLink,
  location,
}) => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isMapOpened, setIsMapOpened] = useState(false);
  const [mainImage, secondaryImage, ...rest] = images;
  const isScreenSm = useMatchMedia(`(max-width: ${breakpoints.sm}px)`);

  let tertiaryImage;

  if (isScreenSm || location !== 'PLACEMENT') {
    tertiaryImage = rest.shift();
  }

  const mapToggleHandler = () => {
    setIsMapOpened(prev => !prev);
  };

  const onClickHandler = (index: number) => {
    setCurrentImageIndex(index);
    modalToggleHandler();
  };

  const modalToggleHandler = () => {
    setIsModalOpened(prev => !prev);
  };

  return (
    <>
      <BookingImageMapWrapper
        isSecondaryImageExists={!!secondaryImage}
        location={location}>
        <BookingMainContainer onClick={() => onClickHandler(0)}>
          <BookingMainImage
            src={mainImage}
            alt="main-image"
            layout="fill"
            objectFit="cover"
          />
        </BookingMainContainer>
        {secondaryImage && (
          <BookingSecondaryContainer onClick={() => onClickHandler(1)}>
            <BookingSecondaryImage
              location={location}
              remainingElements={rest.length}
              src={secondaryImage}
              alt="secondary-image"
              layout="fill"
              objectFit="cover"
              IsTertiaryImageExists={!tertiaryImage}
            />
            {rest.length > 0 && !tertiaryImage && (
              <SeeAllImagesText>
                {isScreenSm || location !== Location.PLACEMENT
                  ? `+${rest.length}`
                  : 'Смотреть все фото'}
              </SeeAllImagesText>
            )}
          </BookingSecondaryContainer>
        )}
        {(isScreenSm || location !== Location.PLACEMENT) && tertiaryImage && (
          <BookingTertiaryContainer onClick={() => onClickHandler(2)}>
            <BookingTertiaryImage
              remainingElements={rest.length}
              src={tertiaryImage}
              alt="tertiary-image"
              layout="fill"
              objectFit="cover"
            />
            {rest.length > 0 && (
              <SeeAllImagesText>
                {isScreenSm || location !== Location.PLACEMENT
                  ? `+${rest.length}`
                  : 'Смотреть все фото'}
              </SeeAllImagesText>
            )}
          </BookingTertiaryContainer>
        )}
        {location === Location.PLACEMENT && mapLink && (
          <BookingMapButtonWrapper isSecondaryImageExists={!!secondaryImage}>
            <BookingMapButton
              link={mapLink}
              isLink={true}
              isMapOpened={isMapOpened}
              mapOpenFn={mapToggleHandler}
            />
          </BookingMapButtonWrapper>
        )}
      </BookingImageMapWrapper>
      <ModalGallery
        currentImageIndex={currentImageIndex}
        images={images}
        isOpen={isModalOpened}
        onClose={modalToggleHandler}
        setCurrentImage={setCurrentImageIndex}
      />
    </>
  );
};

export default BookingImageMap;
