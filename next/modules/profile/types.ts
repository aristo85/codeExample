import {BookingStatus} from '../core/api/types';

export type ProfileType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthdayDate: string;
  commission: string;
  company: string;
};

export type ProfileDataResponse = {
  success: boolean;
  data: ProfileType;
};

export type EditDataValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
};

export type BookingDetail = {
  id: number;
  status: BookingStatus;
  bookingNumber?: string;
  touristData: TouristData;
  placementData: PlacementData;
  cancellationPolicy?: CancellationPolicy;
  isCanBeCancelled: boolean;
};

export type PlacementData = {
  partnerData: PartnerData;
  name: string;
  images: string[];
  rating?: number;
  stayUnitKind: string;
  city: string;
  address: string;
  coordinate: {lat: number; lng: number};
  email: string;
  phone: string;
  roomStays: RoomStay[];
};

export type RoomStay = {
  stayDates: StayDates;
  ratePlan: RatePlan;
  roomType: RoomType;
  guests: Guest[];
  guestCount: {
    adultCount: number;
    childAges: any[];
  };
  checksum: string;
  dailyRates: {priceBeforeTax: number; date: string}[];
  total: {priceBeforeTax: number; taxAmount: number; taxes: any[]};
  services: Service[];
};

export type Service = {
  id: string;
  name: string;
  description: string;
  totalPrice?: number;
  inclusive: boolean;
  kind: string;
  mealPlanCode: string;
  mealPlanName: string;
  vat?: {
    applicable: boolean;
    included?: boolean;
    percent: number;
  };
  questCount?: unknown;
  chargeType: string;
};

export type Guest = {
  firstName: string;
  lastName: string;
  middleName: string;
  citizenship: string;
  sex: string;
};

export type RatePlan = {
  id: string;
  name: string;
  description: string;
  vat: {
    applicable: boolean;
    included?: boolean;
    percent: number;
  } | null;
};

export type RoomType = {
  id: string;
  name: string;
  placements: {
    code: string;
    count: number;
    kind: string;
    minAge?: number;
    maxAge?: number;
  }[];
};

export type StayDates = {
  arrivalDateTime: string;
  departureDateTime: string;
};

export type TouristData = {
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  phone?: string;
  comments?: string;
};

export type PartnerData = {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  phone: string;
};

export type CancellationPolicy = {
  freeCancellationPossible: boolean;
  freeCancellationDeadlineUtc?: string;
  penaltyAmount: number;
};
