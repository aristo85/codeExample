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
  popular?: boolean;
  placementType: PlacementType | null;
  breakfast: boolean;
  specialOffer: boolean;
  amenityCodes: string[];
};

export type PlacementFilter = {
  title: string;
  value: string;
};
