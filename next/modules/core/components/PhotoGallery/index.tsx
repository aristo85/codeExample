import React, {FC, useState} from 'react';
import {
  GridContainer,
  MainImageContainer,
  SecondImageContainer,
  ThirdImageContainer,
  FourthImageContainer,
  FifthImageContainer,
  SixthImageContainer,
  SeeAllImagesText,
  StyledImage,
  NoImagesLengthBlock,
  DefaultIconContainer,
  NoImageDefaultText,
} from './styles';
import ModalGallery from '@/modules/placement/components/BookingImageGallery';
import useMatchMedia from '../../hooks/useMatchMedia';
import {breakpoints} from '../../styles/mediaQueries';

import DefaultHotelIcon from '@/modules/core/components/icons/DefaultHotelIcon';

type Props = {
  images: string[];
  isModalOpened: boolean;
  setIsModalOpened: (val: boolean) => void;
  isOptionsType?: boolean;
};

const PhotoGallery: FC<Props> = ({
  images,
  isOptionsType,
  isModalOpened,
  setIsModalOpened,
}) => {
  const imagesLength = images.length ?? 0;
  const [
    mainImage,
    secondImage,
    thirdImage,
    fourthImage,
    fifthImage,
    sixthImage,
    ...rest
  ] = images;
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const isScreenMd = useMatchMedia(`(max-width: ${breakpoints.md}px)`);
  const isScreenSm = useMatchMedia(`(max-width: ${breakpoints.sm}px)`);
  const isScreenXs = useMatchMedia(`(max-width: ${breakpoints.xs}px)`);
  const isScreenXxs = useMatchMedia(`(max-width: 376px)`);
  const isFifthOptions =
    isScreenMd && (!isScreenSm || isScreenXs) && fifthImage;

  const modalToggleHandler = () => {
    setIsModalOpened(!isModalOpened);
  };

  const onImageClickHandler = (index: number) => {
    setCurrentImageIndex(index);
    modalToggleHandler();
  };

  const imageComponent = (
    url: string,
    seeMore?: number,
    mainImage?: boolean,
  ) => {
    const isSeeMore = !!seeMore;
    return (
      <>
        <StyledImage
          src={url}
          alt="gallery-image"
          layout="fill"
          objectFit="cover"
          $isSeeMore={!!isSeeMore}
          $isOptionsType={!!isOptionsType}
          $mainImage={!!mainImage}
        />
        {isSeeMore && (
          <SeeAllImagesText>
            {isScreenSm || isOptionsType ? `+${seeMore}` : 'Смотреть все фото'}
          </SeeAllImagesText>
        )}
      </>
    );
  };

  if (!imagesLength) {
    return (
      <NoImagesLengthBlock cursor={'not-allowed'}>
        <DefaultIconContainer>
          <DefaultHotelIcon />
          <NoImageDefaultText>Фото отсутствует</NoImageDefaultText>
        </DefaultIconContainer>
      </NoImagesLengthBlock>
    );
  }

  return (
    <>
      {isOptionsType ? (
        <GridContainer length={imagesLength} isOptionsType={!!isOptionsType}>
          <MainImageContainer
            onClick={() => onImageClickHandler(0)}
            isOptionsType={!!isOptionsType}>
            {imageComponent(mainImage, undefined, true)}
          </MainImageContainer>

          {secondImage && (
            <SecondImageContainer
              onClick={() => onImageClickHandler(1)}
              isOptionsType={!!isOptionsType}>
              {imageComponent(secondImage)}
            </SecondImageContainer>
          )}
          {thirdImage && (
            <ThirdImageContainer
              onClick={() => onImageClickHandler(2)}
              isOptionsType={!!isOptionsType}>
              {imageComponent(thirdImage, isScreenXxs ? imagesLength - 3 : 0)}
            </ThirdImageContainer>
          )}
          {!isScreenXxs && (
            <>
              {fourthImage && (
                <FourthImageContainer
                  onClick={() => onImageClickHandler(3)}
                  isOptionsType={!!isOptionsType}>
                  {imageComponent(
                    fourthImage,
                    isScreenMd && (!isScreenSm || isScreenXs)
                      ? imagesLength - 4
                      : 0,
                  )}
                </FourthImageContainer>
              )}
              {fifthImage && !isFifthOptions && (
                <FifthImageContainer
                  onClick={() => onImageClickHandler(4)}
                  isOptionsType={!!isOptionsType}>
                  {imageComponent(fifthImage, imagesLength - 5)}
                </FifthImageContainer>
              )}
            </>
          )}
        </GridContainer>
      ) : (
        <GridContainer length={imagesLength}>
          <MainImageContainer onClick={() => onImageClickHandler(0)}>
            {imageComponent(mainImage)}
          </MainImageContainer>
          {secondImage && (
            <SecondImageContainer onClick={() => onImageClickHandler(1)}>
              {imageComponent(secondImage)}
            </SecondImageContainer>
          )}
          {thirdImage && (
            <ThirdImageContainer onClick={() => onImageClickHandler(2)}>
              {imageComponent(thirdImage, isScreenMd ? imagesLength - 3 : 0)}
            </ThirdImageContainer>
          )}
          {!isScreenMd && (
            <>
              {fourthImage && (
                <FourthImageContainer onClick={() => onImageClickHandler(3)}>
                  {imageComponent(fourthImage)}
                </FourthImageContainer>
              )}
              {fifthImage && (
                <FifthImageContainer onClick={() => onImageClickHandler(4)}>
                  {imageComponent(fifthImage)}
                </FifthImageContainer>
              )}
              {sixthImage && (
                <SixthImageContainer onClick={() => onImageClickHandler(5)}>
                  {imageComponent(sixthImage, imagesLength - 6)}
                </SixthImageContainer>
              )}
            </>
          )}
        </GridContainer>
      )}
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

export default PhotoGallery;
