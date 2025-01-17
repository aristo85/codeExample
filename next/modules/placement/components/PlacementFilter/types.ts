import {PlacementType} from '@/modules/core/api/model/placement/placementType';

export type FilterValues<T> = {
  arrivalDate: T;
  departureDate: T;
  cityId: string | null;
  rating: boolean;
  numOfAdult: number;
  childAges: string[];
  sort?: string[];
  offset?: string | number;
  limit?: string | number;
  roomId?: null | number | string;
  ratePlanId?: null | number | string;
  placementType: PlacementType | null;
  breakfast: boolean;
  amenityCodes: string[];
  specialOffer: boolean;
};

export type PlacementFilter = {
  title: string;
  value: string;
};
