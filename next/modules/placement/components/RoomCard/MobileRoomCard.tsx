import React, {FC, useState} from 'react';
import {
  MobileRoomBtn,
  RoomAmenitiesBlock,
  RoomAmenitiesItemBlock,
  RoomCardContainer,
  RoomCardMainInformation,
  RoomCardRoomInformation,
  RoomCardTextValue,
  RoomDetailsBlock,
  MobileRoomHead,
  RoomNameTitle,
  MobileCardBody,
  AmenityCategoryTitle,
  AmenityItemBlock,
  AmenityItemName,
  MobileModalAmenities,
  MobileModalAmenitiesTitle,
  AmenityBlock,
  AmenityRoomMobileContainer,
} from './styles';
import {getAmenitiesWithIcon} from '@/modules/placement/components/Amenities/constants';
import {AmenityWithCategory} from '@/modules/core/api/model/placement/amenityWithCategory';
import {PlacementRateData} from '@/modules/core/api/model/placement/placementRateData';
import {Room} from '@/modules/placement/detail/detail.types';
import PhotoGallery from '@/modules/core/components/PhotoGallery';
import MobileRoomTariffs from './components/MobileRoomTariffs';
import {Service} from '@/modules/profile/types';
import MobileDetailModal from './components/MobileDetailModal';

export type RoomCardProps = {
  rooms: Room[];
  amenitiesWithCategory?: AmenityWithCategory[];
  ratePlans?: PlacementRateData[];
  services: Service[];
};

const MobileRoomCard: FC<RoomCardProps> = ({
  rooms,
  amenitiesWithCategory,
  ratePlans,
  services,
}) => {
  const [isModalGalleryOpen, setIsModalGalleryOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const amenitiesWithIcons = getAmenitiesWithIcon(amenitiesWithCategory, {
    width: 26,
    height: 26,
  });
  const firstRoomDetailData = rooms.length > 0 ? rooms[0] : null;
  const {sizeValue, description, roomName} = firstRoomDetailData || {};
  const images = rooms[0]?.images;
  const isAmenitiesExist = amenitiesWithIcons && amenitiesWithIcons?.length > 0;
  const isDetailsEmpty =
    !sizeValue &&
    !description &&
    (!amenitiesWithIcons || amenitiesWithIcons?.length < 1);

  const toggleDetailModal = () => {
    setIsDetailModalOpen(prev => !prev);
  };

  return (
    <>
      <MobileRoomHead>
        <RoomNameTitle>{roomName || ''}</RoomNameTitle>
      </MobileRoomHead>

      <RoomCardContainer>
        <PhotoGallery
          images={images}
          isModalOpened={isModalGalleryOpen}
          setIsModalOpened={setIsModalGalleryOpen}
          isOptionsType
        />
        <MobileCardBody>
          <RoomCardMainInformation>
            <MobileRoomHead>
              <RoomNameTitle>О номере</RoomNameTitle>
              {!isDetailsEmpty && (
                <MobileRoomBtn onClick={toggleDetailModal}>
                  Подробнее
                </MobileRoomBtn>
              )}
            </MobileRoomHead>
            <RoomDetailsBlock>
              {sizeValue !== undefined && Number(sizeValue) > 0 && (
                <RoomCardTextValue>
                  Площадь: {sizeValue} кв.м.
                </RoomCardTextValue>
              )}
            </RoomDetailsBlock>
          </RoomCardMainInformation>
          <RoomCardRoomInformation>
            {isAmenitiesExist && (
              <RoomAmenitiesBlock>
                {amenitiesWithIcons?.map(({amenities, category}) => {
                  return amenities.map(({icon, name, code}, index) => {
                    if (index > 0) return null;

                    return (
                      <RoomAmenitiesItemBlock key={`${code}-${index}`}>
                        {icon}
                        <RoomCardTextValue>{name}</RoomCardTextValue>
                      </RoomAmenitiesItemBlock>
                    );
                  });
                })}
              </RoomAmenitiesBlock>
            )}
            <RoomNameTitle>Варианты размещения</RoomNameTitle>
            <MobileRoomTariffs {...{ratePlans, rooms, services}} />
          </RoomCardRoomInformation>
        </MobileCardBody>
      </RoomCardContainer>

      <MobileDetailModal onClose={toggleDetailModal} isOpen={isDetailModalOpen}>
        <RoomDetailsBlock>
          {sizeValue !== undefined && Number(sizeValue) > 0 && (
            <RoomCardTextValue>Площадь: {sizeValue} кв.м.</RoomCardTextValue>
          )}
          {description && <RoomCardTextValue>{description}</RoomCardTextValue>}
        </RoomDetailsBlock>
        {isAmenitiesExist && (
          <MobileModalAmenities>
            <MobileModalAmenitiesTitle>Удобства</MobileModalAmenitiesTitle>
            {amenitiesWithIcons?.map((amenities, i) => {
              return (
                <AmenityRoomMobileContainer key={amenities.category}>
                  <AmenityCategoryTitle>
                    {amenities.category}
                  </AmenityCategoryTitle>
                  <AmenityBlock>
                    {amenities.amenities.map((amenity, i) => (
                      <AmenityItemBlock key={`${amenity.name}-${i}`}>
                        {amenity.icon}
                        <AmenityItemName>{amenity.name}</AmenityItemName>
                      </AmenityItemBlock>
                    ))}
                  </AmenityBlock>
                </AmenityRoomMobileContainer>
              );
            })}
          </MobileModalAmenities>
        )}
      </MobileDetailModal>
    </>
  );
};

export default MobileRoomCard;
