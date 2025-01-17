import React, {FC, useState} from 'react';
import {
  DefaultIconContainer,
  ImageBlock,
  ImageContainer,
  ImageContentBlock,
  RoomImage,
  RoomNameTitle,
  ViewAllImagesTitle,
} from './styles';
import ModalGallery from '@/modules/placement/components/BookingImageGallery';

import DefaultHotelIcon from '@/modules/core/components/icons/DefaultHotelIcon';
export interface RoomImageComponentProps {
  images: string[];
  roomName: string;
}
const RoomImageComponent: FC<RoomImageComponentProps> = ({
  images,
  roomName,
}) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const setCurrentImageIndexHandler = (index: number) => {
    if (index <= images.length - 1 && index >= 0) {
      setCurrentImageIndex(index);
    }
  };

  return (
    <>
      <ImageContainer>
        <RoomNameTitle>{roomName}</RoomNameTitle>

        {images.length > 0 && (
          <ImageContentBlock
            cursor={'pointer'}
            onClick={() => setIsGalleryOpen(true)}>
            <ImageBlock>
              <RoomImage
                src={images[0]}
                alt="main-image"
                layout="fill"
                objectFit="cover"
              />
            </ImageBlock>
            <ViewAllImagesTitle>Смотреть фото номеров</ViewAllImagesTitle>
          </ImageContentBlock>
        )}
        {!images.length && (
          <ImageContentBlock cursor={'not-allowed'}>
            <DefaultIconContainer>
              <DefaultHotelIcon />
            </DefaultIconContainer>
            <ViewAllImagesTitle>Фото отсутствует</ViewAllImagesTitle>
          </ImageContentBlock>
        )}
      </ImageContainer>
      {isGalleryOpen && (
        <ModalGallery
          currentImageIndex={currentImageIndex}
          images={images}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          setCurrentImage={setCurrentImageIndexHandler}
        />
      )}
    </>
  );
};

export default RoomImageComponent;
