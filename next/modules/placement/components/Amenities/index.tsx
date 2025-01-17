import React, {FC} from 'react';
import {
  AmenitiesContainer,
  AmenitiesGroup,
  AmenitiesWrapper,
  AmenityItem,
  AmenityTxt,
  DetailDescription,
  DetailLabel,
  DetailWrapper,
} from '@/modules/placement/components/Amenities/styles';
import {Room} from '@/modules/core/api/model/placement/room';
import {getAmenitiesWithIcon} from './constants';

export interface AmenitiesProps {
  description: string;
  sizeValue: number;
  amenitiesWithCategory: Room['amenitiesWithCategory'];
}
const Amenities: FC<AmenitiesProps> = ({
  sizeValue,
  description,
  amenitiesWithCategory,
}) => {
  const amenitiesWithIcons = getAmenitiesWithIcon(amenitiesWithCategory);

  return (
    <DetailWrapper>
      <DetailDescription>{description}</DetailDescription>
      {sizeValue > 0 && <DetailLabel>Площадь: {sizeValue} кв.м</DetailLabel>}
      <AmenitiesWrapper>
        {amenitiesWithIcons?.map(item => {
          return (
            <AmenitiesGroup key={item.category}>
              <DetailLabel>{item.category}</DetailLabel>
              <AmenitiesContainer>
                {item.amenities.map((amenity, index) => (
                  <AmenityItem key={`${amenity.code}-${index}`}>
                    {amenity.icon}
                    <AmenityTxt>{amenity.name}</AmenityTxt>
                  </AmenityItem>
                ))}
              </AmenitiesContainer>
            </AmenitiesGroup>
          );
        })}
      </AmenitiesWrapper>
    </DetailWrapper>
  );
};

export default Amenities;
