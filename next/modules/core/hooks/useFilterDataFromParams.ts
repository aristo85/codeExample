import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks/index';
import {useRouter} from 'next/router';
import {
  selectFilterValues,
  setFilterValue,
} from '@/modules/core/api/filterSlice';
import dayjs from 'dayjs';
import {DEFAULT_DATE_FORMAT} from '@/modules/core/constants';

export const useFilterDataFromQuery = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const filterData = useAppSelector(selectFilterValues);

  useEffect(() => {
    const {
      numOfAdult,
      cityId,
      childAges,
      placementType,
      rating,
      offset,
      roomId,
      ratePlanId,
      specialOffer,
      breakfast,
      amenityCodes,
    } = router.query;

    let {arrivalDate, departureDate} = router.query;
    const countChildAges = (childAges: string[] | string): string[] => {
      if (Array.isArray(childAges)) {
        return childAges;
      } else {
        return [childAges];
      }
    };

    if (
      dayjs(arrivalDate as string).format(DEFAULT_DATE_FORMAT) <
      dayjs().format(DEFAULT_DATE_FORMAT)
    ) {
      arrivalDate = dayjs().format(DEFAULT_DATE_FORMAT);
      departureDate = dayjs().add(1, 'day').format(DEFAULT_DATE_FORMAT);
    }

    dispatch(
      setFilterValue({
        arrivalDate: arrivalDate ? String(arrivalDate) : filterData.arrivalDate,
        departureDate: departureDate
          ? String(departureDate)
          : filterData.departureDate,
        cityId:
          cityId && cityId !== 'null' ? String(cityId) : filterData.cityId,
        rating: rating === 'true',
        // TODO: Uncomment if needed add placementType to store, from query params
        // placementType: placementType
        //   ? (placementType as PlacementType)
        //   : filterData.placementType,
        numOfAdult: numOfAdult ? Number(numOfAdult) : filterData.numOfAdult,
        childAges: childAges ? countChildAges(childAges) : filterData.childAges,
        offset: offset ? Number(offset) : filterData.offset,
        roomId: roomId ? Number(roomId) : filterData.roomId,
        ratePlanId: ratePlanId ? Number(ratePlanId) : filterData.ratePlanId,
        popular: filterData.popular && !filterData.cityId,
        specialOffer: specialOffer === 'true',
        breakfast: breakfast === 'true',
        amenityCodes: amenityCodes ? (amenityCodes as string).split(',') : [],
      }),
    );
  }, [router]);
};
