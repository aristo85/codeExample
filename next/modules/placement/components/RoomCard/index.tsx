import React, {FC, useState} from 'react';
import {
  AmenityCategoryBlock,
  AmenityCategoryTitle,
  AmenityCategoryTitleContainer,
  AmenityItemBlock,
  AmenityItemName,
  AmenityRoomContainer,
  RoomAllServicesButton,
  RoomAmenitiesBlock,
  RoomAmenitiesItemBlock,
  RoomCardContainer,
  RoomCardContentBlock,
  RoomCardMainInformation,
  RoomCardRoomInformation,
  RoomCardTextValue,
  RoomDetailsBlock,
  RoomHeaderBlock,
  RoomInformationContainer,
  RoomNameTitle,
} from './styles';
import {getAmenitiesWithIcon} from '@/modules/placement/components/Amenities/constants';
import {AmenityWithCategory} from '@/modules/core/api/model/placement/amenityWithCategory';
import {PlacementRateData} from '@/modules/core/api/model/placement/placementRateData';
import {Room} from '@/modules/placement/detail/detail.types';
import RoomInformationContent from '@/modules/placement/components/RoomCard/components/RoomInformationContent';
import PhotoGallery from '@/modules/core/components/PhotoGallery';
import {Service} from '@/modules/profile/types';

import AmenitiesModal from '@/modules/placement/components/RoomCard/components/AmenitiesModal';

export type RoomCardProps = {
  rooms: Room[];
  amenitiesWithCategory?: AmenityWithCategory[];
  ratePlans?: PlacementRateData[];
  services: Service[];
};

const RoomCard: FC<RoomCardProps> = ({
  rooms,
  amenitiesWithCategory,
  ratePlans,
  services,
}) => {
  const [isModalGalleryOpen, setIsModalGalleryOpen] = useState(false);
  const [isAllAmenitiesModalOpen, setIsAllAmenitiesModalOpen] =
    useState<boolean>(false);
  const amenitiesWithIcons = getAmenitiesWithIcon(amenitiesWithCategory, {
    width: 28,
    height: 28,
  });

  const firstRoomDetailData = rooms.length > 0 ? rooms[0] : null;
  const {sizeValue, description, roomName} = firstRoomDetailData || {};
  const images = rooms[0]?.images;

  const toggleAmenitiesModal = () => {
    setIsAllAmenitiesModalOpen(prev => !prev);
  };

  return (
    <>
      <RoomCardContainer>
        <RoomCardMainInformation>
          <PhotoGallery
            images={images}
            isModalOpened={isModalGalleryOpen}
            setIsModalOpened={setIsModalGalleryOpen}
            isOptionsType
          />
          <RoomDetailsBlock>
            {sizeValue !== undefined && Number(sizeValue) > 0 && (
              <RoomCardTextValue>Площадь: {sizeValue} кв.м</RoomCardTextValue>
            )}
            {description && (
              <RoomCardTextValue>{description}</RoomCardTextValue>
            )}
          </RoomDetailsBlock>
        </RoomCardMainInformation>
        <RoomCardRoomInformation>
          <RoomHeaderBlock>
            <RoomNameTitle>{roomName || ''}</RoomNameTitle>
            {amenitiesWithIcons && amenitiesWithIcons?.length > 0 && (
              <RoomAllServicesButton onClick={toggleAmenitiesModal}>
                Все удобства
              </RoomAllServicesButton>
            )}
          </RoomHeaderBlock>
          {amenitiesWithIcons && amenitiesWithIcons?.length > 0 && (
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
          <RoomCardContentBlock>
            <RoomInformationContainer>
              {rooms.length > 0 &&
                rooms.map((room, index) => {
                  const ratePlan =
                    ratePlans &&
                    ratePlans.find(
                      el => el.id === room.placementExtraData.ratePlan.id,
                    );
                  const currentRoomServices =
                    room.placementExtraData.includedServices
                      ?.map(({id}, index) =>
                        services.find(
                          service => String(service.id) === String(id),
                        ),
                      )
                      .filter(service => service !== undefined) as Service[];

                  return (
                    <RoomInformationContent
                      ratePlan={ratePlan}
                      roomId={room.placementExtraData.roomId}
                      key={`${index}`}
                      currentRoomServices={currentRoomServices}
                      cancellationPolicy={
                        room.placementExtraData.cancellationPolicy
                      }
                      price={room.placementExtraData.price}
                      fullPlacementsName={
                        room.placementExtraData.fullPlacementsName
                      }
                    />
                  );
                })}
            </RoomInformationContainer>
          </RoomCardContentBlock>
        </RoomCardRoomInformation>
      </RoomCardContainer>
      {isAllAmenitiesModalOpen && (
        <AmenitiesModal
          onClose={toggleAmenitiesModal}
          isOpen={isAllAmenitiesModalOpen}>
          <AmenityRoomContainer>
            {amenitiesWithIcons?.map((amenities, i) => {
              return (
                <AmenityCategoryBlock key={`${amenities.category}-${i}`}>
                  <AmenityCategoryTitleContainer>
                    <AmenityCategoryTitle>
                      {amenities.category}
                    </AmenityCategoryTitle>
                  </AmenityCategoryTitleContainer>

                  {amenities.amenities.map((amenity, i) => (
                    <AmenityItemBlock key={`${amenity.name}-${i}`}>
                      <div style={{minWidth: 'min-content'}}>
                        {amenity.icon}
                      </div>
                      <AmenityItemName>{amenity.name}</AmenityItemName>
                    </AmenityItemBlock>
                  ))}
                </AmenityCategoryBlock>
              );
            })}
          </AmenityRoomContainer>
        </AmenitiesModal>
      )}
    </>
  );
};

export default RoomCard;
