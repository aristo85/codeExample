import React, {FC} from 'react';
import {IconTitle, MenuWithIconsButton, MenuWithIconsWrapper} from './styles';
import {selectFilterValues} from '@/modules/core/api/filterSlice';
import {FilterValues} from '@/modules/home/components/Filters/types';
import {useAppSelector} from '@/modules/core/hooks';
import BookingHotelIcon from '@/modules/core/components/icons/BookingHotelIcon';
import AlternativePlacementIcon from '@/modules/core/components/icons/AlternativePlacementIcon';
import ApartmentAndFlatIcon from '@/modules/core/components/icons/ApartmentAndFlatIcon';
import GuestHouseIcon from '@/modules/core/components/icons/GuestHouse';
import {PlacementType} from '@/modules/core/api/model/placement/placementType';
import {QueryLocation, queryHandler} from '@/modules/core/helpers/queryHandler';

interface MenuItem {
  title: string;
  icon: JSX.Element;
  placementType: PlacementType;
}

const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Гостиницы',
    icon: <BookingHotelIcon />,
    placementType: 'HOTEL',
  },
  {
    title: 'Апартаменты/квартиры',
    icon: <ApartmentAndFlatIcon />,
    placementType: 'APARTMENTS',
  },
  {
    title: 'Гостевые дома',
    icon: <GuestHouseIcon />,
    placementType: 'GUEST_HOUSE',
  },
  {
    title: 'Альтернативные варианты',
    icon: <AlternativePlacementIcon />,
    placementType: 'OTHER',
  },
];

const MenuWithIcons: FC<{handler: (value: string) => void}> = ({handler}) => {
  const filterData: FilterValues<string> = useAppSelector(selectFilterValues);

  const searchByPlacementType = (placementType: PlacementType) => {
    const {queriesString} = queryHandler(
      {...filterData, placementType},
      QueryLocation.home,
    );

    handler(queriesString);
  };

  return (
    <MenuWithIconsWrapper>
      {MENU_ITEMS.map(item => (
        <MenuWithIconsButton
          key={item.title}
          onClick={() => searchByPlacementType(item.placementType)}>
          {item.icon}
          <IconTitle>{item.title}</IconTitle>
        </MenuWithIconsButton>
      ))}
    </MenuWithIconsWrapper>
  );
};

export default MenuWithIcons;
