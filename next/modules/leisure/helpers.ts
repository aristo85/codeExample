import {ExcursionType, TravelModeType} from '../excursion/types';
import {LeisureFilterParamsData, LeisureType} from './types';

export const getListOfFilters = (filtersData: LeisureFilterParamsData) => {
  const travelModeParams = [
    {
      title: 'Пешком',
      value: TravelModeType.FOOT,
      count: filtersData.travelModeFootCount,
    },
    {
      title: 'На машине',
      value: TravelModeType.CAR,
      count: filtersData.travelModeCarCount,
    },
    {
      title: 'На велосипеде',
      value: TravelModeType.BIKE,
      count: filtersData.travelModeBikeCount,
    },
    {
      title: 'На автобусе',
      value: TravelModeType.BUS,
      count: filtersData.travelModeBusCount,
    },
    {
      title: 'На мотоцикле',
      value: TravelModeType.MOTORCYCLE,
      count: filtersData.travelModeMotorcycleCount,
    },
    {
      title: 'На кораблике',
      value: TravelModeType.BOAT,
      count: filtersData.travelModeBoatCount,
    },
    {
      title: 'В музее',
      value: TravelModeType.MUSEUM,
      count: filtersData.travelModeMuseumCount,
    },
    {
      title: 'В помещении',
      value: TravelModeType.IN_DOOR,
      count: filtersData.travelModeIndoorCount,
    },
    {
      title: 'Конный',
      value: TravelModeType.HORSEBACK,
      count: filtersData.travelModeHorsebackCount,
    },
  ];

  const excursionTypeParams = [
    {
      value: ExcursionType.INDIVIDUAL,
      title: 'Индивидуальный',
      count: filtersData.excursionTypeIndividualCount,
    },
    {
      value: ExcursionType.GROUP,
      title: 'Групповой',
      count: filtersData.excursionTypeGroupCount,
    },
  ];

  const leisureTypeParams = [
    {
      value: LeisureType.EXCURSION,
      title: 'Экскурсия',
      count: filtersData.typeExcursionCount,
    },
    {
      value: LeisureType.GUIDE,
      title: 'Гид',
      count: filtersData.typeGuideCount,
    },
  ];

  return {travelModeParams, excursionTypeParams, leisureTypeParams};
};
