import {CoordinateType} from '@/modules/placement/components/BookingCard';
import {CurrencyEnum} from '@/modules/placement/constants';
import {Service} from '@/modules/profile/types';

export interface DetailPageData {
  id: string;
  amenities: AmenitiesData[];
  partner: {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
  };
  externalId: string;
  name: string;
  description: string;
  email: string;
  phone: string;
  images: string[];
  city: string;
  address: string;
  coordinate: CoordinateType;
  stayUnitKind: null; // WHAT IS IT?
  rating: null | number;
  ratePlans: {
    id: number;
    name: string;
    description: string;
    currency: string;
  }[];
  specialOffer: null | string;
  rooms: Room[];
  services: Service[];
  filterDto: {
    arrivalDate: string | null;
    departureDate: string | null;
    breakfast: boolean | null;
    childAges: number[];
    cityId: number | null;
    isHotel: boolean | null; // CHECK ON BACKEND
    numOfAdult: number;
    placementType: string | null;
    rating: boolean | null;
    specialOffer: boolean | null;
  };
}

export interface GroupedByRoomDetailData extends Omit<DetailPageData, 'rooms'> {
  rooms?: Map<number, Room[]>;
}

export interface Amenities {
  category: string;
  amenities: {code: string; name: string}[];
}

export interface AmenitiesData {
  category: string;
  code: string;
  name: string;
  id: number;
}

export interface CancellationRoomPolicy {
  freeCancellationPossible: boolean;
  freeCancellationDeadlineLocal: string | null;
  freeCancellationDeadlineUtc: string | null;
  penaltyAmount: number;
}

export interface Room {
  description: string;
  images: string[];
  roomName: string;
  roomType: {
    id: number;
    placements: {
      code: string;
      count: number;
      kind: string;
      minAge: null | number;
      maxAge: null | number;
    }[];
  };
  sizeValue: number;
  sizeUnit: string;
  placesToStay: number;
  numberOfAdult: number;
  numberOfChildren: number;
  extraPlaces: number;
  amenitiesWithCategory: Amenities[];
  placementExtraData: {
    roomId: number;
    price: {
      price: number;
      taxAmount: number;
      daysCount: number;
      pricePerDay: number;
      totalPrice: number;
    };
    currencyCode: CurrencyEnum;
    stayDates: {
      arrivalDateTime: string;
      departureDateTime: string;
    };
    fullPlacementsName: string;
    checksum: string;
    roomType: {
      id: number;
      placements: {
        code: string;
        count: number;
        kind: string;
        minAge: null | number;
        maxAge: null | number;
      }[];
    };
    ratePlan: {
      id: number;
    };
    availableServices: null | string;
    cancellationPolicy: CancellationRoomPolicy;
    includedServices?: {id: string; mealPlanCode: string}[];
  };
  prepaymentPrice: number;
}
