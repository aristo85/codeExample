import React, {FC, useState} from 'react';
import BookingHotelIcon from '@/modules/core/components/icons/BookingHotelIcon';
import ApartmentAndFlatIcon from '@/modules/core/components/icons/ApartmentAndFlatIcon';
import {
  PlacementApiTypeName,
  PlacementApiTypeOption,
  PlacementCardBlock,
  PlacementContainer,
  PlacementSubTitle,
  PlacementTitle,
  PlacementTypeApiContainer,
  TextInformationContainer,
} from '@/modules/profile/AddPlacement/styles';
import {PlacementType} from '@/modules/placement/components/BookingCard';
import {AddPlacementModal} from '@/modules/profile/AddPlacement/addPlacementModal';
import CardType from '@/modules/core/components/CardType';
import GuestHouseIcon from '@/modules/core/components/icons/GuestHouse';
import AlternativePlacementIcon from '@/modules/core/components/icons/AlternativePlacementIcon';

export enum PlacementEnum {
  hotel = 'HOTEL',
  apartment = 'APARTMENTS',
  guestHouse = 'GUEST_HOUSE',
  other = 'OTHER',
}

export enum PlacementTypeApiEnum {
  travelLine = 'TRAVEL_LINE',
  bnovo = 'BNOVO',
}

export const placementTypeApiOptions: {
  name: string;
  code: PlacementTypeApiEnum;
  description: string;
  tips: string;
  imageTip: string;
}[] = [
  {
    name: 'TravelLine',
    code: PlacementTypeApiEnum.travelLine,
    description:
      'Property ID можно увидеть в TravelLine в шапке. Пример ниже на картинке.',
    tips: 'Важно! В TravelLine вы должны активировать канал продаж Go2Kavkaz, чтобы ваши данные отобразились в системе.',
    imageTip: '/images/addPlacementTip.png',
  },
  //   TODO ADD this option late
  // {
  //   name: 'BNOVO',
  //   code: PlacementTypeApiEnum.bnovo,
  // },
];

const placementCards: {
  icon: React.JSX.Element;
  name: string;
  description: string;
  code: PlacementEnum;
}[] = [
  {
    name: 'Гостиницы',
    description: 'Гостиницы, отели, хостелы и прочее',
    icon: <BookingHotelIcon />,
    code: PlacementEnum.hotel,
  },
  {
    name: 'Апартаменты/\n квартиры',
    description: 'Апартаменты/квартиры',
    icon: <ApartmentAndFlatIcon />,
    code: PlacementEnum.apartment,
  },
  {
    name: 'Гостевые\n дома',
    description: 'Дома для отпуска, виллы и прочее',
    icon: <GuestHouseIcon />,
    code: PlacementEnum.guestHouse,
  },
  {
    name: 'Альтернативные\n варианты',
    description: 'Ботели, кемпинги, глемпинги, фермы, люкс-шатры и прочее',
    icon: <AlternativePlacementIcon />,
    code: PlacementEnum.other,
  },
];

export interface AddPlacementData {
  placementId: string;
  placementType: PlacementType;
  placementApiType: PlacementTypeApiEnum;
}
export const AddPlacement: FC = () => {
  const [placementApiType, setPlacementApiType] =
    useState<PlacementTypeApiEnum | null>(null);
  const [placementType, setPlacementType] = useState<PlacementEnum | null>(
    null,
  );
  const [isAddPlacementModalOpen, setIsAddPlacementModalOpen] =
    useState<boolean>(false);

  return (
    <>
      {isAddPlacementModalOpen && (
        <AddPlacementModal
          placementApiType={placementApiType}
          placementType={placementType}
          closeButton={() => setIsAddPlacementModalOpen(false)}
        />
      )}
      <PlacementContainer>
        <TextInformationContainer>
          <PlacementTitle>
            Добавьте свой объект и готовьтесь принимать гостей!
          </PlacementTitle>
          <PlacementSubTitle>
            1. Чтобы начать, выберите сервис, на котором расположен объект
            размещения:
          </PlacementSubTitle>
        </TextInformationContainer>
        <PlacementTypeApiContainer>
          {placementTypeApiOptions.map(option => {
            const isActive = option.code === placementApiType;
            return (
              <PlacementApiTypeOption
                onClick={() => setPlacementApiType(option.code)}
                active={isActive}
                key={option.code}>
                <PlacementApiTypeName active={isActive}>
                  {option.name}
                </PlacementApiTypeName>
              </PlacementApiTypeOption>
            );
          })}
        </PlacementTypeApiContainer>
        {placementApiType && (
          <>
            <TextInformationContainer>
              <PlacementSubTitle>
                2. Выберите тип объекта, который хотите зарегистрировать:
              </PlacementSubTitle>
            </TextInformationContainer>
            <PlacementCardBlock>
              {placementCards.map(card => {
                return (
                  <CardType
                    key={card.code}
                    widthOption={'260px'}
                    icon={card.icon}
                    name={card.name}
                    description={card.description}
                    onClickButtonHandler={() => {
                      setPlacementType(card.code);
                      setIsAddPlacementModalOpen(true);
                    }}
                  />
                );
              })}
            </PlacementCardBlock>
          </>
        )}
        {/*TODO uncomment later when we add any services */}
        {/*<PlacementHint>*/}
        {/*  Чтобы добавить какие-то услуги, необходимо сначала добавить объект*/}
        {/*</PlacementHint>*/}
      </PlacementContainer>
    </>
  );
};
